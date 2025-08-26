import { Reveal } from "../Reveal/Reveal";
import { useState, useRef } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Typed from "../Typed/Typed";
import "./Splash.css";

function Splash() {
  const [windowed, setWindowed] = useState(false);

  const splashRef = useRef(null);

  function handleClick() {
    console.log("clicked");
    setWindowed(!windowed);
  }

  return (
    <div
      className={`splash-wrapper`}
      // style={{ overflow: `${windowed ? "scroll" : "hidden"}` }}
    >
      <span className="scroll-indicator">
        <IoIosArrowDropdownCircle
          size={48}
          className="scroll-indicator__icon"
        />
      </span>
      <div className={`splash-container`} ref={splashRef}>
        <div
          className={`splash border-full${
            windowed ? " windowed window-anim-forward" : ""
          }`}
          onMouseUp={handleClick}
        >
          <div className="splash__content">
            <h1 className="splash__title">
              <Reveal>Gian-Marco Alagna</Reveal>
            </h1>
            <div className="splash__description">
              <Typed>Software Engineer</Typed>
            </div>
            <div className="splash__text">
              Im a software engineer specializing in building and occasionally
              designing exceptional digital experiences. Currently, Im focused
              on building responsive full-stack web applications.
            </div>
          </div>
        </div>
      </div>
      <div className={`splash-container`} ref={splashRef}>
        <div
          className={`splash border-full${
            windowed ? " windowed window-anim-forward" : ""
          }`}
          onMouseUp={handleClick}
        >
          <div className="splash__content">
            <h1 className="splash__title">
              <Reveal>About Me</Reveal>
            </h1>
            <div className="splash__description">
              <Typed>Personal Interests</Typed>
            </div>
            <div className="splash__text">This is a test projects section.</div>
          </div>
        </div>
      </div>
      <div className={`splash-container`} ref={splashRef}>
        <div
          className={`splash border-full${
            windowed ? " windowed window-anim-forward" : ""
          }`}
          onMouseUp={handleClick}
        >
          <div className="splash__content">
            <h1 className="splash__title">
              <Reveal>Projects</Reveal>
            </h1>
            <div className="splash__description">
              <Typed>Highlighted Projects</Typed>
            </div>
            <div className="splash__text">Test About Me Section</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
