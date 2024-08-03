import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const authUser = () => {
  const user = JSON.parse(sessionStorage.getItem("token"));
  return user;
};

const ProtectRouter = () => {
  const isAuth = authUser();

  return isAuth ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectRouter;
