import { Reveal } from '../Reveal/Reveal';
import './Card.css';

export const Card = ({ children, className = "" }) => {
  return (
    <Reveal>
      <div className={className.length ? "card " + className || "" : "card"}>
        {children}
      </div>
    </Reveal>
  );
}

Card.Header = ({ children, className = "" }) => {
  return (
    <div className={className.length ? "card__header " + className : "card__header"}>
      {children}
    </div>
  );
}

Card.Image = ({ src, alt, className = "" }) => {
  return (
    <img src={src} alt={alt} className={className.length ? "card__image " + className : "card__image"} />
  );
}

Card.Body = ({ children, className = "" }) => {
  return (
    <div className={className.length ? "card__body " + className : "card__body"}>
      {children}
    </div>
  );
}

Card.Footer = ({ children, className = "" }) => {
  return (
    <div className={className.length ? "card__footer " + className : "card__footer"}>
      {children}
    </div>
  );
}

export default Card;
