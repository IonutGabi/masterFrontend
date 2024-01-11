import React from "react";
import { MemberDetailEntity } from "./member-detail.vm";
import { useNavigate } from "react-router-dom";

interface Props {
  member: MemberDetailEntity;
}
export const MemberDetail: React.FC<Props> = (props) => {
  const { member } = props;
  const navigate = useNavigate();

  return (
    <>
      {member ? (
        <>
          <img src={member.avatar_url} alt="" />
          <h3>{member.login}</h3>
          <h4>ID: {member.id}</h4>
          <h4>Company: {member.company}</h4>
        </>
      ) : (
        <div>Loading...</div>
      )}

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Volver atrás
      </button>
    </>
  );
};
