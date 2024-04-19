import Lenis from '@studio-freight/lenis';
import { Main, Navbar } from './components'
import './App.css'
import { MainProvider } from './context/MainContext';

function App() {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return (
    <>
      <MainProvider>
        <Navbar
          lenis={lenis}
        />
        <Main />
      </MainProvider>
    </>
  )
}

export default App
