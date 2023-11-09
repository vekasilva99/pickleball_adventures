import React, { useEffect, useState } from "react";
import styles from "./events.module.css";
import { Title } from "../Title";
import { Reveal } from "../Reveal";

const images = [
  "../assets/images/beach.webp",
  "../assets/images/foundation.webp",
  "../assets/images/pickleball.webp",
  "../assets/images/Peru1.webp",
];

export const Slider = ({ images,select,selected }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;
  const nextSlide = () => {
    if(images.length>1){
    let slide = images[0];
    images.shift();
    images.push(slide);
    setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide + 1);

    }
  };

  const prevSlide = () => {
    let slide = images[images.length - 1];
    images.pop();
    images.unshift(slide);
    setCurrentSlide(currentSlide === 0 ? images.length-1 : currentSlide - 1);
   
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
 <Reveal>
          <h2>{images[0].title1}</h2>
          </Reveal>
          <Reveal>
          <h2>{images[0].title2}</h2>
          </Reveal>
          <Reveal>
          <p>
          {images[0].content}
          </p>
          </Reveal>
        </div>}
        
        <div className={styles.imageContainer}>
        <Reveal width="100%">
          {images.map((image, index) => {
            if (index == 0) {
              return <img src={image.image} />;
            } else {
              return <img src={image.image} />;
            }
          })}
          
</Reveal>
        </div>
    
      </div>
      <Reveal>
      <div className={styles.elements} >
        <div className={`${getClass(0)}`} onClick={()=>{select(0)}}>
          <img src="../assets/icons/hotel.webp" />
          <h3>Hotel</h3>
        </div>
        <div className={getClass(1)} onClick={()=>{select(1)}}>
          <img src="../assets/icons/gym.webp" />
          <h3>Fitness centre</h3>
        </div>
        <div className={getClass(2)} onClick={()=>{select(2)}}>
          <img src="../assets/icons/wellness.webp" />
          <h3>Spa and wellness centre</h3>
        </div>
        <div className={getClass(3)} onClick={()=>{select(3)}}>
          <img src="../assets/icons/chef.webp" />
          <h3>Gastronomy</h3>
        </div>
        <div className={getClass(4)} onClick={()=>{select(4)}}>
          <img src="../assets/icons/pin.webp" />
          <h3>Events</h3>
        </div>
      </div>
      </Reveal>
    </div>
  );
};
