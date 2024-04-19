import p5 from "p5";
import { useRef, useEffect } from "react";
import Hive from "../P5/Hive";
import AnotherWorld from "../P5/AnotherWorld";
import { useMainContext } from "../../context/MainContext";
import './Introduction.css';

export const Introduction = () => {
  const p5Container = useRef(null);
  const { color_mode } = useMainContext();

  useEffect(() => {
    const sketch = new p5(color_mode === 'light' ? Hive : AnotherWorld, p5Container.current);
    return () => {
      sketch.remove();
    }
  }, [color_mode]);

  return (
    <>
      <div className="Introduction">
        <div
          id="p5-container"
          ref={p5Container}
        >
          <p className="p5-container__header">
            Welcome to my portfolio
          </p>
        </div>
        <div className="Introduction__content">
          <h1 className="Introduction__header">
            Hey <br /> I'm Gian-Marco Alagna
          </h1>
          <p className="Introduction__paragraph">
            I'm a full stack developer
          </p>
        </div>
      </div>
    </>
  );
}
