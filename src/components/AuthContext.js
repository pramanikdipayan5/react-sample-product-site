import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("loggedInUser")
  );

  const login = (user) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setIsLoggedIn(true);
    setLoggedInUser(user);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;