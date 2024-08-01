import Lenis from '@studio-freight/lenis';
import { Main, Navbar } from './components'
import { MainProvider } from './context/MainContext';
import { Footer } from "./components/Footer/Footer";
import { Introduction } from './components';
import './App.css'

function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  lenis.on('scroll', () => {
    if (lenis.scroll >= lenis.limit - 2) {
      lenis.scrollTo(0, { immediate: true });
    }
  })

  return (
    <>
      <MainProvider>
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
        <Introduction
          lenis={lenis}
          dynamic={false}
        />
      </MainProvider>
    </>
  )
}

export default App
