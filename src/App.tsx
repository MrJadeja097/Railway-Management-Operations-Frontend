import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <>
      <AppRoutes />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};
