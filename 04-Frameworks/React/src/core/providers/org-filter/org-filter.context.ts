import { createContext } from "react";
import { OrgFilter } from "./org-filter.vm";

export const OrgFilterContext = createContext<OrgFilter>(null);
