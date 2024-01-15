import { createContext } from "react";
import { Page } from "./page-rickandmorty.vm";

export const PageContext = createContext<Page>(null);
