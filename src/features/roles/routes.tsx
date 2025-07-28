import type { FC } from "react";
import { Route, Routes } from "react-router";
import { RoleComponent } from "./components";


export const RolesRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route  path="/" element={<RoleComponent />} />
      </Routes>
    </>
  );
};
