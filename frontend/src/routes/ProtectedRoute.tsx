import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const storedUserData = localStorage.getItem("userData");
  const userData = storedUserData ? JSON.parse(storedUserData) : null;
  const isAuthenticated = userData?.userId ? true : false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
