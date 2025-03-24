interface objectWithOneField {
  [key: string]: string | number | objectWithOneField | undefined;
}

function getNumbersFromCValues(A: objectWithOneField | undefined): number {
  let sum = 0;

  if (typeof A === "undefined") {
    return 2022;
  }

  for (const value of Object.values(A)) {
    if (value && typeof value === "object" && "cvalue" in value) {
      const cvalue = value.cvalue;

      if (typeof cvalue === "number") {
        sum += cvalue;
      } else if (typeof cvalue === "string") {
        const num = Number(cvalue);
        sum += isNaN(num) ? 2022 : num;
      } else if (typeof cvalue === "object" && cvalue !== null) {
        sum += getNumbersFromCValues(cvalue);
      } else {
        sum += 2022;
      }
    } else {
      sum += 2022;
    }
  }

  return sum;
}

const obj = {
  hello: { cvalue: 1 },
  world: { cvalue: { yay: { cvalue: "2" } } },
  undefined: undefined,
};

console.log(getNumbersFromCValues(obj));
