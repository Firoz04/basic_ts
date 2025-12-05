function wrapValue<T>(value: T): T {
  return value;
}

console.log(wrapValue<string>("Hello"));
console.log(wrapValue<number>(100));
