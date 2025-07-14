import type { FC } from "react";
import {  Route, Routes } from "react-router";
import { ProductList, ProductList2 } from "./components";

export const ProductRoutes: FC = () => {
  return (
    <>
      <Routes> 
        <Route index path="" element={<ProductList2 />} />
        <Route index path="abc" element={<ProductList />} />
        <Route index path="bbc" element={<ProductList2 />} />
      </Routes>
    </>
  );
};
