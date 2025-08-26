import Splash from "../Splash/Splash";
import Stars from "../P5/Stars";
import Grid_Wave from "../P5/Grid_Wave";
import Links from "../Util/Links.json";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import p5 from "p5";

import { useMainContext } from "../../context/MainContext";
import { useRef, useEffect } from "react";
import { ColorMode } from "../Navbar/ColorMode";

import "./Introduction.css";

export const Introduction = () => {
  const p5Container = useRef(null);
  const p5Instance = useRef(null);
  const { screen, color_mode } = useMainContext();

  useEffect(() => {
    if (p5Container.current && !p5Instance.current) {
      p5Instance.current = new p5(
        (p) =>
          color_mode === "dark"
            ? Stars(p, window.innerWidth, window.innerHeight)
            : Grid_Wave(p, window.innerWidth, window.innerHeight),
        p5Container.current
      );
    }

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
        p5Instance.current = null;
      }
    };
  }, [screen.width, screen.height, color_mode]);

  const iconLibraries = {
    Fa: FaIcons,
    Io: IoIcons,
    Si: SiIcons,
    Md: MdIcons,
  };

  function getIconComponent(iconName) {
    const prefix = iconName.slice(0, 2); // e.g. "Fa" from "FaLinkedin"
    const library = iconLibraries[prefix];
    return library ? library[iconName] : null;
  }

  return (
    <div className="hero" id="home">
      <div className="hero-content grid">
        <div
          className="p5-wrapper"
          ref={(node) => {
            p5Container.current = node; // p5 canvas target
          }}
        />
        <div className="left-sidebar">
          <div className="hero-buttons">
            {Links.map((link) => {
              const Icon = getIconComponent(link.image);

              return (
                <a
                  className="hero-link"
                  key={link.name}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="hero-button">
                    {Icon ? <Icon size={40} /> : link.name}
                  </button>
                </a>
              );
            })}
            <ColorMode />
          </div>
        </div>
        <div className="center">
          <Splash />
        </div>
        <div className="right-sidebar"></div>
      </div>
    </div>
  );
};
