function mapObject<K extends string, V, U>(
  object: Record<K, V>,
  transformer: (value: V) => U
): Record<K, U> {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [key, transformer(value as V)])
  ) as Record<K, U>;
}

const test = { roma: 5, vasya: 2 };

console.log(mapObject(test, (x) => x > 2));
