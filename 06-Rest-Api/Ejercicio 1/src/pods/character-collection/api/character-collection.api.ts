import axios from 'axios';
import { CharacterApiModel } from './character-collection-api.model';

export const getCharacterCollection = async (): Promise<
  CharacterApiModel[]
> => {
  try {
    const { data } = await axios.get(
      `${process.env.RICK_AND_MORTY_API}/character`
    );
    return data.results;
  } catch (error) {
    throw new Error('Error al obtener los personajes');
  }
};

// export const deleteHotel = async (id: string): Promise<boolean> => {
//   hotelCollection = hotelCollection.filter((h) => h.id !== id);
//   return true;
// };
