import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { CharacterViewModel, createEmptyCharacter } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<CharacterViewModel>(
    createEmptyCharacter()
  );
  const { id } = useParams<{ id: string }>();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  // const handleSave = async (character: CharacterViewModel) => {
  //   const apiCharacter = mapCharacterFromVmToApi(character);
  //   const success = await api.saveCharacter(apiCharacter);
  //   if (success) {
  //     navigate(-1);
  //   } else {
  //     alert('Error on save hotel');
  //   }
  // };

  return <CharacterComponent character={character} />;
};
