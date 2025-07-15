import type { FC } from "react";
import { Route, Routes } from "react-router";
import { Station } from "./components";

export const StationRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route index path="" element={<Station />} />
      </Routes>
    </>
  );
};
