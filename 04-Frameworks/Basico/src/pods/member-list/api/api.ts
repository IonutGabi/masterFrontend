import { MemberApiModel } from "./api.model";

export const getMembers = (org: string): Promise<MemberApiModel[]> => {
  return fetch(`${process.env.GITHUB_API}/orgs/${org}/members`).then(
    (response) => response.json()
  );
};

export const getMembersByPage = (
  org: string,
  value: number
): Promise<MemberApiModel[]> => {
  return fetch(
    `${process.env.GITHUB_API}/orgs/${org}/members?page=${value}`
  ).then((response) => response.json());
};
