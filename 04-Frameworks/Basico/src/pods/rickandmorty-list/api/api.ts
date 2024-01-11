import { CharacterApiModel } from "./api.model";

export const getAllCharacters = (
  value: number
): Promise<CharacterApiModel[]> => {
  return fetch(`${process.env.RICK_AND_MORTY_API}/character/?page=${value}`)
    .then((response) => response.json())
    .then((data) => data.results);
};

export const getPages = (): Promise<number> => {
  return fetch(`${process.env.RICK_AND_MORTY_API}/character`)
    .then((response) => response.json())
    .then((data) => data.info.pages);
};

export const getCharacterByFilter = (
  value: string
): Promise<CharacterApiModel[]> => {
  return fetch(`${process.env.RICK_AND_MORTY_API}/character/?name=${value}`)
    .then((response) => response.json())
    .then((data) => data.results);
};
