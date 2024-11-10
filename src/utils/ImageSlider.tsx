import React, { useEffect, useState } from 'react';
// import styles from './ImageSliderSecond.module.scss'; // Import your CSS or use styled-components
import black from '/black-dress-winners.jpg'
import red from '/red-image.jpg'
import client from '/client-profile-pic.jpg'
import hero from '/hero-image.jpg';
import gold from '/client-gold-dress.jpg'
import green from '/green-dress-client.jpg'
interface ImageSliderProps {
  images?: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({  }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    black,
    red,
    client,
    hero,
    gold,
    green
  ]

  let interval = 3000

//   const goToPrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      // Calculate the next index, and loop back to 0 if at the end
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, interval);

    // Clean up the interval when the component unmounts
    return () => clearInterval(sliderInterval);
  }, [currentIndex, images.length, interval]);

  return (
    <div className={`flex justify-center w-full h-full mt-9`}>
      <img className={`lg:w-[500px] lg:h-[500px] w-[200px] h-[200px] rounded-full object-cover transform scale-125`} src={images[currentIndex]} alt={`Image ${currentIndex}`} />
    </div>
  );
};

export default ImageSlider;
