import React from "react";
import { LoginContainer } from "@/pods/login";
import { CenteredLyout } from "@/layouts";

export const LoginScene: React.FC = () => {
  return (
    <CenteredLyout>
      <LoginContainer />
    </CenteredLyout>
  );
};
