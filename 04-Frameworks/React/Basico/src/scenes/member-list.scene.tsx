import React from "react";
import { AppLayout } from "@/layouts/app.layout";
import { MemberListContainer } from "@/pods/member-list";

export const MemberListScene: React.FC = () => {
  return (
    <AppLayout>
      <MemberListContainer />
    </AppLayout>
  );
};
