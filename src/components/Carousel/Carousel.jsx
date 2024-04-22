import "./Carousel.css";

export const Carousel = ({ items }) => {
  const carouselItems = items.map((item, index) => (
    <Carousel.Item key={index}>
      <img
        src={item.src}
        alt={item.skill}
        className="Carousel__image"
      />
    </Carousel.Item>
  ));
  return (
    <div className="Carousel">
      <Carousel.Slider>
        {carouselItems}
        {carouselItems}
      </Carousel.Slider>
    </div>
  );
}

Carousel.Header = ({ children }) => {
  return (
    <div className="Carousel__header">
      {children}
    </div>
  );
}

Carousel.Slider = ({ children }) => {
  return (
    <div className="Carousel__slider">
      {children}
    </div>
  );
}

Carousel.Item = ({ children }) => {
  return (
    <div className="Carousel__item">
      {children}
    </div>
  );
}