import { Contact } from "../Contact/Contact";
import { Resume } from "../Resume/Resume";
import { Reveal } from "../Reveal/Reveal";
// import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer border-before">
      <Reveal>
        <div className="footer__content">
          <Resume />
          <Contact />
        </div>
      </Reveal>
    </footer>
  );
};
