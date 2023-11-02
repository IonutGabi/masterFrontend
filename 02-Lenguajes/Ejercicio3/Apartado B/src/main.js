import { clone } from "../../Apartado A/src/main";

const a = { name: "María", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  const objectMerge = { ...target, ...clone(source) };

  return objectMerge;
}

console.log(merge(a, b));
