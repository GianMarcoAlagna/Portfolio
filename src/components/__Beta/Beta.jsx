import Tickets from "../Util/Tickets";
import "./Beta.css";

export const Beta = ({ position }) => {
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
  return (
    <>
      <div className="Beta-Tag" style={style}>
        <h1 className="Beta-Tag__text">Beta</h1>
        <div className="Working-On">
          <h2 className="Working-On__text"> Currently Working On</h2>
          {tickets}
        </div>
      </div>
    </>
  );
}