const student = {
  name: "Gabi",
  surname: "Birsan",
  age: 22,
};

export function clone(source) {
  const sourceCopy = { ...source };
  return sourceCopy;
}

console.log("CopyObject =>", clone(student));
