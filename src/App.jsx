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
  // lenis.on('scroll', () => {
  //   if (lenis.scroll >= lenis.limit - 5) {
  //     lenis.scrollTo(0, { immediate: true });
  //   }
  // })
  //! this shit gets weird on mobile, idk why exactly, I believe the way the mobile navbar works is fucking with the seamless scrollTo method from lenis

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
        {/* <Introduction
          lenis={lenis}
          dynamic={false}
        /> hold off on this for now*/}
      </MainProvider>
    </>
  )
}

export default App
