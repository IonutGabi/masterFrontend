import React from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { switchRoutes } from "@/router";

export const DashboardScene: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div>
        <h1>Dashboard</h1>
        <button onClick={() => navigate(switchRoutes.list)}>
          Ir a la lista de miembros de Github
        </button>

        <button onClick={() => navigate(switchRoutes.characterList)}>
          Ir a la lista de personajes de rick y morty
        </button>
      </div>
    </AppLayout>
  );
};
