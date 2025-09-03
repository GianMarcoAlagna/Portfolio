import { useEffect, useState } from "react";
import "./Typed.css";

const Typed = ({ children, smooth }) => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    let interval = null;
    if (!smooth && chars.length < children.length) {
      interval = setInterval(() => {
        setChars((prev) => prev.concat(children[chars.length]));
      }, 150);
    }
    return () => {
      clearInterval(interval);
    };
  }, [children, smooth, chars.length]);

  return (
    <div className="text-container">
      <div className="text-container__content text-outline">{children}</div>
      <div
        className={`text-container__content text-fill${
          smooth ? " smooth" : ""
        }`}
      >
        {smooth ? children : chars}
      </div>
    </div>
  );
};

export default Typed;
