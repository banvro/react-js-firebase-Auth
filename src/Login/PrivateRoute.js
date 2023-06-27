


import React from "react";
import { useUserAuth } from "./AuthContext";
import { Redirect  } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Redirect to="/signin" />;
  }
  return children;
};

export default PrivateRoute;