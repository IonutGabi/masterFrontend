import { getCharacterByFilter } from "@/pods/rickandmorty-list/api/api";
import { mapCharacterListToVM } from "@/pods/rickandmorty-list/rickandmorty-list.mapper";
import { CharacterListViewModel } from "@/pods/rickandmorty-list/rickandmorty-list.vm";
import React from "react";
import { useDebounce } from "use-debounce";

export const useFilter = (
  updateCharacters: (characters: CharacterListViewModel[]) => void
) => {
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 500);

  React.useEffect(() => {
    getCharacterByFilter(debouncedFilter)
      .then(mapCharacterListToVM)
      .then(updateCharacters);
  }, [debouncedFilter]);

  return { filter, setFilter };
};
