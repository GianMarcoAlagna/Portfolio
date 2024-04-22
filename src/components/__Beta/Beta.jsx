import { useState } from "react";
import { Reveal } from "../Reveal/Reveal";
import Tickets from "../Util/Tickets";
import "./Beta.css";

export const Beta = ({ position }) => {
  const [showTickets, setShowTickets] = useState(false);
  const style = {
    top: position.top,
    left: position.left,
    bottom: position.bottom,
    right: position.right
  };
  const tickets = Tickets.map((ticket) => {
    return (
      <div key={ticket} className="Working-On__ticket">
        <h3 className="Working-On__text">{ticket}</h3>
      </div>
    );
  });

  const onMouseEnter = () => setShowTickets(true);
  const onMouseLeave = () => setShowTickets(false);

  return (
    <>
      <div className="Beta-Tag" style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <h1 className="Beta-Tag__text">Beta</h1>
        {showTickets && (
          <div className="Working-On">
            <Reveal>
              <h2 className="Working-On__text"> Currently Working On</h2>
              {tickets}
            </Reveal>
          </div>
        )}
      </div>
    </>
  );
}