import type { FC } from "react";
import { Route, Routes } from "react-router";
import { ActiveRoutes } from "./components";

export const ActiveRoutesRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route  path="/" element={<ActiveRoutes />} />
      </Routes>
    </>
  );
};
