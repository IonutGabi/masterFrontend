import { CharacterDetailApiModel } from "./api.model";

export const getCharacter = (id: string): Promise<CharacterDetailApiModel> => {
  return fetch(`${process.env.RICK_AND_MORTY_API}/character/${id}`)
    .then((response) => response.json())
    .then((data) => data);
};
