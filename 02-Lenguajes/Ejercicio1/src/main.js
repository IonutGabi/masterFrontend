import "./style.css";

// Head: Función que devuelve el primer elemento del array que se le pase por parámetro

const head = (arrayNames) => {
  const [firstElement] = arrayNames;

  return firstElement;
};
console.log(head(["Antonio", "Braulio", "Javi"]));

// Tail: Función que devuelve todos los elementos menos el primer elemento

const tail = ([firstElement, ...arrayNames]) => {
  return arrayNames;
};

console.log(tail(["Antonio", "Braulio", "Javi"]));

// Init: Función que devuelve todos los elementos menos el último elemento

const init = (arrayNames) => {
  const arrayNamesCopy = arrayNames.filter(
    (name, index) => index < arrayNames.length - 1
  );
  return arrayNamesCopy;
};
console.log(init(["Manolo", "Victor", "Santi", "Gabi"]));

// Last: Función que devuelve el último elemento del array pasado por párametro

const last = (arrayNames) => {
  const lastElement = arrayNames.find(
    (element, index) => index === arrayNames.length - 1
  );
  return lastElement;
};

console.log(last(["Manolo", "Victor", "Santi", "Gabi"]));
