"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import LoaderContext from "./LoaderContext";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { setLoading } = useContext(LoaderContext);
  const router = useRouter();

  const registerUser = async ({ first_name,last_name, email,birthdate,gender,country,state,phone_number, password }) => {
    try {
      const { data } = await axios.post(
        `${process.env.WEBAPP_URL}api/users`,
        {
        first_name,
        last_name, 
        email,
        birthdate,
        gender,
        country,
        state,
        phone_number, 
        password
        }
      );

      if (data?.user) {
        router.push("/sign-in");
        setLoading(false)
      }

    
    } catch (error) {
   
      setError(error?.response?.data?.error);
      setLoading(false)
    }
  };

  const clearErrors = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        setUser,
        registerUser,
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;