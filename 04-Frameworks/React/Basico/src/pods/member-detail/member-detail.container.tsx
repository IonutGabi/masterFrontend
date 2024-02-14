import React from "react";
import { MemberDetailEntity } from "./member-detail.vm";
import { useParams } from "react-router-dom";
import { MemberDetail } from "./member-detail.component";
import { getMember } from "./api/api";
import { mapMemberDetailToVM } from "./member-detail.mapper";

export const MemberDetailContainer: React.FC = () => {
  const { login } = useParams();
  const [member, setMember] = React.useState<MemberDetailEntity>();

  React.useEffect(() => {
    getMember(login).then(mapMemberDetailToVM).then(setMember);
  }, [login]);

  return <MemberDetail member={member} />;
};
