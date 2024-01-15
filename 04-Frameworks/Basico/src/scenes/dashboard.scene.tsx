import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import { AppLayout } from "@/layouts";
import { switchRoutes } from "@/router";

export const DashboardScene: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <Box display="flex" justifyContent="center">
        <div>
          <h1>Dashboard</h1>
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              onClick={() => navigate(switchRoutes.list)}
            >
              Ir a la lista de miembros de Github
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate(switchRoutes.characterList)}
            >
              Ir a la lista de personajes de rick y morty
            </Button>
          </Stack>
        </div>
      </Box>
    </AppLayout>
  );
};
