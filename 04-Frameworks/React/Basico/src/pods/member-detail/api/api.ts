import { MemberDetailApiModel } from "./api.model";

export const getMember = (login: string): Promise<MemberDetailApiModel> => {
  return fetch(`${process.env.GITHUB_API}/users/${login}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw new Error(
        `Ha habido un error en la recogida de los datos de la API, ${error}`
      );
    });
};
