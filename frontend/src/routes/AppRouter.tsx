import { Routes, Route } from "react-router-dom";
import MailLayouts from "../layouts/MailLayouts";
import MailDashboardPage from "../pages/MailDashboardPage"; 
import Signin from "../components/Signin";
import Signup from "../components/Signup";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MailLayouts />}>
        <Route index element={<MailDashboardPage />} />
      </Route>
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
