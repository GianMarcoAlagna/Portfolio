import Lenis from '@studio-freight/lenis';
import { Main, Navbar } from './components'
import { MainProvider } from './context/MainContext';
import { Beta } from './components/__Beta/Beta';
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
      <Beta position={{ bottom: '1rem', left: '1rem' }} />
      <MainProvider>
        <Navbar
          lenis={lenis}
        />
        <Main />
        <Footer />
      </MainProvider>
    </>
  )
}

export default App
