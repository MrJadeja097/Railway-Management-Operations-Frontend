import type { FC } from "react";
import { Route, Routes } from "react-router";
import { StaffComponent } from "./components";

export const StaffRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route index path="" element={<StaffComponent />} />
      </Routes>
    </>
  );
};
