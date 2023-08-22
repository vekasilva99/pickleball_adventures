import React, { useEffect, useState } from "react";
import styles from "./events.module.css";
import { Title } from "../Title";

const images = [
  "../assets/images/beach.jpg",
  "../assets/images/foundation.jpg",
  "../assets/images/pickleball.jpg",
  "../assets/images/Peru1.jpg",
];

export const Slider = ({ images,select,selected }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;
  const nextSlide = () => {
    let slide = images[0];
    images.shift();
    images.push(slide);
    setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide + 1);
    console.log("next",images.length,currentSlide);
  };

  const prevSlide = () => {
    let slide = images[images.length - 1];
    images.pop();
    images.unshift(slide);
    setCurrentSlide(currentSlide === 0 ? images.length-1 : currentSlide - 1);
    console.log("prev");
  };
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, [images]);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const getClass=(id)=>{
if(selected==id){
  return `${styles.element} ${styles.selected}`
}else{
  return `${styles.element}` 
}
  }
  return (
    <div className={styles.columnHotel}>
      <div className={styles.hotel}>
        <div className={styles.gradient2}></div>
        <div className={styles.gradient}></div>
        {images[currentSlide] &&
        <div className={styles.title}>
          <h2>{images[0].title1}</h2>
          <h2>{images[0].title2}</h2>
          <p>
          {images[0].content}
          </p>
        </div>}
        <div className={styles.imageContainer}>
          {images.map((image, index) => {
            if (index == 0) {
              return <img src={image.image} />;
            } else {
              return <img src={image.image} />;
            }
          })}
        </div>
      </div>
      <div className={styles.elements} >
        <div className={`${getClass(0)}`} onClick={()=>{select(0)}}>
          <img src="../assets/icons/hotel.png" />
          <h3>Hotel</h3>
        </div>
        <div className={getClass(1)} onClick={()=>{select(1)}}>
          <img src="../assets/icons/gym.png" />
          <h3>Fitness centre</h3>
        </div>
        <div className={getClass(2)} onClick={()=>{select(2)}}>
          <img src="../assets/icons/wellness.png" />
          <h3>Spa and wellness centre</h3>
        </div>
        <div className={getClass(3)} onClick={()=>{select(3)}}>
          <img src="../assets/icons/chef.png" />
          <h3>Gastronomy</h3>
        </div>
        <div className={getClass(4)} onClick={()=>{select(4)}}>
          <img src="../assets/icons/pin.png" />
          <h3>Events</h3>
        </div>
      </div>
    </div>
  );
};
