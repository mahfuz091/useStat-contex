import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const stat = "I am  Fine";
  const [userStatus, setUserStatus] = useState(stat);

  const authInfo = {
    stat,
    userStatus,
    setUserStatus,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
