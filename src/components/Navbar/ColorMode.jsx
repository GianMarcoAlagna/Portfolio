import { useState } from "react";
import { GiStripedSun } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";
import './ColorMode.css';
export const ColorMode = () => {
  const [colorMode, setColorMode] = useState(localStorage.getItem('color-mode') || 'light')
  function onChange() {
    if (colorMode === 'light') {
      localStorage.setItem('color-mode', 'dark')
      setColorMode('dark')
    } else {
      localStorage.setItem('color-mode', 'light')
      setColorMode('light')
    }
  }
  return (
    <div id="color-mode" className="color-mode">
      <input type="checkbox" id="color-mode-input" onChange={onChange} />
      <span
        id='color-mode-icon-container'
      >
        {
          colorMode === 'dark' &&
          <BsMoonStars id="color-mode-icon" />
        }
        {
          colorMode === 'light' &&
          <GiStripedSun id="color-mode-icon" />
        }
      </span>
    </div>
  )
}