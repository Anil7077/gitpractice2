import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('./MyComponent'), { ssr: false });

const index = () => {
  const options = {
    items: 3, // Number of items to display
    loop: true, // Infinite loop
    margin: 10, // Space between items
  };

  const images = [
    '/images/cont.jpg',
    '/images/Energy.jpg',
    '/images/Utilities.jpg',
    '/images/cont.jpg',
    '/images/Energy.jpg',
    '/images/Utilities.jpg',
  ];

  return (
    <div className="owl-carousel">
      <OwlCarousel
        {...options}
      >
        {images.map((image, index) => (
          <div className="item" key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default index;