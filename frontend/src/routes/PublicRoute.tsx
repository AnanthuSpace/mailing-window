import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const isAuthenticated = !!userData?.userId;

  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
