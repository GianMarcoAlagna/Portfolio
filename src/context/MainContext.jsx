import { useContext, createContext, useState, useEffect } from "react";

export const MainContext = createContext({
  color_mode: "light",
  setColorMode: () => {},
  screen: {
    width: window.innerWidth,
    height: window.innerHeight
  }
});

export const useMainContext = () => useContext(MainContext);

export const MainProvider = ({ children }) => {
  const [color_mode, setColorMode] = useState(() => {
    try {
      return localStorage.getItem('color-mode') || 'light';
    } catch (error) {
      console.error("Error accessing localStorage", error);
      return 'light'; // Default to light mode if localStorage fails
    }
  });

  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);  // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <MainContext.Provider value={{ color_mode, setColorMode, screen }}>
      {children}
    </MainContext.Provider>
  );
}