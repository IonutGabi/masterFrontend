import React from "react";
import { Card, CardMedia, CardContent, Box, Button } from "@mui/material";
import { CharacterDetailVm } from "./rickandmorty-detail.vm";
import { useNavigate } from "react-router-dom";

interface Props {
  character: CharacterDetailVm;
}

export const CharacterDetail: React.FC<Props> = (props) => {
  const { character } = props;
  const navigate = useNavigate();

  return (
    <>
      {character ? (
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <Card sx={{ maxWidth: 280 }}>
            <CardMedia sx={{ height: 280 }} image={character.image} />

            <CardContent>
              <h3> Name: {character.name}</h3>
              <h4>ID: {character.id}</h4>
              <h4> Gender: {character.gender}</h4>
              <h4> Specie: {character.species}</h4>
            </CardContent>
          </Card>
        </Box>
      ) : (
        <div>Loading...</div>
      )}

      <Button
        variant="contained"
        onClick={() => {
          navigate(-1);
        }}
      >
        Volver atrás
      </Button>
    </>
  );
};
