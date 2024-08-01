import Lenis from '@studio-freight/lenis';
import { Main, Navbar } from './components'
import { MainProvider } from './context/MainContext';
import { Footer } from "./components/Footer/Footer";
import { Introduction } from './components';
import { Preloader } from './components/Preloader/Preloader';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const lenis = new Lenis();
  const [loading, setLoading] = useState(false);

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  useEffect(() => {
    function handleLoad() {
      console.log('loaded');
      setLoading(false);
    }

    function handleDOMContentLoaded() {
      console.log('DOM fully loaded and parsed');
      setLoading(false);
    };

    // window.addEventListener('load', handleLoad);
    // document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

    return () => {
      window.removeEventListener('load', handleLoad);
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    }
  }, []);

  return (
    <>
      <MainProvider>
        <Preloader loading={loading}>
          <Navbar
          />
          <Introduction
            lenis={lenis}
            dynamic={true}
          />
          <Main
            lenis={lenis}
          />
          <Footer />
        </Preloader>
      </MainProvider>
    </>
  )
}

export default App
