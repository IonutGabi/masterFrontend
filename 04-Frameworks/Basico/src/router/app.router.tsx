import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";
import { MemberListScene } from "@/scenes/member-list.scene";
import { MemberDetailScene } from "@/scenes/member-detail.scene";
import { DashboardScene } from "@/scenes/dashboard.scene";
import { CharactersListScene } from "@/scenes/rickandmortycharacters-list.scene";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<DashboardScene />} />
        <Route path={switchRoutes.list} element={<MemberListScene />} />
        <Route path={switchRoutes.detail} element={<MemberDetailScene />} />
        <Route
          path={switchRoutes.characterList}
          element={<CharactersListScene />}
        />
      </Routes>
    </BrowserRouter>
  );
};
