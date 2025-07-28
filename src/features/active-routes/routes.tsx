import type { FC } from "react";
import { Route, Routes } from "react-router";
import { ActiveRoutesComponent } from "./components";

export const ActiveRoutesRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route  path="/" element={<ActiveRoutesComponent />} />
      </Routes>
    </>
  );
};
