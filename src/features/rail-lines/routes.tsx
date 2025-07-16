import type { FC } from "react";
import { Route, Routes } from "react-router";
import { RailLineComponent } from "./components";

export const RailLineRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<RailLineComponent />} />
      </Routes>
    </>
  );
};
