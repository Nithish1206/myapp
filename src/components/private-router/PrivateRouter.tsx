import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouter = () => {
  const isAuth = sessionStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export const PrivateLogin = () => {
  const isAuth = sessionStorage.getItem("token");
  sessionStorage.setItem("activeIndex", "0");
  return isAuth ? <Navigate to="/Home" /> : <Outlet />;
};
