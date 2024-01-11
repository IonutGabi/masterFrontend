import React from "react";
import { Pagination } from "@mui/material";
import { CharacterListViewModel } from "./rickandmorty-list.vm";

interface Props {
  characters: CharacterListViewModel[];
  page: number;
  count: number;
  filter: string;
  eventOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  paginacion: (e: React.ChangeEvent<unknown>, value: number) => void;
}

export const CharactersList: React.FC<Props> = (props) => {
  const { characters, page, filter, count, paginacion, eventOnChange } = props;

  return (
    <>
      <h2>Lista de personajes de Rick y Morty</h2>
      <input className="field-style" value={filter} onChange={eventOnChange} />

      <div className="list-user-list-container">
        <span className="list-header">Imagen</span>
        <span className="list-header">Nombre</span>
        <span className="list-header">Estado</span>
        {characters.map((character) => (
          <React.Fragment key={character.id}>
            <img src={character.image} alt="Personaje de rick y morty" />
            <span className="span-style">{character.name}</span>
            <span className="span-style">{character.status}</span>
          </React.Fragment>
        ))}
      </div>
      <Pagination count={count} page={page} onChange={paginacion} />
    </>
  );
};
