import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
  characterList: string;
  characterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  detail: "/detail/:login",
  characterList: "/character-list",
  characterDetail: "/detail/:id",
};

interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (login: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  detail: (login: string) => generatePath(switchRoutes.detail, { login }),
};
