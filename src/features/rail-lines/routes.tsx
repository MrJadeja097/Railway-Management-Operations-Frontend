import type { FC } from "react";
import { Route, Routes } from "react-router";
import { RailLinesComponent } from "./components";

export const RailLineRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<RailLinesComponent />} />
      </Routes>
    </>
  );
};
