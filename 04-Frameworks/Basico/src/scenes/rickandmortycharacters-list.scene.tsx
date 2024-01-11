import { AppLayout } from "@/layouts";
import { CharactersListContainer } from "@/pods/rickandmorty-list";
import React from "react";

export const CharactersListScene: React.FC = () => {
  return (
    <AppLayout>
      <CharactersListContainer />
    </AppLayout>
  );
};
