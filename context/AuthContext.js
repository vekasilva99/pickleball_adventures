"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  const registerUser = async ({ first_name,last_name, email,birthdate,gender,country,state,phone_number, password }) => {
    try {
      const { data } = await axios.post(
        `https://pickleball-adventures.vercel.app/api/users`,
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
        router.push("/");
      }

    
    } catch (error) {
   
      setError(error?.response?.data?.error);
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