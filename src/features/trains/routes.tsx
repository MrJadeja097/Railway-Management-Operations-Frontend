import type { FC } from "react";
import { Route, Routes } from "react-router";
import { TrainComponent } from "./components";

export const TrainRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<TrainComponent />} />
      </Routes>
    </>
  );
};
