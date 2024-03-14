import axios from 'axios';
import { CharacterApiModel } from './character-collection-api.model';

const url = '/api/characters';

export const getCharacterCollection = async (): Promise<
  CharacterApiModel[]
> => {
  const { data } = await axios.get<CharacterApiModel[]>(url);
  return data;
};

// export const deleteHotel = async (id: string): Promise<boolean> => {
//   hotelCollection = hotelCollection.filter((h) => h.id !== id);
//   return true;
// };
