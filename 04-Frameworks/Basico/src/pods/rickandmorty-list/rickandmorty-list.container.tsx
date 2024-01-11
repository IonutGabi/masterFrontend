import React from "react";
import { CharacterListViewModel } from "./rickandmorty-list.vm";
import { getAllCharacters, getCharacterByFilter, getPages } from "./api/api";
import { mapCharacterListToVM } from "./rickandmorty-list.mapper";
import { CharactersList } from "./rickandmorty-list.component";
import { useDebounce } from "use-debounce";

export const CharactersListContainer: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);
  const [count, setCount] = React.useState<number>(1);
  const [characters, setCharacters] = React.useState<CharacterListViewModel[]>(
    []
  );
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 500);

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  React.useEffect(() => {
    getAllCharacters(page).then(mapCharacterListToVM).then(setCharacters);
    getCharacterByFilter(debouncedFilter)
      .then(mapCharacterListToVM)
      .then(setCharacters);
  }, [page, debouncedFilter]);

  React.useEffect(() => {
    getPages().then(setCount);
  }, []);

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
