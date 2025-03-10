import { useMutation, useQuery, useQueryClient } from 'react-query';
import './App.css';
import React from 'react';
import axios from 'axios';
import { ButtonClick } from '../enums/button-click';
import { ButtonHandleType } from '../types/button-type';

function App() {
  const queryClient = useQueryClient();

  const { data } = useQuery<{ plus: number; minus: number }>({
    queryKey: ['clickData'],
    queryFn: () => fetch('http://localhost:3005/clicks').then((res) => res.json()),
  });

  function sendClick(type: ButtonClick): Promise<ButtonClick> {
    const req: ButtonHandleType = { type };
    return axios.post('http://localhost:3005/click', req);
  }

  const clickMutation = useMutation({
    mutationFn: sendClick,
    onSuccess: () => {
      queryClient.invalidateQueries(['clickData']);
    },
  });

  return (
    <>
      <button
        onClick={() => clickMutation.mutate(ButtonClick.PLUS)}
        disabled={clickMutation.isLoading}
      >
        Plus
      </button>
      <button
        onClick={() => clickMutation.mutate(ButtonClick.MINUS)}
        disabled={clickMutation.isLoading}
      >
        Minus
      </button>
      <p>"+": {data?.plus || 0}</p>
      <p>"-": {data?.minus || 0}</p>
    </>
  );
}

export default App;
