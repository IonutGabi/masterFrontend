import React from "react";
import { CharacterListViewModel } from "./rickandmorty-list.vm";
import { getAllCharacters, getCharacterByFilter, getPages } from "./api/api";
import { mapCharacterListToVM } from "./rickandmorty-list.mapper";
import { CharactersList } from "./rickandmorty-list.component";
import { useFilter, usePaginacion } from "@/hooks";
import { PageContext } from "@/core/providers/page/page-rickandmorty.context";

export const CharactersListContainer: React.FC = () => {
  const { page, setPage } = React.useContext(PageContext);
  const [characters, setCharacters] = React.useState<CharacterListViewModel[]>(
    []
  );
  const count = usePaginacion();
  const { filter, setFilter } = useFilter(setCharacters);

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  React.useEffect(() => {
    getAllCharacters(page).then(mapCharacterListToVM).then(setCharacters);
  }, [page]);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <CharactersList
      characters={characters}
      count={count}
      page={page}
      filter={filter}
      paginacion={handleChange}
      eventOnChange={handleChangeEvent}
    />
  );
};
