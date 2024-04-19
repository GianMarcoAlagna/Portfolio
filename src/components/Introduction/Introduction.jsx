import p5 from "p5";
import { useRef, useEffect } from "react";
import Hive from "../P5/Hive";
import AnotherWorld from "../P5/AnotherWorld";
import Card from "../Card/Card";
import { useMainContext } from "../../context/MainContext";
import './Introduction.css';
import Skills from "../Util/Skills.json";
import { GradientText } from "../Util/GradientText";

export const Introduction = () => {
  const p5Container = useRef(null);
  const { color_mode } = useMainContext();

  useEffect(() => {
    const sketch = new p5(color_mode === 'dark' ? (p) => Hive(p, window.innerWidth, innerHeight) : (p) => AnotherWorld(p, window.innerWidth, innerHeight), p5Container.current);
    return () => {
      sketch.remove();
    }
  }, [color_mode]);

  return (
    <div className="Introduction" id="home">
      <div
        id="p5-container"
        ref={p5Container}
      >
        <p className="p5-container__header">
          Hey, thanks for checking out my portfolio!
        </p>
      </div>
      <div className="Introduction__content">
        <h1 className="Introduction__header">
          Hey <br /> I'm <GradientText>Gian-Marco Alagna</GradientText>
        </h1>
        <Card>
          <Card.Header>
            About Me
          </Card.Header>
          <Card.Body>
            I'm a full stack developer based in the United States, Texas. <br />
            I have a passion for web development and love creating beautiful and memorable applications. <br />
            I'm always looking for new opportunities to learn and grow as a developer. <br />
          </Card.Body>
          <Card.Footer>
            My day to day stack includes: <br />
            <ul
              className="Grid__list"
            >
              {Skills.map(skill => (
                <li
                  key={skill}
                  className="Grid__list-item"
                >
                  {skill}
                </li>
              ))
              }
            </ul>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            Contact Me
          </Card.Header>
          <Card.Body>
            Email:
            <a
              className="Introduction__email"
              href="mailto: marcoalagna1@gmail.com"
            >
              Marcoalagna1@gmail.com
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
