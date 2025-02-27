import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MailLayouts: React.FC = () => {
    console.log("rendering")
  return (
    <div className="flex min-h-screen">
      <div className="w-64 h-screen bg-gray-100">
        <Sidebar onCompose={() => alert("Compose New Email")} />
      </div>

      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MailLayouts;
