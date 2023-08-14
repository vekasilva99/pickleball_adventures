"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./aboutUs.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Quote } from "@/components/Quote";
import { Title } from "@/components/Title";

const images = [
  "/assets/images/pickleball1.png",
  "/assets/images/pickleball2.png",
  "/assets/images/pickleball.jpg",
  "/assets/images/Peru1.jpg",
];
export default function AboutUs() {
  const [currentSlide, setCurrentSlide]=useState(0)

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : currentSlide + 1);
    console.log("next");

  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : currentSlide - 1);
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
  return (
    <div className={styles.main}>
      <Navbar />
      <Header
        titleLine1="About"
        titleLine2="Us"
        background="/assets/images/download.png"
        backgroundTop="/assets/images/download.jpg"
        whiteBackground={false}
        yellowBackground={true}
      />

      <div className={styles.pageGradient}>
        <img
          className={styles.imageAbsolute}
          src="/assets/images/woman-swimming.png"
        />
        <div className={styles.yellowText}>
          <h2>
            High-impact
            <br />
            turism
          </h2>
          <h5>
            Culture, history, gastronomy and
            <br /> pickleball in an elite inmersive
            <br /> experience.
          </h5>
        </div>
        <div className={styles.center}>
         <h3> Explore high-impact sports tourism on an adventure to the city of
          Lima, discovering its rich cultural, culinary, and historical
          heritage. As you promote development opportunities for individuals
          from low-income backgrounds and minorities through sports, your
          participation will make a difference in the lives of those who need an
          extra boost, promoting inclusion and breaking barriers. Get ready for
          a comprehensive and enriching experience that will stimulate all your
          senses while contributing to building a more equitable and just
          society.</h3>
          <div className={styles.listContainer}>
        <div className={styles.listContainerTitle}>    
         <Title   large={true} text={'Pickleball Adventures'} opacity={true}  left={true}/>
         <Title   normal={true} text={'MEANS'}   left={true} color={'#FDC316'}/>
    </div>
        <div className={styles.list}>
          <div className={styles.listItem}>elite</div>
          <div className={styles.listItem}>High Quality</div>
          <div className={styles.listItem}>Exclusive</div>
          <div className={styles.listItem}>limited</div>
          <div className={styles.listItem}>Personalized</div>
          <div className={styles.listItem}>Luxury</div>
          <div className={styles.listItem}>Wellness</div>
          <div className={styles.listItem}>Supreme</div>
          <div className={styles.listItem}>Authentic</div>
          <div className={styles.listItem}>Comfort</div>
          <div className={styles.listItem}>Prestigious</div>
        </div>

      </div>
      <div className={styles.row}>
        <div className={styles.column1}>
          <img src="/assets/images/machu-pichu.jpg"/>
        </div>
        <div className={styles.column2}>
          <p> Mi vida siempre ha estado en vuelta en los deportes el poder haber jugado en el tour profesional de tenis y viajar a diferentes partes del mundo, decidí venir a Estados Unidos a estudiar pero el deporte dejo de ser una prioridad. Con el Pickleball la vida me dio una segunda oportunidad para demostrar mi talento, pero dobre todo me volvió a unir a mi familia y me dio la posibilidad de poder dejar un legado en mi país al ayudar a mi comunidad.</p>
          <Title   normal={true} text={'- Hercilio Cabieses'} opacity={true} italic={true} left={true}/>
        </div>
      </div>

      <div className={styles.row}>
        
        <div className={styles.column3}>
          <p>Pickleball me dio nuevamente la oportunidad de competir, ya que debió a un accidente que tuve acabo con mi carrera de tenista. Quiero ser un modelo para los demás y que sepan que nunca tienen que aceptar un No por respuesta. Con dedicación y disciplina puedes cumplir todas tus metas. Este deporte me abrió muchas puertas</p>
          <Title   normal={true} text={'- Miranda Cabieses'} opacity={true} italic={true} left={true}/>
        </div>
        <div className={styles.column1}>
          <img src="/assets/images/machu-pichu.jpg"/>
        </div>
      </div>
      <Quote
          titleLine1={"Mission"}
          content={
            "Our mission is for you to experience an outstanding tour to have fun with an exclusive and limited group of members, but above all, to encourage you to take away from this adventure not only the knowledge of unique destinations but also the fulfillment that comes from helping others and creating change with us."
          }
        />
       <div className={styles.slider}>
        <img src={'assets/images/machu-pichu.jpg'} />
          </div>
          <div className={styles.left}>
          <Title   large={true} text={'Origin'} opacity={true} marginBottom={'2vh'} left={true}/>
        <h3>Our mission is for you to experience an outstanding tour to have fun with an exclusive and limited group of members, but above all, to encourage you to take away from this adventure not only the knowledge of unique destinations but also the fulfillment that comes from helping others and creating change with us.</h3>

        </div>
    
          <div className={styles.slider}>
            {images.map((image, index) => {
              if (index == 0) {
                return <img src={image} style={{marginLeft:(currentSlide*-100).toString()+'%'}}/>;
              } else {
                return <img src={image} />;
              }
            })}
          </div>
        </div>

     



   
       
      

   
      </div>
      <Footer />
    </div>
  );
}
