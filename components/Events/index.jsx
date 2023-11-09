import React, {useEffect,useState} from "react";
import styles from './events.module.css'
import { Title } from "../Title";

const images = [
  "../assets/images/peru/23.webp",
  "../assets/images/peru/10.webp",
  "../assets/images/pickleball.webp",
  "../assets/images/Peru1.webp",
];

export const Events = ({events}) =>{
  const [currentSlide, setCurrentSlide]=useState(0)

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : currentSlide + 1);
  

  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 3 : currentSlide - 1);
 
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
{events.map((event,index)=>{
if(index==0){
  return   <div className={styles.event} style={{marginLeft:(currentSlide*-100).toString()+'%'}}>
  <Title
                  small={true}
                  text={'DPASO'}
                  marginBottom={"2vh"}
                  bold={true}
                />
                    <p>Enjoy a journey full of flavors, colors, music, dance, tradition and living culture; that harmonize with the Peruvian Paso Horse to create an experience never lived before. This show includes:</p>
                    <ul>
                      <li>Buffet Lunch</li>
                      <li>Typical Dances</li>
                      <li>Peruvian Paso Horse Show</li>
                      <li>Horse back riding in the riding school</li>
                    </ul>

                    <img src={images[0]} />;
  </div>
}else{
  return <div className={styles.event}  >

  <Title
                  small={true}
                  text={'Clases de cajón'}
                  marginBottom={"2vh"}
                  bold={true}
                />
                    <p>Reconocido a nivel mundial y símbolo de la música criolla, el cajón peruano es un tesoro histórico musical. Declarado como patrimonio cultural del Perú por su  aporte valioso a nuestra cultura. Experimenta la música peruana afrodescendiente en un momento cultural inmersivo.</p>
                 

                    <img src={images[1]} />;
  </div>
}
  })}</>
    )
}