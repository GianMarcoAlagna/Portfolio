import { useEffect, useState } from "react";
import { MainProvider } from "./context/MainContext";
import { Main } from "./components";
import { Preloader } from "./components/Preloader/Preloader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      console.log("loaded");
      setLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <MainProvider>
        <Preloader loading={loading}>
          <Main />
        </Preloader>
      </MainProvider>
    </>
  );
}

export default App;
