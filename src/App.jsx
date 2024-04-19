import Lenis from '@studio-freight/lenis';
import { Main, Navbar } from './components'
import './App.css'

function App() {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return (
    <>
      <Navbar 
        lenis={lenis}
      />
      <Main />
    </>
  )
}

export default App
