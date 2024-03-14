import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import { CharacterViewModel } from './character.vm';

interface Props {
  character: CharacterViewModel;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  const navigate = useNavigate();

  return (
    <>
      {character ? (
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <Card sx={{ maxWidth: 280 }}>
            <CardMedia
              sx={{ height: 280 }}
              image={character.image}
              title={character.name}
              component="img"
            />
            <CardContent>
              <h3> Name: {character.name}</h3>
              <h4> Status: {character.status}</h4>
              <h4> Género: {character.gender}</h4>
              <h4> Especie: {character.species}</h4>
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
        Volver a la lista de personajes
      </Button>
    </>
  );
};
