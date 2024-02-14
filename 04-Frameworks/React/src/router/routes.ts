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
  characterDetail: "/character-detail/:id",
};

interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (login: string) => string;
}

interface RoutesCharacters extends Omit<SwitchRoutes, "characterDetail"> {
  characterDetail: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  detail: (login: string) => generatePath(switchRoutes.detail, { login }),
};

export const routesCharacters: RoutesCharacters = {
  ...switchRoutes,
  characterDetail: (id: string) =>
    generatePath(switchRoutes.characterDetail, { id }),
};
