import React from "react";
import { AppRouter } from "./router/app.router";
import { UserProfileProvider } from "./core/providers/user-profile/user-profile.provider";
import { OrgFilterProvider } from "./core/providers/org-filter/org-filter.provider";

export const App = () => {
  return (
    <>
      <UserProfileProvider>
        <OrgFilterProvider>
          <AppRouter />
        </OrgFilterProvider>
      </UserProfileProvider>
    </>
  );
};
