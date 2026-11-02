import { createContext, useContext, useEffect, useState } from "react";
import { api } from "./apiClient";
import { BACKGROUND_FALLBACKS } from "../data/backgrounds";

/* Exposes admin-manageable background images fetched from the
   site_settings key-value store. Every slot falls back to its bundled
   asset, so pages render correctly without a backend connection. */

const BackgroundsContext = createContext({
  getBackground: (key) => BACKGROUND_FALLBACKS[key],
  backgrounds: BACKGROUND_FALLBACKS,
});

export function BackgroundsProvider({ children }) {
  const [backgrounds, setBackgrounds] = useState(BACKGROUND_FALLBACKS);

  useEffect(() => {
    let active = true;
    api
      .fetchSettings()
      .then((settings) => {
        if (!active || !settings || typeof settings !== "object") return;
        setBackgrounds((prev) => {
          const next = { ...prev };
          for (const key of Object.keys(BACKGROUND_FALLBACKS)) {
            if (settings[key]) next[key] = settings[key];
          }
          return next;
        });
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const getBackground = (key) => backgrounds[key] || BACKGROUND_FALLBACKS[key];

  return (
    <BackgroundsContext.Provider value={{ getBackground, backgrounds }}>
      {children}
    </BackgroundsContext.Provider>
  );
}

export function useBackground(key) {
  return useContext(BackgroundsContext).getBackground(key);
}
