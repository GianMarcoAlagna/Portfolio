import { useEffect, useRef, useState } from "react";
import { MainProvider } from "./context/MainContext";
import { Main } from "./components";
import { Preloader } from "./components/Preloader/Preloader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [fallback, setFallback] = useState(false);
  const cursorRef = useRef(null);

  function onMouseMove(evt) {
    if (!cursorRef.current) return;

    const x = evt.clientX;
    const y = evt.clientY;

    cursorRef.current.style.top = y - 5 + "px";
    cursorRef.current.style.left = x - 5 + "px";
  }

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      if (!fallback) {
        cursor();
      }
    };

    const cursor = () => {
      document.addEventListener("mousemove", onMouseMove);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
        document.removeEventListener("mousemove", onMouseMove);
      };
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [fallback]);

  return (
    <>
      <MainProvider>
        <Preloader loading={loading}>
          <Main cursorFallback={fallback} />
          <div className="cursor" ref={cursorRef} />
        </Preloader>
      </MainProvider>
    </>
  );
}

export default App;
