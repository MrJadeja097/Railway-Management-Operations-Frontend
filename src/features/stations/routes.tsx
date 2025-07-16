import type { FC } from "react";
import { Route, Routes } from "react-router";
import { StationComponent } from "./components";

export const StationRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route index path="" element={<StationComponent />} />
      </Routes>
    </>
  );
};
