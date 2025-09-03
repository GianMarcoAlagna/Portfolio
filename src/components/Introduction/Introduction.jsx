import { IoIosArrowDown } from "react-icons/io";
import { useMainContext } from "../../context/MainContext";
import { useEffect, useRef, useState } from "react";

import { AnimatedPages } from "./Page.jsx";
import { usePage } from "./usePage.js";

import p5 from "p5";
import gridWave from "../P5/Grid_Wave";

import "./Introduction.css";

export const Introduction = () => {
  const firstLoad = useRef(true);
  const bgContainer = useRef(null);
  const sketch = useRef(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const { activePage, setActivePage } = usePage();
  const { screen } = useMainContext();

  function setModal() {
    setIsModalsOpen((prev) => !prev);
  }

  useEffect(() => {
    firstLoad.current = false;
    if (bgContainer && bgContainer.current) {
      sketch.current = new p5((p) => {
        gridWave(p, screen.width, screen.height);
      }, bgContainer.current);
    }
    return () => {
      if (sketch.current) {
        firstLoad.current = true;
        sketch.current.remove();
        sketch.current = null;
      }
    };
  }, [screen.width, screen.height]);

  return (
    <div className="hero">
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(70% 0.20 255)" />
            <stop offset="100%" stopColor="oklch(60% 0.20 245)" />
          </linearGradient>
        </defs>
      </svg>
      <div
        className="background-placeholder"
        ref={(node) => {
          bgContainer.current = node;
        }}
      ></div>

      {/* Central content */}
      <AnimatedPages page={activePage} firstLoad={firstLoad} />

      {/* modals */}
      <div className={`modals${isModalsOpen ? " open" : " closed"}`}>
        <div className={`modals-toggle clickable${isModalsOpen ? " up" : ""}`}>
          <div className="modals-toggle-arrows" onClick={setModal}>
            <IoIosArrowDown size={50} />
            <IoIosArrowDown size={50} />
            <IoIosArrowDown size={50} />
          </div>
        </div>

        <button
          className={`modal${activePage === "About" ? " modal-active" : ""}`}
          onClick={() => setActivePage("About")}
        >
          About Me
        </button>
        <button
          className={`modal${activePage === "Projects" ? " modal-active" : ""}`}
          onClick={() => setActivePage("Projects")}
        >
          Projects
        </button>
        <button
          className={`modal${activePage === "Contact" ? " modal-active" : ""}`}
          onClick={() => setActivePage("Contact")}
        >
          Contact
        </button>
      </div>
    </div>
  );
};
