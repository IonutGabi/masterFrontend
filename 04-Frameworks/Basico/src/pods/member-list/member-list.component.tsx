import React from "react";
import { Box, Button, Pagination, TextField } from "@mui/material";
import { MemberListViewModel } from "./member-list.vm";
import { routes } from "@/router";
import { Link } from "react-router-dom";

interface Props {
  members: MemberListViewModel[];
  filter: string;
  page: number;
  onUpdateOfMembersOrg: () => void;
  collectEventOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  controlledPaginacion: (e: React.ChangeEvent<unknown>, value: number) => void;
}

export const MemberList: React.FC<Props> = (props) => {
  const {
    members,
    filter,
    page,
    onUpdateOfMembersOrg,
    collectEventOnChange,
    controlledPaginacion,
  } = props;

  return (
    <>
      <h2>List page</h2>
      <input
        className="field-style"
        value={filter}
        onChange={collectEventOnChange}
      />
      <button onClick={onUpdateOfMembersOrg}>Filtrar</button>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={routes.detail(member.login)}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Box display="flex" justifyContent="center">
        <Pagination count={5} page={page} onChange={controlledPaginacion} />
      </Box>
    </>
  );
};
