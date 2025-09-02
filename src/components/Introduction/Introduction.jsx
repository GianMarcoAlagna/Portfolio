import Links from "../Util/Links.json";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import gridWave from "../P5/Grid_Wave";
import p5 from "p5";
import { IoIosArrowDown } from "react-icons/io";
import { useMainContext } from "../../context/MainContext";

import "./Introduction.css";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "../../effects/Reveal/Reveal";
import Typed from "../../effects/Typed/Typed";

export const Introduction = () => {
  const bgContainer = useRef(null);
  const sketch = useRef(null);
  const [isModalsOpen, setIsModalsOpen] = useState(false);
  const { screen } = useMainContext();
  const iconLibraries = { Fa: FaIcons, Io: IoIcons, Si: SiIcons, Md: MdIcons };

  function getIconComponent(iconName) {
    const prefix = iconName.slice(0, 2);
    const library = iconLibraries[prefix];
    return library ? library[iconName] : null;
  }

  function setModal() {
    setIsModalsOpen((prev) => !prev);
  }

  useEffect(() => {
    if (bgContainer && bgContainer.current) {
      sketch.current = new p5((p) => {
        gridWave(p, screen.width, screen.height);
      }, bgContainer.current);
    }
    return () => {
      if (sketch.current) {
        sketch.current.remove();
        sketch.current = null;
      }
    };
  }, [screen.width, screen.height]);

  return (
    <div className="hero">
      {/* Background placeholder */}
      <div
        className="background-placeholder"
        ref={(node) => {
          bgContainer.current = node;
        }}
      ></div>

      {/* Central content */}
      <div className="hero-content">
        <h1 className="hero-content-title">
          <Reveal>Gian-Marco</Reveal>
        </h1>
        <div className="hero-content-descriptor">
          <Typed>Software Developer</Typed>
        </div>

        {/* Hero buttons */}
        <div className="hero-buttons">
          {Links.map((link) => {
            const Icon = getIconComponent(link.image);
            return (
              <button key={link.name} className="hero-button">
                <a
                  className="hero-button-link"
                  href={link.link}
                  target="_blank"
                  referrerPolicy="no-referrer"
                ></a>
                {Icon ? <Icon size={24} /> : link.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Placeholder modals */}
      <div className={`modals${isModalsOpen ? " open" : " closed"}`}>
        <div className={`modals-toggle${isModalsOpen ? " up" : ""}`}>
          <div className="modals-toggle-arrows" onClick={setModal}>
            <IoIosArrowDown size={50} />
            <IoIosArrowDown size={50} />
            <IoIosArrowDown size={50} />
          </div>
        </div>
        <div className="modal">About Me</div>
        <div className="modal">Projects</div>
        <div className="modal">Contact</div>
      </div>
    </div>
  );
};
