import React from "react";
import { OrgFilterContext } from "./org-filter.context";

export const OrgFilterProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [filter, setFilter] = React.useState<string>("lemoncode");

  return (
    <OrgFilterContext.Provider value={{ filter, setFilter }}>
      <>{children}</>
    </OrgFilterContext.Provider>
  );
};
