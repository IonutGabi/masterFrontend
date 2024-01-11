import React from "react";
import { MemberDetailEntity } from "./member-detail.vm";
import { useParams } from "react-router-dom";
import { MemberDetail } from "./member-detail.component";

export const MemberDetailContainer: React.FC = () => {
  const { login } = useParams();
  const [member, setMember] = React.useState<MemberDetailEntity>();

  React.useEffect(() => {
    fetch(`${process.env.GITHUB_API}/users/${login}`)
      .then((response) => response.json())
      .then(setMember);
  }, [login]);

  return <MemberDetail member={member} />;
};
