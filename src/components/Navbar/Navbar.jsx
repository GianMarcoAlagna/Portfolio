import { useState } from 'react';
import { ColorMode } from './ColorMode';
import Links from './Links.json';
import './Navbar.css';

export const Navbar = ({ lenis }) => {
  const [padding, setPadding] = useState('1.5rem 0.5rem')
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

  return (
    <nav className="navbar" style={{
      padding
    }}>
      <div
        className='navbar__left'
      >
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
        <NavLinks />
      </div>
      <div
        className="navbar__right"
      >
        <ColorMode />
      </div>
    </nav>
  )
}

const NavLinks = () => {
  const links = [];
  for (let link in Links) {
    links.push(
      <a
        href={Links[link]}
        key={link}
        className="navbar__link"
      >
        {link}
      </a>
    )
  }
  return (
    <div className="navbar__links">
      {links}
    </div>
  )
}
