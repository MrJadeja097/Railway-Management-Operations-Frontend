import type { FC } from "react";
import { Route, Routes } from "react-router";
import { ActiveRoute } from "./components";

export const ActiveRoutesRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route  path="/" element={<ActiveRoute />} />
      </Routes>
    </>
  );
};
