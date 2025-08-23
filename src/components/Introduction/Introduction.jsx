import Splash from "../Splash/Splash";
import Stars from "../P5/Stars";
import p5 from "p5";
import Links from "../Util/Links.json";

import { useRef, useEffect, useState } from "react";
import { ColorMode } from "../Navbar/ColorMode";
import { useInView } from "react-intersection-observer";

import "./Introduction.css";

export const Introduction = () => {
  const { ref: inViewRef, inView } = useInView({ threshold: 0 });
  const textRef = useRef(null);
  const heroRef = useRef(null);
  const p5Container = useRef(null);
  const p5Instance = useRef(null);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);

  useEffect(() => {
    // get the height of the text element + window height
    if (textRef.current) {
      const textHeight = textRef.current.offsetHeight;
      setCanvasHeight(textHeight + window.innerHeight);
    }
  }, []);

  useEffect(() => {
    if (p5Container.current && !p5Instance.current) {
      // Mount sketch
      p5Instance.current = new p5(
        (p) => Stars(p, window.innerWidth, window.innerHeight),
        p5Container.current
      );
    }

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
        p5Instance.current = null;
      }
    };
  }, [canvasHeight]);

  useEffect(() => {
    if (p5Instance.current) {
      if (inView) {
        p5Instance.current.loop();
      } else {
        p5Instance.current.noLoop();
      }
    }
  }, [inView]);

  const links = [];
  Links.forEach((link) => {
    links.push(
      <a
        className="hero-link"
        key={link.name}
        href={link.link}
        target="_blank"
        rel="noreferrer"
      >
        <button className="hero-button">{link.name}</button>
      </a>
    );
  });

  return (
    <hero className="hero" id="home" ref={heroRef}>
      <div
        className="hero-header"
        ref={(node) => {
          inViewRef(node); // hook ref
          p5Container.current = node; // p5 canvas target
        }}
      >
        <p ref={textRef} className="hero-text border-bottom">
          Welcome
        </p>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-info">
              <div className="hero-side-buttons">
                {links}
                <ColorMode />
              </div>
            </div>
          </div>
          <div className="hero-center">
            <Splash />
          </div>
          <div className="hero-right"></div>
        </div>
        <div className="p5-wrapper" />
      </div>
    </hero>
  );
};
