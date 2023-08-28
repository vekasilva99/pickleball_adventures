"use client";

import { AuthProvider } from "@/context/AuthContext";
import { LoaderProvider } from "@/context/LoaderContext";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
export function GlobalProvider({ children }) {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <LoaderProvider>
      <AuthProvider>
        <SessionProvider>
    {children}
    </SessionProvider>
      </AuthProvider>
      </LoaderProvider>
    </>
  );
}