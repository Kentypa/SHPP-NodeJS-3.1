import express from 'express';
import cors from 'cors';
import { ButtonClick } from '../enums/button-click';

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

const clickCounts = { plus: 0, minus: 0 };

app.get('/clicks', (req, res) => {
  res.json(clickCounts);
});

app.post('/click', (req, res) => {
  const { type } = req.body;

  if (type === ButtonClick.PLUS) clickCounts.plus++;
  else if (type === ButtonClick.MINUS) clickCounts.minus++;

  res.status(200).json(clickCounts);
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
