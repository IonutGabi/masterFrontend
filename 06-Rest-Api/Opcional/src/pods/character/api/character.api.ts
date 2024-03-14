import axios from 'axios';
import { CharacterApiModel, getCharacterResponse } from './character.api-model';
import { Lookup } from 'common/models';
import { gql } from 'graphql-request';
import { graphqlClient } from 'core/api/graphql';

export const getCharacter = async (id: string): Promise<CharacterApiModel> => {
  try {
    const query = gql`
      query ($id: ID!) {
        character(id: $id) {
          id
          name
          status
          species
          gender
          image
        }
      }
    `;

    const { character } = await graphqlClient.request<getCharacterResponse>(
      query,
      { id }
    );

    return character;
  } catch (error) {
    console.log(error);
  }
};

export const saveCharacter = async (
  character: CharacterApiModel
): Promise<boolean> => {
  return true;
};
