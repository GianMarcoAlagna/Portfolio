import { Contact } from "../Contact/Contact";
import { Resume } from "../Resume/Resume";
import { Reveal } from "../Reveal/Reveal";
import "./Footer.css";

export const Footer = () => {
  return (
    <Reveal>
      <footer className="Footer  Flex-Row-Center">
        <footer className="Footer__content Flex-Row-Center Gap">
          <Resume />
          <Contact />
        </footer>
      </footer>
    </Reveal>
  );
}