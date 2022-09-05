import React, { createContext, useState } from "react";

const initialAuthContextValue = {
  loggedInUser: "",
  setLoggedInUser: (username: string) => {},
};

export const AuthContext = createContext(initialAuthContextValue);

interface AuthProviderProps {
  children: React.ReactNode;
  initialLoggedInUser: string;
}
function AuthProvider({ children, initialLoggedInUser }: AuthProviderProps) {
  const [loggedInUser, setLoggedInUser] = useState(initialLoggedInUser);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
