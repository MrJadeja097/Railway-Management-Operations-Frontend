import type { FC } from "react";
import { Route, Routes } from "react-router";
import { Train } from "./components";

export const TrainRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<Train />} />
      </Routes>
    </>
  );
};
