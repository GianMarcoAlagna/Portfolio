import { useEffect, useRef, useState } from "react";
import { MainProvider } from "./context/MainContext";
import { Main } from "./components";
import { Preloader } from "./components/Preloader/Preloader";
import "./App.css";
import "./Animations.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [fallback, setFallback] = useState(false);
  const cursorRef = useRef(null);

  function onMouseMove(evt) {
    if (!cursorRef.current) return;

    const cursorSize = 24; // assuming 10px (5px offset each side)
    const halfSize = cursorSize / 2;

    let x = evt.clientX - halfSize;
    let y = evt.clientY - halfSize;

    const maxX = window.innerWidth - cursorSize;
    const maxY = window.innerHeight - cursorSize;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    cursorRef.current.style.top = `${y}px`;
    cursorRef.current.style.left = `${x}px`;
  }

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      if (matchMedia("(pointer:fine)").matches) {
        setFallback(false);
      } else {
        setFallback(true);
      }

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
          {!fallback && <div className="cursor" ref={cursorRef} />}
        </Preloader>
      </MainProvider>
    </>
  );
}

export default App;
