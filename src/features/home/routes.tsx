import type { FC } from "react";
import { Route, Routes } from "react-router";
import { HomeComponent } from "./components/Home";


export const HomeRoute: FC = () => {
  return (
    <>
      <Routes>
        <Route index path="" element={<HomeComponent />} />
      </Routes>
    </>
  );
};
