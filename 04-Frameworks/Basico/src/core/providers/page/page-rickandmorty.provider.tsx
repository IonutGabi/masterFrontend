import React from "react";
import { PageContext } from "./page-rickandmorty.context";

export const PageProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [page, setPage] = React.useState<number>(1);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <>{children}</>
    </PageContext.Provider>
  );
};
