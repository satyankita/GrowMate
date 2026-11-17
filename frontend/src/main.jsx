
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import "./index.css";
import VoiceAssistantProvider from "./hooks/VoiceAssistantProvider";

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID?.trim() || "";
const hasValidGoogleClientId = /^\d+-[A-Za-z0-9_-]+\.apps\.googleusercontent\.com$/.test(googleClientId);

const application = (
  <BrowserRouter>
    <VoiceAssistantProvider>
      <App />
    </VoiceAssistantProvider>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {hasValidGoogleClientId ? (
      <GoogleOAuthProvider clientId={googleClientId}>
        {application}
      </GoogleOAuthProvider>
    ) : application}
  </React.StrictMode>
);
