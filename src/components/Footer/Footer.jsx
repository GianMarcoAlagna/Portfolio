import { Contact } from "../Contact/Contact";
import { Resume } from "../Resume/Resume";
import { Reveal } from "../Reveal/Reveal";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer border-before">
      <Reveal>
        <div className="footer__content">
          <Resume />
          <Contact />
        </div>
        <div>
          <p>
            Entirely custom made with ❤️ by <a href="https://github.com/GianMarcoAlagna"><span style={{ textDecoration: "underline" }}>Gian Marco Alagna</span></a>
            <br />Found a bug? Shoot me an <a href="mailto:marcoalagna1@gmail.com"><span style={{ textDecoration: "underline" }}>email</span></a>
          </p>
          <img src="https://skillicons.dev/icons?perline=6&i=js,react,html,css,p5js,vite,vscode,git,github,aws,postgresql" alt="Tech Stack" />
          <p>
            <FaArrowUp /> Tech Stack Icons by <a href="https://skillicons.dev/"><span style={{ textDecoration: "underline" }}>Skill Icons</span></a> <FaArrowUp />
          </p>
        </div>
      </Reveal>
    </footer>
  );
}