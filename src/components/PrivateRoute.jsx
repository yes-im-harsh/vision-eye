import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../useAuthStatus";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <h1>Loading</h1>;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/signIn" />;
};

export default PrivateRoute;
