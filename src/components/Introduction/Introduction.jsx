import { useRef, useEffect } from "react";
import p5 from "p5";
import { useMainContext } from "../../context/MainContext";
import { GradientText } from "../Util/GradientText";
import Hive from "../P5/Hive";
import Card from "../Card/Card";
import './Introduction.css';

export const Introduction = () => {
  const p5Container = useRef(null);
  const introductionRef = useRef(null);
  const { color_mode } = useMainContext();

  useEffect(() => {
    const sketch = new p5((p) => Hive(p, introductionRef.current, color_mode), p5Container.current);
    return () => {
      sketch.remove();
    }
  }, [color_mode]);

  return (
    <div className="Introduction" id="home" ref={introductionRef}>
      <div
        className="header"
        ref={p5Container}
      >
        <p className="header__text">
          Hey, thanks for checking out my portfolio!
        </p>
        <div className="Introduction__content">
          <Card className="Introduction__header">
            <Card.Header>
              I'm <GradientText>Gian-Marco Alagna</GradientText>
            </Card.Header>
          </Card>
        </div>
      </div>
    </div>
  );
}
