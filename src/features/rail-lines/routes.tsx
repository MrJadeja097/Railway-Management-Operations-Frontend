import type { FC } from "react";
import { Route, Routes } from "react-router";
import { RailLines } from "./components";

export const RailLineRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<RailLines />} />
      </Routes>
    </>
  );
};
