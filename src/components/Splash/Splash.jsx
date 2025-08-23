import { Reveal } from "../Reveal/Reveal";
import { useState, useRef } from "react";
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
    <div className={`splash-container`} ref={splashRef} onMouseUp={handleClick}>
      <div
        className={`splash border-full${
          windowed ? " windowed window-anim-forward" : ""
        }`}
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
            designing exceptional digital experiences. Currently, Im focused on
            building responsive full-stack web applications.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
