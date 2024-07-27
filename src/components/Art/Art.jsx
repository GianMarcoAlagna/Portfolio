import { useEffect, useRef } from "react"
import Card from "../Card/Card"
import Oscillation from "../P5/Oscillation"
import Another_World from "../P5/Another_World"
import p5 from "p5"
import "./Art.css"
import Better_Days from "../P5/Better_Days"
import Inversion from "../P5/Inversion"

export const Art = () => {
  return (
    <Card>
      <Card.Header>
        <h2 className="header">Algorithmic Art<br />(Interactive)</h2>
      </Card.Header>
      <Card.Body>
        <div className="grid">
          <ArtPiece title="Oscillation" func={Oscillation} />
          <ArtPiece title="Another World" func={Another_World} />
          <ArtPiece title="Better Days" func={Better_Days} />
          <ArtPiece title="Inversion" func={Inversion} />
        </div>
      </Card.Body>
    </Card>
  )
}

const ArtPiece = ({ title, func }) => {
  const ref = useRef(null)

  useEffect(() => {
    const sketch = new p5((p) => func(p), ref.current)
    sketch.noLoop()

    function handleMouseIn() {
      sketch.loop()
    }
    function handleMouseOut() {
      sketch.noLoop()
    }

    ref.current.addEventListener("mouseenter", handleMouseIn);
    ref.current.addEventListener("mouseleave", handleMouseOut);

    return () => {
      sketch.remove();
      ref.current.removeEventListener("mouseenter", handleMouseIn);
      ref.current.removeEventListener("mouseleave", handleMouseOut);
    }
  }, [func])

  return (
    <Card className="art">
      <Card.Header>
        <h4 className="header">{title}</h4>
      </Card.Header>
      <Card.Body className="art__body">
        <div ref={ref} className="p5-container" />
      </Card.Body>
    </Card>
  )
}
