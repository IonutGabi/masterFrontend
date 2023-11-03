import "./style.css";

const concat = (a, b) => {
  const copy = [...a, ...b];
  return copy;
};

console.log(concat([1, 2, 3], [4, 5, 6]));

// Apartado Opcional: Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2)

const concatMultipleArray = (a, b, c) => {
  const multipleCopy = [];
  return multipleCopy.concat(a, b, c);
};

console.log(concatMultipleArray([1, 2, 3], [4, 5, 6], [7, 8, 9]));
