import React from "react";
import { useParams } from "react-router-dom";
import { CharacterDetailVm } from "./rickandmorty-detail.vm";
import { getCharacter } from "./api/api";
import { mapCharacterFromVm } from "./rickandmorty-detail.mapper";
import { CharacterDetail } from "./rickandmorty-detail.component";

export const CharacterDetailContainer: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = React.useState<CharacterDetailVm>();

  React.useEffect(() => {
    getCharacter(id).then(mapCharacterFromVm).then(setCharacter);
  }, [id]);
  return <CharacterDetail character={character} />;
};
