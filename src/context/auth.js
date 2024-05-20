"use client";

import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const getProfile = async () => {
    try {
      console.log("AuthContext getProfile");
      const response = await axios.get(
        "https://contentlywriters.com:8088/user/getProfile",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);

      setUser(response.data);
      setIsAuthenticated(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("AuthContext useEffect");
    if (localStorage.getItem("token") === null) {
      setIsAuthenticated(false);
      setIsLoading(false);
    } else {
      console.log("AuthContext useEffect getProfile");
      getProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        user,
        isSuccess,
        isError,
        isAuthenticated,
        message,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(AuthContext);
};
