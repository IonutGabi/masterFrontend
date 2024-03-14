import axios from 'axios';
import { CharacterApiModel } from './character.api-model';

const characterListUrl = '/api/characters';

export const getCharacter = async (id: string): Promise<CharacterApiModel> => {
  const { data } = await axios.get(`${characterListUrl}/${id}`);
  return data;
};

export const saveCharacter = async (
  character: CharacterApiModel
): Promise<CharacterApiModel> => {
  if (character.id) {
    await axios.put(`${characterListUrl}/${character.id}`, character);
  } else {
    await axios.post(characterListUrl, character);
  }
  return character;
};
