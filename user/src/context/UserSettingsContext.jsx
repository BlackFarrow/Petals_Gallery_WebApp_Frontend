// user/src/context/UserSettingsContext.jsx
/* eslint-disable react-refresh/only-export-components */


import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create context
const UserSettingsContext = createContext();

// Hook for components to consume the context
export function useUserSettings() {
  return useContext(UserSettingsContext);
}

// Provider component
export function UserSettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    businessName: "",
    currency: "",
    logoUrl: "",
    primaryColor: "#3b240c",
  });

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await axios.get("http://localhost:4000/api/settings");
        if (res.data && res.data.length > 0) {
          const latest = res.data[res.data.length - 1];
          setSettings({
            businessName: latest.businessName,
            currency: latest.currency,
            logoUrl: latest.logoUrl,
            primaryColor: latest.primaryColor,
          });
        }
      } catch (err) {
        console.error("Failed to load settings:", err);
      }
    }

    fetchSettings();
  }, []);

  return (
    <UserSettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </UserSettingsContext.Provider>
  );
}
