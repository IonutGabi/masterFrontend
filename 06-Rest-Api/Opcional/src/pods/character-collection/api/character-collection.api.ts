import {
  CharacterApiModel,
  GetCharacterCollectionResponse,
} from './character-collection-api.model';
import { gql } from 'graphql-request';
import { graphqlClient } from 'core/api/graphql';

export const getCharacterCollection = async (): Promise<
  CharacterApiModel[]
> => {
  try {
    const query = gql`
      query {
        characters {
          results {
            id
            name
            status
            species
            gender
            image
          }
        }
      }
    `;

    const { characters } =
      await graphqlClient.request<GetCharacterCollectionResponse>(query);

    return characters.results;
  } catch (error) {
    throw new Error('Error al cargar la lista de personajes');
  }
};

// export const deleteHotel = async (id: string): Promise<boolean> => {
//   hotelCollection = hotelCollection.filter((h) => h.id !== id);
//   return true;
// };
