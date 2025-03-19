// src/contexts/AuthContext.tsx
import { createContext } from "react";

interface AuthContextType {
  user: any | null;
}

const AuthContext = createContext<AuthContextType>({ user: null });

export default AuthContext;
