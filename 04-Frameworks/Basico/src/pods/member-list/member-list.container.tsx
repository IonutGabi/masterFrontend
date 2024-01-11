import React from "react";
import { MemberViewModel } from "./member-list.vm";
import { OrgFilterContext } from "@/core/providers/org-filter/org-filter.context";
import { MemberList } from "./member-list.component";
import { getMembers, getMembersByPage } from "./api/api";
import { mapMemberListToVM } from "./member-list.mapper";

export const MemberListContainer: React.FC = () => {
  const [members, setMembers] = React.useState<MemberViewModel[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const { filter, setFilter } = React.useContext(OrgFilterContext);

  React.useEffect(() => {
    getMembers(filter).then(mapMemberListToVM).then(setMembers);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const handleClick = () => {
    getMembers(filter).then(mapMemberListToVM).then(setMembers);
  };

  const handleChangeByPage = (e: React.ChangeEvent<unknown>, value: number) => {
    getMembersByPage(filter, value).then((filter) => {
      setMembers(filter);
      setPage(value);
    });
  };
  return (
    <MemberList
      members={members}
      filter={filter}
      page={page}
      onUpdateOfMembersOrg={handleClick}
      collectEventOnChange={handleChange}
      controlledPaginacion={handleChangeByPage}
    />
  );
};
