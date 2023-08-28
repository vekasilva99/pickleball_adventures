"use client";

import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
export function GlobalProvider({ children }) {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <AuthProvider>
        <SessionProvider>
    {children}
    </SessionProvider>
      </AuthProvider>
    </>
  );
}