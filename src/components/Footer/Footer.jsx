import { Contact } from "../Contact/Contact";
import { Resume } from "../Resume/Resume";
import { Reveal } from "../Reveal/Reveal";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer border-before">
      <Reveal>
        <footer className="footer__content">
          <Resume />
          <Contact />
        </footer>
      </Reveal>
    </footer>
  );
}