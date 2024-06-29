import React, { useState, useEffect, useRef } from 'react';
import './carousel.css';

const images = [
  'https://storage.googleapis.com/carousel_rutuj/random.jpg',
  'https://storage.googleapis.com/carousel_rutuj/random1.jpg',
  'https://storage.googleapis.com/carousel_rutuj/random2.jpg',
  'https://storage.googleapis.com/carousel_rutuj/random3.jpg',
  'https://storage.googleapis.com/carousel_rutuj/random4.png',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleMouseEnter = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1 second
  };

  const handleMouseLeave = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
    </div>
  );
};

export default Carousel;
