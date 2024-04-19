import './Card.css';

export const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
}

Card.Header = ({ children }) => {
  return (
    <div className="card__header">
      {children}
    </div>
  );
}

Card.Image = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="card__image" />
  );
}

Card.Body = ({ children }) => {
  return (
    <div className="card__body">
      {children}
    </div>
  );
}

Card.Footer = ({ children }) => {
  return (
    <div className="card__footer">
      {children}
    </div>
  );
}

export default Card;
