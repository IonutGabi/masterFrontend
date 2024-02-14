import React from "react";
import { MemberDetailEntity } from "./member-detail.vm";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardMedia } from "@mui/material";

interface Props {
  member: MemberDetailEntity;
}
export const MemberDetail: React.FC<Props> = (props) => {
  const { member } = props;
  const navigate = useNavigate();

  return (
    <>
      {member ? (
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <Card sx={{ maxWidth: 280 }}>
            <CardMedia sx={{ height: 280 }} image={member.avatar_url} />
            <CardContent>
              <h3>{member.login}</h3>
              <h4>ID: {member.id}</h4>
              <h4>Company: {member.company}</h4>
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
        Vovler atrás
      </Button>
    </>
  );
};
