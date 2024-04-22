import { useMemo, useRef, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { ColorMode } from './ColorMode';
import Links from '../Util/Links.json';
import './Navbar.css';

export const Navbar = ({ lenis }) => {
  const [padding, setPadding] = useState('1.5rem 0.5rem')
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);
  const links = Object.entries(Links);

  lenis.on('scroll', () => {
    switch (window.scrollY) {
      case 0:
        setPadding('1.5rem 0.5rem');
        break;
      default:
        setPadding('0.5rem 0.5rem');
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function toggleDrawer() {
    if (drawerOpen) {
      console.log('closing');
      drawerRef.current.classList.add('closing');
      drawerRef.current.classList.remove('open');
      setTimeout(() => {
        drawerRef.current.classList.remove('closing');
        setDrawerOpen(false);
      }, 450);
    } else {
      drawerRef.current.classList.add('open');
      setDrawerOpen(true);
    }
  }

  return (
    <nav className="navbar" style={{
      padding
    }}>
      <div
        className='navbar__left'
      >
        <RxHamburgerMenu
          size={30}
          className="navbar__hamburger"
          onClick={toggleDrawer}
        />
        <header className="navbar__header">
          <span
            className="navbar__header__text"
            onClick={scrollToTop}
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
          >
            Gian-Marco Alagna
          </span>
        </header>
        <NavLinks links={links} />
      </div>
      <div
        className="navbar__right"
      >
        <ColorMode />
      </div>
      <div className="navbar__drawer" ref={drawerRef}>
        <RxHamburgerMenu
          className={drawerOpen ? "navbar__hamburger visible" : "navbar__hamburger"}
          onClick={toggleDrawer}
        />
        {links.map(link => (
          <a
            href={link[1]}
            key={link[1]}
            className="navbar__drawer__link"
          >
            {link[0]}
          </a>
        ))}
      </div>
    </nav>
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
    >
      {link}
    </a>
  )
}
