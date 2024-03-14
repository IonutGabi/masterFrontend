import axios from 'axios';
import { CharacterApiModel } from './character.api-model';
import { Lookup } from 'common/models';

export const getCharacter = async (id: string): Promise<CharacterApiModel> => {
  try {
    const { data } = await axios.get(
      `${process.env.RICK_AND_MORTY_API}/character/${id}`
    );
    return data;
  } catch (error) {
    throw new Error('Error al obtener al personaje');
  }
};

export const saveCharacter = async (
  character: CharacterApiModel
): Promise<boolean> => {
  return true;
};
