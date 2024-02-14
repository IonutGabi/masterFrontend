import { MemberListApiModel } from "./api.model";

export const getMembers = (org: string): Promise<MemberListApiModel[]> => {
  return fetch(`${process.env.GITHUB_API}/orgs/${org}/members`)
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(
        `Ha ocurrido un error en la recogida de los datos de la API: ${error}`
      );
    });
};

export const getMembersByPage = (
  org: string,
  value: number
): Promise<MemberListApiModel[]> => {
  return fetch(`${process.env.GITHUB_API}/orgs/${org}/members?page=${value}`)
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(
        `Ha ocurrido un error en la recogida de los datos de la API: ${error}`
      );
    });
};
