import { CharacterDetailApiModel } from "./api.model";

export const getCharacter = (id: string): Promise<CharacterDetailApiModel> => {
  return fetch(`${process.env.RICK_AND_MORTY_API}/character/${id}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw new Error(
        `Ha ocurrido un error en la recogida de los datos de la API: ${error}`
      );
    });
};
