import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRouter";
import { Toaster } from "sonner";

const App: React.FC = () => {
  return (
    <>
       <Toaster richColors />
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
};

export default App;
