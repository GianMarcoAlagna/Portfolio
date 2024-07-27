import { useEffect, useRef, useState } from "react"
import Card from "../Card/Card"
import Oscillation from "../P5/Oscillation"
import Another_World from "../P5/Another_World"
import p5 from "p5"
import "./Art.css"
import Better_Days from "../P5/Better_Days"
import Inversion from "../P5/Inversion"
import Symbiosys from "../P5/Symbiosys"
import Fabric from "../P5/Fabric"
import { useMainContext } from "../../context/MainContext"

export const Art = () => {
  const [artDimensions, setArtDimensions] = useState({ width: 500, height: 500 });
  const { screen } = useMainContext();

  useEffect(() => {
    if (screen.width < 768) {
      console.log("Setting art dimensions to 300x300")
      setArtDimensions({ width: 300, height: 300 });
    } else {
      console.log("Setting art dimensions to 450x500")
      setArtDimensions({ width: 500, height: 500 });
    }
  }, [screen.width])

  return (
    <Card>
      <Card.Header>
        <h2 className="header">Algorithmic Art<br />(Interactive)</h2>
      </Card.Header>
      <Card.Body>
        <div className="art__grid">
          <ArtPiece title="Oscillation" func={Oscillation} width={artDimensions.width} height={artDimensions.height} />
          <ArtPiece title="Another World" func={Another_World} width={artDimensions.width} height={artDimensions.height} />
          <ArtPiece title="Better Days" func={Better_Days} width={artDimensions.width} height={artDimensions.height} />
          <ArtPiece title="Inversion" func={Inversion} width={artDimensions.width} height={artDimensions.height} />
          <ArtPiece title="Symbiosys" func={Symbiosys} width={artDimensions.width} height={artDimensions.height} />
          <ArtPiece title="Fabric" func={Fabric} width={artDimensions.width} height={artDimensions.height} />
        </div>
      </Card.Body>
    </Card>
  )
}

const ArtPiece = ({ title, func, width, height }) => {
  const ref = useRef(null)

  useEffect(() => {
    const sketch = new p5((p) => func(p, width, height), ref.current)
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
  }, [func, width, height]); // Add width and height as dependencies

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
