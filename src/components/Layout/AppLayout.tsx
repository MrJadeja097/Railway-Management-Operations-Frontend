import { type FC } from "react";
import { Outlet } from "react-router";
import { Header } from "../Header";



export const AppLayout: FC = () => {
  return (
    <div className="">
      {/* Header */}
      <Header />
      <main className="">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
