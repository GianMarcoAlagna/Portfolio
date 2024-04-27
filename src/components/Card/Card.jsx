import { Reveal } from '../Reveal/Reveal';
import './Card.css';

export const Card = ({ children, className = "" }) => {
  return (
    <Reveal>
      <div className={`card ${className}`.trim()}>
        {children}
      </div>
    </Reveal>
  );
}

Card.Header = ({ children, className = "" }) => {
  return (
    <header className={`card__header border-after ${className}`.trim()}>
      {children}
    </header>
  );
}

Card.Image = ({ src, alt, className = "" }) => {
  return (
    <img src={src} alt={alt} className={`card__image ${className}`.trim()} />
  );
}

Card.Body = ({ children, className = "" }) => {
  return (
    <section className={`card__body ${className}`.trim()}>
      {children}
    </section>
  );
}

Card.Footer = ({ children, className = "" }) => {
  return (
    <footer className={`card__footer ${className}`.trim()}>
      {children}
    </footer>
  );
}

export default Card;
