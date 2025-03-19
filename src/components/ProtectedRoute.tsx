// src/components/ProtectedRoute.tsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/authcontext";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
