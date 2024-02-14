import { AppLayout } from "@/layouts";
import { CharacterDetailContainer } from "@/pods/rickandmorty-detail";
import React from "react";

export const CharacterDetailScene: React.FC = () => {
  return (
    <AppLayout>
      <CharacterDetailContainer />
    </AppLayout>
  );
};
