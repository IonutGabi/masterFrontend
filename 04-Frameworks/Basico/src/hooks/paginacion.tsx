import { getPages } from "@/pods/rickandmorty-list/api/api";
import React from "react";

export const usePaginacion = () => {
  const [count, setCount] = React.useState<number>(1);

  React.useEffect(() => {
    getPages().then(setCount);
  }, []);
  return count;
};
