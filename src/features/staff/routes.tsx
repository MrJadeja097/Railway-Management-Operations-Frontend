import type { FC } from "react";
import { Route, Routes } from "react-router";
import { Staff } from "./components";

export const StaffRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route index path="" element={<Staff />} />
      </Routes>
    </>
  );
};
