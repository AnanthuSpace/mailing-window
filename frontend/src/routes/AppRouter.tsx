import { Routes, Route } from "react-router-dom";
import MailLayouts from "../layouts/MailLayouts";
import MailDashboardPage from "../pages/MailDashboardPage";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import OtpCard from "../components/OtpCard";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute"; 

const AppRoutes: React.FC = () => {
  return (
    <Routes>
  
      <Route element={<PublicRoute />}>
        <Route path="/otp" element={<OtpCard />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MailLayouts />}>
          <Route index element={<MailDashboardPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
