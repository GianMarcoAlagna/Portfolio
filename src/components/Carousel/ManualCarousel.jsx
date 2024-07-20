import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./ManualCarousel.css";

export const ManualCarousel = ({ images, width, height, imageClass }) => {
  const [currIndex, setCurrIndex] = useState(0);
  if (!images || images.length === 0) {
    return null;
  }

  function handleNavClickLeft() {
    const next = (currIndex - 1) % images.length;
    setCurrIndex(next < 0 ? images.length - 1 : next);
  }

  function handleNavClickRight() {
    const next = (currIndex + 1) % images.length;
    setCurrIndex(next > images.length - 1 ? 0 : next);
  }

  return (
    <div className='carouselContainer'>
      <div className="carouselOuter">
        <div className="carouselInner">
          {images.map((image, index) => (
            <div className="carouselItem" key={index}>
              <img
                src={image}
                alt={`carousel image ${index}`}
                className={`${index === currIndex ? 'active' : 'inactive'}${imageClass ? ' ' + imageClass : ''}`}
                style={{ width, height }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='navigationButtons'>
        <button
          className='carouselNavButton Left'
          onClick={handleNavClickLeft}
        >
          <FaArrowLeft />
        </button>
        <button
          className='carouselNavButton Right'
          onClick={handleNavClickRight}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}