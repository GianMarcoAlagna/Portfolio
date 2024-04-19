import { useContext, createContext, useState } from "react";

export const MainContext = createContext({
  color_mode: "light",
  setColorMode: () => { }
});

export const useMainContext = () => useContext(MainContext);

export const MainProvider = ({ children }) => {
  const [color_mode, setColorMode] = useState(localStorage.getItem('color-mode') || 'light');
  return (
    <MainContext.Provider value={{ color_mode, setColorMode }}>
      {children}
    </MainContext.Provider>
  );
}
