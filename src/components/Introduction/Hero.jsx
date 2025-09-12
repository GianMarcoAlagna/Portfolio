import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";
import Links from "../Util/Links.json";
import Typed from "../../effects/Typed/Typed";
import { Reveal } from "../../effects/Reveal/Reveal";

import "./Hero.css";

export const Hero = ({ isActive }) => {
  const iconLibraries = {
    Fa: FaIcons,
    Io: IoIcons,
    Si: SiIcons,
    Md: MdIcons,
  };

  function getIconComponent(iconName) {
    const prefix = iconName.slice(0, 2);
    const library = iconLibraries[prefix];
    return library ? library[iconName] : null;
  }
  const dashStyle = { color: "oklch(70% 0.19981 255.155)" };
  return (
    <>
      <div className={`hero-content ${isActive ? "active" : "inactive"}`}>
        <h1 className="hero-content-title">
          <Reveal>
            Gian<span style={dashStyle}>-</span>Marco
          </Reveal>
        </h1>
        <div className="hero-content-descriptor impression">
          <Typed smooth={false}>Software Developer</Typed>
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
                {Icon ? (
                  <Icon
                    size={screen.width > 1280 ? 32 : 24}
                    className="svg-gradient"
                  />
                ) : (
                  link.name
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
