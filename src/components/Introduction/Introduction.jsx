import { useRef, useEffect } from "react";
import p5 from "p5";
import { useMainContext } from "../../context/MainContext";
import Hive from "../P5/Hive";
import './Introduction.css';
import Splash from "../Splash/Splash";

export const Introduction = ({ lenis }) => {
  const p5Container = useRef(null);
  const introductionRef = useRef(null);
  const { color_mode } = useMainContext();

  useEffect(() => {
    lenis.on('scroll', ({ scroll }) => {
      if (scroll > 0) {
        introductionRef.current.style.height = `calc(100vh - ${scroll}px)`;
        introductionRef.current.style.transform = `perspective(1000px) rotateX(-${scroll / 10}deg)`;
      } else {
        introductionRef.current.style.height = '100vh';
        introductionRef.current.style.transform = 'perspective(0px) rotateX(0deg)';
      }
    });
    const sketch = new p5((p) => Hive(p, color_mode), p5Container.current);
    return () => {
      sketch.remove();
    }
  }, [color_mode]);

  return (
    <header className="Introduction" id="home" ref={introductionRef}>
      <div
        className="Introduction__header"
        ref={p5Container}
      >
        <p className="header__text border-after">
          Hey, thanks for checking out my portfolio!
        </p>
        <div className="Introduction__content">
          <Splash />
        </div>
      </div>
    </header>
  );
}
