import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LevelProvider } from "./contexts/LevelContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LevelProvider>
      <RouterProvider router={router}></RouterProvider>
    </LevelProvider>
  </React.StrictMode>,
);
