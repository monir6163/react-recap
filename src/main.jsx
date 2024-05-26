import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";
import DogsProvider from "./provider/DogProvider.jsx";
import { router } from "./routes/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DogsProvider>
        <ToastContainer position="bottom-right" autoClose="3000" />
        <RouterProvider router={router} />
      </DogsProvider>
    </AuthProvider>
  </React.StrictMode>
);
