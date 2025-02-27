import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="749547603595-paom33orkjarod151em1g61dc7hhu15n.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
