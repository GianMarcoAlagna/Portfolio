import { Reveal } from '../Reveal/Reveal';
import Typed from '../Typed/Typed';
import './Splash.css';

function Splash() {
  return (
    <div className="splash">
      <div className="splash__content">
        <h1 className="splash__title">
          <Reveal>Gian-Marco Alagna</Reveal>
        </h1>
        <div className="splash__description">
          <Typed>Software Engineer</Typed>
        </div>
      </div>
    </div>
  )
}

export default Splash