import React, { createContext, useContext, useState } from "react";

type AuthContextType = {
  isSignedIn: boolean;
  signIn: () => void;
  signUp: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = () => setIsSignedIn(true);
  const signUp = () => setIsSignedIn(true);
  const signOut = () => setIsSignedIn(false);

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  console.log(context);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
