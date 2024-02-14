import React from "react";
import { AppRouter } from "./router/app.router";
import { UserProfileProvider } from "./core/providers/user-profile/user-profile.provider";
import { OrgFilterProvider } from "./core/providers/org-filter/org-filter.provider";
import { PageProvider } from "./core/providers/page/page-rickandmorty.provider";

export const App = () => {
  return (
    <>
      <UserProfileProvider>
        <OrgFilterProvider>
          <PageProvider>
            <AppRouter />
          </PageProvider>
        </OrgFilterProvider>
      </UserProfileProvider>
    </>
  );
};
