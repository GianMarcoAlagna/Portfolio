import p5 from "p5";
import Hive from "../P5/Hive";
import Splash from "../Splash/Splash";
import { useRef, useEffect } from "react";
import { useMainContext } from "../../context/MainContext";
import { useInView } from "react-intersection-observer";
import './Introduction.css';

export const Introduction = ({ lenis, dynamic }) => {
  const p5Container = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const introductionRef = useRef(null);
  const { color_mode } = useMainContext();
  const p5Instance = useRef(null);
  const { screen } = useMainContext();

  useEffect(() => {
    const onScroll = ({ scroll }) => {
      // console.log(lenis.targetScroll);
      if (scroll > 0) {
        introductionRef.current.style.height = `calc(100vh - ${(lenis.targetScroll * 1.5)}px)`;
      } else {
        introductionRef.current.style.height = '100vh';
      }
    };

    if (dynamic && screen.width > 725) {
      lenis.on('scroll', onScroll);
    }

    p5Instance.current = new p5((p) => Hive(p, color_mode), p5Container.current);

    return () => {
      p5Instance.current.remove();
      lenis.off('scroll', onScroll);
    };
  }, [color_mode, lenis, dynamic]);

  useEffect(() => {
    if (p5Instance.current) {
      if (inView) {
        p5Instance.current.loop();
      } else {
        p5Instance.current.noLoop();
      }
    }
  }, [inView]);

  return (
    <header className="Introduction" id="home" ref={introductionRef}>
      <div
        className="Introduction__header"
        ref={node => {
          ref(node);
          p5Container.current = node;
        }}
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
};
