import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Slideshow = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const images = [
    {
      url: "/images/banner/banner-1-1.jpg",
      scale: -1,
    },
    {
      url: "/images/banner/banner-1-2.jpg",
      scale: 1,
    },
    {
      url: "/images/banner/banner-1-3.jpg",
      scale: -1,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const updateSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="main-carousel">
      <div className="carousel__container">
        <div>
          <h3>Industry materials for</h3>
          <h1>Machinery</h1>
          <p>
            Over 24 years experience and knowledge international standards,
            technologicaly changes and industrial systems.
          </p>
          <div className="button__container">
            <a href="#">
              <button className="button-24">Read More</button>
            </a>
            <a href="#">
              <button className="button-23">Market Sector</button>
            </a>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div className="items">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              style={{ transform: `scaleX(${image.scale})` }}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${
                index === currentSlideIndex ? "current" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="buttons">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="fa-3x"
          style={{
            transform: "scale(2)",
            boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
          }}
          id="prevBtn"
          onClick={prevSlide}
          />
        <FontAwesomeIcon
          icon={faChevronRight}
          className="fa-3x"
          style={{
            transform: "scale(2)",
            boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
          }}
          id="nextBtn"
          onClick={nextSlide}
        />
      </div>
      <div className="nav-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlideIndex ? "active" : ""}`}
            onClick={() => updateSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
