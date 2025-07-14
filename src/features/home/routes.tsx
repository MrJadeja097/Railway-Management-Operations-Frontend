import type { FC } from "react";
import { Route, Routes } from "react-router";
import { ProductList, ProductList2 } from "./components";

export const ProductRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<ProductList2 />} />
      </Routes>
      <Routes>
        <Route index element={<ProductList />} />
      </Routes>
      <Routes>
        <Route index element={<ProductList2 />} />
      </Routes>
      ;
    </>
  );
};
