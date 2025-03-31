function completeObject<T>(
  partial: Partial<T>,
  completer: (input: Partial<T>) => T
);

function completeObject<T extends { id: string }>(
  partialData: Omit<T, 'id'> & Partial<Pick<T, 'id'>>,
  filler: (data: Omit<T, 'id'> & Partial<Pick<T, 'id'>>) => T
): T;

class Rectangle {
  w!: number;
  h!: number;
}

class Circle {
  radius!: number;
}

function наштампувати<T>(SomeClass: new () => T, count: number): T[] {
  return Array.from({ length: count }, () => new SomeClass());
}

const a: Rectangle[] = наштампувати(Rectangle, 10);
const b: Circle[] = наштампувати(Circle, 20);

console.log(a, b);
