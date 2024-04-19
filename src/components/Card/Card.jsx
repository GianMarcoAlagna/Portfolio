export const Card = ({ Header, Body, Footer, Image }) => {
  return (
    <div className="card">
      <div className="card__header">
        {Header}
      </div>
      <div className="card__body">
        {Body}
      </div>
      <div className="card__footer">
        {Footer}
      </div>
      <div className="card__image">
        {Image}
      </div>
    </div>
  );
}
