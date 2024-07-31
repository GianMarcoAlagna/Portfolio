import Lenis from '@studio-freight/lenis';
import { Main, Navbar } from './components'
import { MainProvider } from './context/MainContext';
import { Footer } from "./components/Footer/Footer";
import './App.css'

function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return (
    <>
      <MainProvider>
        <Navbar
        />
        <Main
          lenis={lenis}
        />
        <Footer />
      </MainProvider>
    </>
  )
}

export default App
