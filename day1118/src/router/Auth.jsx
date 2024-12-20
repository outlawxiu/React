import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Auth = (props) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login"></Navigate>
  }
  return <>{props.children}</>;
};

export default Auth;
