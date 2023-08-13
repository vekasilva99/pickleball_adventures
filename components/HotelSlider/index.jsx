import React, {useEffect,useState} from "react";
import styles from './events.module.css'
import { Title } from "../Title";

const images = [
  "../assets/images/beach.jpg",
  "../assets/images/foundation.jpg",
  "../assets/images/pickleball.jpg",
  "../assets/images/Peru1.jpg",
];

export const Slider = ({images}) =>{
  const [currentSlide, setCurrentSlide]=useState(0)

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;
  const nextSlide = () => {
    let slide = images[0];
    images.shift();
    images.push(slide);
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    let slide = images[images.length - 1];
    images.pop();
    images.unshift(slide);
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    console.log("prev");
  };
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

    return(
        
<>
{images.map((image, index) => {
              if (index == 0) {
                return <img src={image} />;
              } else {
                return <img src={image} />;
              }
            })}

   </>)
}