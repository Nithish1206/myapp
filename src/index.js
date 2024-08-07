import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./components/service/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
);
