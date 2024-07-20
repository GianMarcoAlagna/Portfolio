import "./Carousel.css";
import { PlayButton } from "./PlayButton";

export const Carousel = ({ items }) => {
  const carouselItems = items.map((item, index) => (
    <Carousel.Item key={index}>
      <img
        src={item.src}
        alt={item.skill}
        className="carousel__image"
      />
      <span>
        {item.skill}
      </span>
    </Carousel.Item>
  ));
  return (
    <>
      <div className="carousel">
        <PlayButton />
        <Carousel.Slider>
          {carouselItems}
          {carouselItems}
        </Carousel.Slider>
      </div>
    </>
  );
}

Carousel.Header = ({ children }) => {
  return (
    <div className="carousel__header">
      {children}
    </div>
  );
}

Carousel.Slider = ({ children }) => {
  return (
    <div className="carousel__slider">
      {children}
    </div>
  );
}

Carousel.Item = ({ children }) => {
  return (
    <div className="carousel__item">
      {children}
    </div>
  );
}