import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { AuthProvider } from "./features/auth/AuthProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <AuthProvider>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      closeButton={false}
      theme={"dark"}
      closeOnClick
    />
  </AuthProvider>
  // </StrictMode>,
);
