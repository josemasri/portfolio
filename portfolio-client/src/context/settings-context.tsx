import { createContext, Dispatch, FunctionComponent, SetStateAction, useState } from "react";

export interface SettingsContextType {
  language: string;
  setLanguage: Function;
  darkMode: boolean;
  setDarkMode: Function;
}

export const SettingsContext = createContext<SettingsContextType>({
  language: "en",
  setDarkMode: () => {},
  darkMode: true,
  setLanguage: () => {}
});

const SettingsProvider: FunctionComponent = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [darkMode, setDarkMode] = useState(true);
  return (
    <SettingsContext.Provider
      value={{
        language,
        setLanguage,
        darkMode,
        setDarkMode
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
