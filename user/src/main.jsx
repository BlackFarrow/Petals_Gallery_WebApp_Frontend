// user/src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { UserSettingsProvider } from "./context/UserSettingsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserSettingsProvider>
        <App />
      </UserSettingsProvider>
    </BrowserRouter>
  </StrictMode>
);
