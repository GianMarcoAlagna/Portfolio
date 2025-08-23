import { useRef } from "react";
import { ColorMode } from "./ColorMode";
import { useMainContext } from "../../context/MainContext";
import Links from "../Util/Links.json";
import { Hamburger } from "./Hamburger";
import "./Navbar.css";

export const Navbar = () => {
  const navRef = useRef(null);
  const links = Object.entries(Links);
  const { screen } = useMainContext();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <nav className={`navbar`} ref={navRef}>
        <div className="navbar__left">
          {screen.width < 1450 && <Hamburger className="navbar__hamburger" />}
          <header className="navbar__header">
            <span
              className="navbar__header__text"
              onClick={scrollToTop}
              aria-label="Go-To-Top-Button"
            >
              GMA
            </span>
          </header>
        </div>
        <div className="navbar__center">
          <header className="navbar__header center">
            <span
              className="navbar__header__text"
              onClick={scrollToTop}
              aria-label="Go-To-Top-Button"
            >
              {screen.width > 836 ? "Gian-Marco Alagna" : "GMA"}
            </span>
          </header>
          {screen.width >= 1450 && <NavLinks links={links} />}
        </div>
        <div className="navbar__right">
          <ColorMode />
        </div>
      </nav>
    </>
  );
};

const NavLinks = ({ links }) => {
  const linksMap = links.map(([link, url], index) => {
    return (
      <NavLink
        link={link}
        url={url}
        key={url}
        leftEdge={index === 0}
        rightEdge={index === links.length - 1}
      />
    );
  });
  return <div className="navbar__links">{linksMap}</div>;
};

const NavLink = ({ link, url, leftEdge, rightEdge }) => {
  return (
    <a
      href={url}
      key={link}
      className={
        leftEdge
          ? "navbar__link left-edge"
          : rightEdge
          ? "navbar__link right-edge"
          : "navbar__link"
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      {link}
    </a>
  );
};
