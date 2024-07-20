import { useEffect, useMemo, useRef, useState } from 'react';
import { ColorMode } from './ColorMode';
import { useMainContext } from '../../context/MainContext';
import Links from '../Util/Links.json';
import { Hamburger } from './Hamburger';
import './Navbar.css';

export const Navbar = ({ lenis }) => {
  const [padding, setPadding] = useState('1.5rem 0.5rem')
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
  const links = Object.entries(Links);
  const { screen } = useMainContext();

  // lenis.on('scroll', () => {
  //   switch (window.scrollY) {
  //     case 0:
  //       setPadding('1.5rem 0.5rem');
  //       break;
  //     default:
  //       setPadding('0.5rem 0.5rem');
  //   }
  // });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  useEffect(() => {
    if (screen.width >= 1450) {
      setDrawerOpen(false);
    }
  }, [screen.width]);

  // const style = useMemo(() => {
  //   return {
  //     padding
  //   }
  // }, [padding]);

  return (
    <>
      <nav className={`navbar border-after${drawerOpen ? ' expanded' : ''}`}>
        <div
          className='navbar__left'
        >
          {
            screen.width < 1450 &&
            <Hamburger
              className="navbar__hamburger"
              onClick={toggleDrawer}
              checked={drawerOpen}
            />
          }
          <header className="navbar__header">
            <span
              className="navbar__header__text"
              onClick={scrollToTop}
              aria-label="Go-To-Top-Button"
            >
              Gian-Marco Alagna
            </span>
          </header>
        </div>
        <div
          className="navbar__center"
        >
          <header className="navbar__header center">
            <span
              className="navbar__header__text"
              onClick={scrollToTop}
              aria-label="Go-To-Top-Button"
            >
              {screen.width > 836 ? "Gian-Marco Alagna" : "GMA"}
            </span>
          </header>
          {
            screen.width >= 1450 &&
            <NavLinks links={links} />
          }
        </div>
        <div
          className="navbar__right"
        >
          <ColorMode />
        </div>
        {
          screen.width < 1450 &&
          <div
            className="drawer"
            ref={drawerRef}
          // style={{
          //   display: drawerOpen ? 'block' : 'none'
          // }}
          >
            <NavLinks links={links} />
          </div>
        }
      </nav>
    </>
  )
}

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
    )
  });
  return (
    <div className="navbar__links">
      {linksMap}
    </div>
  )
}

const NavLink = ({ link, url, leftEdge, rightEdge }) => {
  return (
    <a
      href={url}
      key={link}
      className={leftEdge ? "navbar__link left-edge" : rightEdge ? "navbar__link right-edge" : "navbar__link"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link}
    </a>
  )
}
