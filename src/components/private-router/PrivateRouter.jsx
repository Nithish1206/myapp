import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRouter = () => {
  const isAuth = sessionStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectRouter;
