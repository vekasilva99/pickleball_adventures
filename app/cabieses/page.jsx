"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./cabieses.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header1";
import { Title } from "@/components/Title";
import { Quote } from "@/components/Quote";

const images = [
  "/assets/images/foundation/1.jpeg",
  "/assets/images/foundation/2.jpeg",
  "/assets/images/foundation/3.jpeg",
  "/assets/images/foundation/4.jpeg",
  "/assets/images/foundation/5.jpeg",
  "/assets/images/foundation/6.jpeg",
 
];

const images2 = [
  "/assets/images/us/1.jpeg",
  "/assets/images/us/2.jpeg",
  "/assets/images/us/3.jpeg",
  "/assets/images/us/4.jpeg",
  "/assets/images/us/5.jpeg",
  "/assets/images/us/6.jpeg",
 
];
export default function Cabieses() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 8 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 8 : currentSlide - 1);
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
        <button className={`${styles.button} ${styles.buttonFixed}`}>          <h2>Donate Now</h2>
            <img src="/assets/icons/arrow-45.png" /></button>
      <Navbar />
     <Header titleLine1="Our" dark={true} titleLine2="Foundation" background="/assets/logo/cabieses2.png" backgroundTop="/assets/logo/cabieses1.png" whiteBackground={true}/>
 
     <div className={styles.pageGradient}>
      <Title normal={true} text={'One ball can change a life, and a life can change the world'} opacity={true} marginTop={'5vh'} marginBottom={'2vh'} />
      <button className={styles.button}><h2>Donate Now</h2>
            <img src="/assets/icons/arrow-45.png" /></button>
      <video autoPlay muted playsInline loop className={styles.videoHome}>
            <source src="/assets/videos/cabieses.mp4" type="video/mp4"></source>
          </video>
          <Title  normal={true} text={'What is Cabieses Foundation'} opacity={true} marginTop={'5vh'} marginBottom={'2vh'}/>
     
     <p style={{marginBottom:'5vh'}}>
     Is a non profit organization where we support children and young people for any social sectors who wish to develop their skills and abilities in sports without exclusion and humanitarian cooperation.
     </p>
     <Quote
          titleLine1={"Origin"}
          content={
            "Al fundar Pickleball Peru e introducir el deporte nos dimos cuenta la ambición de los niños en querer seguir jugando. Nos dimos cuenta la falta de educación deportiva y recursos. El no contar con equipamiento de pickleball no seria un impedimento para poner una sonrisa en estos niños y puedan disfrutar del deporte como todos nosotros. Es así como nace Cabieses Foundation."
          }
        />
        <div className={styles.row}>
          <div className={styles.column1}>
          <Title large={true} text={'Vision'} opacity={true}  left={true}/>
          <p>To support the development of the greatest number of outstanding young athletes, at national and international level, with the purpose of forming the leaders of the future.</p>
          </div>
          {/* <div className={styles.column2}>
            <div className={styles.imgColumn}>
            <img src="/assets/images/foundation/1.jpg"/>
              <img src="/assets/images/foundation/3.jpg"/>
            </div>
            <div className={styles.imgColumn}>
            <img src="/assets/images/foundation/6.jpg"/>
              <img src="/assets/images/foundation/7.jpg"/>
            </div>
            <div className={styles.imgColumn}>
            <img src="/assets/images/foundation/13.jpg"/>
              <img src="/assets/images/foundation/11.jpg"/>
            </div>
            <img className={styles.imgBig}src="/assets/images/foundation/10.jpg"/>
            <div className={styles.imgColumn}>
            <img src="/assets/images/foundation/19.jpg"/>
              <img src="/assets/images/foundation/22.jpg"/>
            </div>
          </div> */}

<div className={styles.slider}>
            <div className={styles.imageContainer}   style={{
                      marginLeft: (currentSlide * -100).toString() + "%",
                    }}>
            <img
                  id={`image-${1}`}
                    src={  "/assets/images/foundation/1.jpg"}

                  
                  />
                       <img
                  id={`image-${2}`}
                    src={  "/assets/images/foundation/3.jpg"}

                  
                  />
                       <img
                  id={`image-${3}`}
                    src={  "/assets/images/foundation/4.jpg"}

                  
                  />
            </div>
            <div className={styles.imageContainer} >
            <img
                  id={`image-${4}`}
                    src={  "/assets/images/foundation/5.jpg"}

                  
                  />
                       <img
                  id={`image-${5}`}
                    src={  "/assets/images/foundation/6.jpg"}

                  
                  />
                       <img
                  id={`image-${6}`}
                    src={  "/assets/images/foundation/7.jpg"}

                  
                  />
            </div>
            <div className={styles.imageContainer} >
            <img
                  id={`image-${4}`}
                    src={  "/assets/images/foundation/8.jpg"}

                  
                  />
                       <img
                  id={`image-${5}`}
                    src={  "/assets/images/foundation/9.jpg"}

                  
                  />
                       <img
                  id={`image-${6}`}
                    src={  "/assets/images/foundation/10.jpg"}

                  
                  />
            </div>
            <div className={styles.imageContainer} >
            <img
                  id={`image-${4}`}
                    src={  "/assets/images/foundation/11.jpg"}

                  
                  />
                       <img
                  id={`image-${5}`}
                    src={  "/assets/images/foundation/12.jpg"}

                  
                  />
                       <img
                  id={`image-${6}`}
                    src={  "/assets/images/foundation/13.jpg"}

                  
                  />
            </div>
            <div className={styles.imageContainer} >
            <img
                  id={`image-${4}`}
                    src={  "/assets/images/foundation/14.jpg"}

                  
                  />
                       <img
                  id={`image-${5}`}
                    src={  "/assets/images/foundation/15.jpg"}

                  
                  />
                       <img
                  id={`image-${6}`}
                    src={  "/assets/images/foundation/16.jpg"}

                  
                  />
            </div>
            <div className={styles.imageContainer} >
            <img
                  id={`image-${4}`}
                    src={  "/assets/images/foundation/17.jpg"}

                  
                  />
                       <img
                  id={`image-${5}`}
                    src={  "/assets/images/foundation/18.jpg"}

                  
                  />
                       <img
                  id={`image-${6}`}
                    src={  "/assets/images/foundation/19.jpg"}

                  
                  />
            </div>
            <div className={styles.imageContainer} >
            <img
                  id={`image-${4}`}
                    src={  "/assets/images/foundation/20.jpg"}

                  
                  />
                       <img
                  id={`image-${5}`}
                    src={  "/assets/images/foundation/21.jpg"}

                  
                  />
                       <img
                  id={`image-${6}`}
                    src={  "/assets/images/foundation/22.jpg"}

                  
                  />
            </div>
            <div className={styles.imageContainer} >
            <img
                  id={`image-${4}`}
                    src={  "/assets/images/foundation/23.jpg"}

                  
                  />
                       <img
                  id={`image-${5}`}
                    src={  "/assets/images/foundation/24.jpg"}

                  
                  />
                       <img
                  id={`image-${6}`}
                    src={  "/assets/images/foundation/25.jpg"}

                  
                  />
            </div>
            <div className={styles.imageContainer} >
            <img
                  id={`image-${4}`}
                    src={  "/assets/images/foundation/26.jpg"}

                  
                  />
                       <img
                  id={`image-${5}`}
                    src={  "/assets/images/foundation/27.jpg"}

                  
                  />
                       <img
                  id={`image-${6}`}
                    src={  "/assets/images/foundation/28.jpg"}

                  
                  />
            </div>
       
          </div>
        </div>
        <div className={styles.listContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 2246 1559">

  <path id="Color_Fill_1" data-name="Color Fill 1" className={styles.svgElem1} d="M1008,526c39.7-.571,116.45,48.454,91,96-14.58,3.059-17.02-3.565-26-8-10.81,5.156-6.05,12.342-11,21h-10c-5.38-3.883-7.88-12.068-5-21-22.94,4.614-20.91,23.831-37,27,9.44,48.549-12.267,47.8-26,82,3.514,4.19,10.043,8.389,7,16l-9,9c-1.689,3.86-.5,7.076,1,10,27.42,11.774,27.93,59.8,51,77,15.61,11.643,36.18,14.476,43,35,66.62-10.021,116.53,12.646,152,40,75.64-19.257,120.56-111.1,85-199,12.17-23.226,89.91-18.162,99,7,14.44,39.976-.54,97.117-11,129-35.72,108.888-115.03,163.91-240,185-44.61,7.53-90.18-8.97-119-21-93.257-38.932-146.767-108.12-166-222-4.062-24.052-4.038-55.775,1-78,14.487-63.911,44.307-120.049,88-155Zm220,30c65.42-2.171,68.01,80.447,12,91-34.87,6.57-61.91-34.243-47-65C1200.36,566.823,1212.42,563.378,1228,556Zm-59,161c98.11-1.909,103.44,129.165,15,145-52.1,9.329-97.1-48.912-77-99C1118.89,733.376,1138.76,729.12,1169,717Z"></path>
  <path id="Color_Fill_2" data-name="Color Fill 2" className={styles.svgElem2} d="M793,927c13.5,0.892,26.587,16.4,17,30-4.325,7.059-14.806,8.693-21,14-10.9,9.343-58.533,63.81-86,65-4.247-2.38-7.711-2.39-10-7-4.037-3.51-4.366-10.07-4-18,28.045-23.98,49.238-42.172,75-68C768.189,938.8,787.307,931.857,793,927Z"></path>
  <path id="Color_Fill_3" data-name="Color Fill 3" className={styles.svgElem3} d="M87,1032c-12.584.17-14.476-3.44-23-5l-2,3,1,3c10.356,5.49,20.174,6.63,25,18-0.167,4.92-.76,7.42-3,10-6.237,13.64-27.686,7.2-36,1l-2-9H61c3.451,3.08,2.629,4.17,9,5l2-3v-3c-8.1-4.38-19.923-6.36-24-15-2.8-7.92.742-13.44,4-18,9.766-3.26,17.332-3.87,28-1C83.56,1022.65,86.243,1024.04,87,1032Zm99,0c-12.584.17-14.476-3.44-23-5l-2,3,1,3c10.357,5.49,20.174,6.63,25,18-0.167,4.92-.76,7.42-3,10-6.237,13.64-27.686,7.2-36,1q-1-4.5-2-9h14c3.451,3.08,2.629,4.17,9,5l2-3v-3c-8.1-4.38-19.923-6.36-24-15-2.8-7.92.742-13.44,4-18,9.766-3.26,17.332-3.87,28-1C182.56,1022.65,185.243,1024.04,186,1032Zm-92-16h14c-0.4,13.98-1.149,30.64,4,39,5.483,1.03,8.116,1.12,11-3,4.3-6.86,2.249-25.56,2-36h14c1.11,26.74,3.517,61.83-30,53C91.113,1064.29,93.05,1039.12,94,1016Zm97,0h43v12H220v41H205v-41H191v-12Zm64,0h17q9.5,26.49,19,53H275c-0.684-4.49-1.527-6.51-4-9H254l-3,9H236v-1Q245.5,1042.005,255,1016Zm41,0h15v53H296v-53Zm23,0h15q9,14.505,18,29h2v-29h14v53c-5.577.35-12.318,0.64-15-2q-9-13.5-18-27h-1v29H319v-53Zm73,0h17q9.5,26.49,19,53H412c-0.684-4.49-1.527-6.51-4-9H391l-3,9H373v-1Q382.5,1042.005,392,1016Zm41,0c16.87-.91,48.131-3.37,43,17q-3.5,4.995-7,10c6.171,2.47,8.139,6.17,8,15q-2.5,4.005-5,8c-9.967,2.97-24.9,3.12-39,3v-53Zm50,0h15v53H483v-53Zm23,0h15v42h16v11H506v-53Zm37,0h15v53H543v-53Zm20,0h43v12H592v41H577v-41H563v-12Zm79,53H627c0.62-24.86-9.7-35.77-18-52v-1h16q5,10,10,20v-2l10-18q7.5,0.5,15,1C650.755,1032.42,641.9,1044.23,642,1069Zm-194-41v9c5.76,0.18,9.73-.39,13-2-0.667-2.33-1.333-4.67-2-7H448Zm-185,5q-2.5,7.995-5,16h11Q266,1041.005,263,1033Zm137,0q-2.5,7.995-5,16h11Q403,1041.005,400,1033Zm48,14v10c5.984,0.21,10.57-.31,14-2C461.253,1046.82,456.965,1046.34,448,1047Z"></path>
  <path id="Color_Fill_5" data-name="Color Fill 5" className={styles.svgElem5} d="M362,650c-12.584.172-14.476-3.435-23-5l-2,3,1,3c10.357,5.487,20.174,6.625,25,18-0.167,4.919-.76,7.417-3,10-6.237,13.638-27.686,7.2-36,1q-1-4.5-2-9h14c3.451,3.076,2.629,4.167,9,5l2-3v-3c-8.1-4.38-19.923-6.365-24-15-2.8-7.922.742-13.442,4-18,9.766-3.258,17.332-3.87,28-1C358.56,640.652,361.243,642.037,362,650Zm46,0c-12.584.172-14.476-3.435-23-5l-2,3,1,3c10.357,5.487,20.174,6.625,25,18-0.167,4.919-.76,7.417-3,10-6.237,13.638-27.686,7.2-36,1q-1-4.5-2-9h14c3.451,3.076,2.629,4.167,9,5l2-3v-3c-8.1-4.38-19.923-6.365-24-15-2.8-7.922.742-13.442,4-18,9.766-3.258,17.332-3.87,28-1C404.56,640.652,407.243,642.037,408,650Zm54-17c33.77,0.587,39.411,46.466,10,54C436.021,696.216,422.993,648.652,462,633Zm-243,1c17.522-.758,34.579-1.687,40,10,3.395,5.76,2.033,14.137-2,18-4.037,6.518-11.946,7.5-23,7v18H219V634Zm63,0h17l19,53H302c-0.684-4.487-1.527-6.514-4-9H281l-3,9H263v-1Zm134,0h15v53H416V634Zm82,0h15l18,29h2V634h14v53c-5.577.354-12.318,0.643-15-2l-18-27h-1v29H498V634ZM234,646v12c6.141-.021,8.422-1.016,12-3q-0.5-3-1-6l-2-3h-9Zm226,1-6,7c-2.654,4.914-1.44,9.583,0,15l6,4h10c7.071-4.775,10.4-18.885,1-24C468.263,647.171,465.133,646.9,460,647Zm-170,4q-2.5,8-5,16h11Z"></path>
  <path id="Color_Fill_7" data-name="Color Fill 7" className={styles.svgElem7} d="M452,337c-12.584.172-14.476-3.435-23-5l-2,3,1,3c10.357,5.487,20.174,6.625,25,18-0.167,4.919-.76,7.417-3,10l-5,6c-16.662,1.121-31.087,4.053-33-14h14c3.451,3.076,2.629,4.167,9,5l2-3v-3c-8.1-4.38-19.923-6.365-24-15-2.8-7.922.742-13.442,4-18,9.766-3.258,17.332-3.87,28-1C448.56,327.652,451.243,329.037,452,337ZM263,321h16q6,18.5,12,37h1l11-37h16c-4.9,12-9.465,43.443-20,50-4.228,1.615-12.739,3.292-18,2Q272,347,263,321Zm60,0h34v12H338v9h17v11H338v9h19v12a69.467,69.467,0,0,0-33-2v-2Q323.5,345.5,323,321Zm41,0c18.823-.586,31.418.147,41,8q1,6.5,2,13c-3,5.981-6.158,8.041-11,12l11,20H391l-12-20v20H365Q364.5,347.5,364,321Zm112,0h17l17,49H495c-2.679-6.576-10.773-5.651-20-5l-4,7-13-2Q467,345.5,476,321Zm38,0h43v12H543v37H528V333H514V321Zm48,0h15c0.2,16.866,1.48,38.379-2,52l-7-1h-5Q562.5,346.5,562,321Zm23,0h15v42h16v7H585V321Zm37,0h15v49H622V321Zm20,0h43v12H671v37H656V333H642V321Zm63,53c0.62-24.863-9.7-35.767-18-52v-1h16l10,20v-2l10-18,15,1c-10.835,18.465-12.463,27.292-19,52H705ZM379,333v12c6.518,0.077,9.251-.922,13-3-0.215-4.513-.708-5.391-2-8Zm105,5q-2.5,8-5,16h11Z"></path>
  <path id="Color_Fill_9" data-name="Color Fill 9" className={styles.svgElem9} d="M1176,166c-12.58.172-14.48-3.435-23-5-0.67,1-1.33,2-2,3,0.33,1,.67,2,1,3,10.36,5.487,20.17,6.625,25,18-0.17,4.919-.76,7.417-3,10-6.24,13.638-27.69,7.2-36,1-0.67-3-1.33-6-2-9h14c3.45,3.076,2.63,4.167,9,5,0.67-1,1.33-2,2-3v-3c-8.1-4.38-19.92-6.365-24-15-2.8-7.922.74-13.442,4-18,9.77-3.258,17.33-3.87,28-1C1172.56,156.652,1175.24,158.037,1176,166Zm54-17c33.77,0.587,39.41,46.466,10,54C1204.02,212.216,1190.99,164.652,1230,149Zm-320,1h15v53H910V150Zm23,0h15l18,29h2V150h14v53c-5.577.354-12.318,0.643-15-2l-18-27h-1v29H933V150Zm74,0c19.98-.781,27.59,4.422,33,18v1c-13.11-.191-20.97-7.677-29-5l-6,6c-2.86,4.774-1.5,9.812,0,15l6,5c10.67-.915,16.41-10.135,29-5-5.7,15.216-32.69,27.468-46,10C979.865,176.444,994.009,157.59,1007,150Zm40,0h15v42h16v11h-31V150Zm37,0h14c-0.4,13.977-1.15,30.64,4,39,5.48,1.028,8.12,1.121,11-3,4.3-6.863,2.25-25.56,2-36h14c1.11,26.744,3.52,61.831-30,53C1081.11,198.287,1083.05,173.117,1084,150Zm100,0h15v53h-15V150Zm82,0h15l18,29h2V150h14v53c-5.58.354-12.32,0.643-15-2q-9-13.5-18-27h-1v29h-15V150Zm-38,13-6,7c-2.65,4.914-1.44,9.583,0,15l6,4h10c7.07-4.775,10.4-18.885,1-24C1236.26,163.171,1233.13,162.9,1228,163Z"></path>
  <path id="Color_Fill_4" data-name="Color Fill 4" className={styles.svgElem4} d="M594,653c13.912-.12,51.338,6.033,60,12,7.938,5.468,26.125-1.128,32,0,14.842,2.851,29.416,4.788,37,8,16.909,7.161,34.335-1.5,52,12,2.361,9.867,1.18,13.236,0,24-23.318,5.2-94.909-3.068-116-12H639c-15.731-5.62-38.55-4.755-51-14-2.215-8.983-2.479-14.966-2-24C590.622,657.923,591.894,656.3,594,653Z"></path>
  <path id="Color_Fill_6" data-name="Color Fill 6" className={styles.svgElem6} d="M759,377c6.342-.142,15.745.694,19,4,8.665,7.157,11.694,19.424,19,28,13.415,15.746,62.53,50.384,55,79-8.064,1.032-18.971,7.877-31,1-10.03-22.49-64.74-64.591-64-78,0.267-4.831-11.506-11.953-6-24C753.8,383.333,756.955,381.708,759,377Z"></path>
  <path id="Color_Fill_8" data-name="Color Fill 8" className={styles.svgElem8} d="M1105,243c8.34,2.84,19.83,2.035,25,8,5.25,6.057,3.11,19.725,4,30,2.38,27.491,12.2,116.537-2,142h-20c-3.4-5.036-7.58-5.6-9-13q-1.005-61.994-2-124c-1.6-6.593-6.45-21.453-4-31C1098.45,249.36,1103.19,248.4,1105,243Z"></path>
  <path id="Color_Fill_10" data-name="Color Fill 10" className={styles.svgElem10}  d="M1424,317c10.22-.522,18.66.663,23,6,11.17,19.276-7.5,42.669-18,56-4.77,6.06-4.64,13.5-9,20-9.91,14.769-25.41,26.761-37,40,0.67,1.333,1.33,2.667,2,4-5.63,7.465-23.6,12.421-30,25-10.27-.891-13.36-1.973-23-5-2.14-7.173-4.8-8.074-5-18C1353.32,431.573,1412.78,351.279,1424,317Z"></path>
  <path id="Color_Fill_16" data-name="Color Fill 16" className={styles.svgElem16}  d="M1415,1019c16.51-.26,75.87,45.64,80,54,6.13,11.29-1.7,20.73-5,28-36.42,5.33-49.19-43.29-79-46-1.46-9.67-5.26-15.02-4-28C1411.03,1025.42,1413.11,1022.59,1415,1019Z"></path>
  <path id="Color_Fill_11" data-name="Color Fill 11" className={styles.svgElem11}  d="M1949,266c33.77,0.587,39.41,46.466,10,54C1923.02,329.216,1909.99,281.652,1949,266Zm-422,1h15v50q-7.005-3-14-6Q1527.505,289,1527,267Zm24,0h15l18,29h2V267h14v53c-5.58.354-12.32,0.643-15-2l-18-27h-1v29h-14Q1551.505,293.5,1551,267Zm54,0h43v12h-14v41h-15V279h-14V267Zm48,0h34v12h-19v9h17v11h-17v9h19v12h-34V267Zm64,33V290h27q-0.495,8-1,16c-9.3,25.287-59.81,15.553-50-21,6.41-23.892,42.78-22.792,51-1-13.46-.07-20.15-4.46-30-3-7.07,4.775-10.4,18.885-1,24a12.365,12.365,0,0,0,13,1c3.76-1.764,3.73-1.61,5-6h-14Zm34-33c18.82-.586,31.42.147,41,8q1.005,6.5,2,13c-3.01,5.981-6.16,8.041-11,12q5.505,10,11,20h-16l-12-20v20h-15V267Zm66,0h17q9.495,26.5,19,53h-16c-0.68-4.487-1.53-6.514-4-9h-17l-3,9h-15v-1Q1807.5,293,1817,267Zm37,0h43v12h-14v41h-15V279h-14V267Zm49,0h15v53h-15V267Zm82,0h15l18,29h2V267h14v53c-5.58.354-12.32,0.643-15-2l-18-27h-1v29h-15V267Zm-219,12v12c6.52,0.077,9.25-.922,13-3-0.22-4.513-.71-5.391-2-8Zm181,1-6,7c-2.65,4.914-1.44,9.583,0,15l6,4h10c7.07-4.775,10.4-18.885,1-24C1955.26,280.171,1952.13,279.9,1947,280Zm-122,4q-2.505,8-5,16h11Z"></path>
  <path id="Color_Fill_12" data-name="Color Fill 12" className={styles.svgElem12}  d="M1603,556c13.17,2.511,21.26,18.676,12,31-8.22,8.978-110.32,36.98-128,40a21.8,21.8,0,0,0-9-8c-0.39-7.588-1.73-13.935,1-20l6-8c21.76-.4,60.69-17.737,79-26C1577.17,559.059,1590.58,561.473,1603,556Zm36,29q1.995,6,4,12h-4V585Z"></path>
  <path id="Color_Fill_13" data-name="Color Fill 13" className={styles.svgElem13}  d="M1731,538c33.77,0.587,39.41,46.466,10,54C1705.02,601.216,1691.99,553.652,1731,538Zm174,17c-12.58.172-14.48-3.435-23-5-0.67,1-1.33,2-2,3,0.33,1,.67,2,1,3,10.36,5.487,20.17,6.625,25,18-0.17,4.919-.76,7.417-3,10-6.24,13.638-27.69,7.2-36,1-0.67-3-1.33-6-2-9h14c3.45,3.076,2.63,4.167,9,5,0.67-1,1.33-2,2-3v-3c-8.1-4.38-19.92-6.365-24-15-2.8-7.922.74-13.442,4-18,9.77-3.258,17.33-3.87,28-1C1901.56,545.652,1904.24,547.037,1905,555Zm-253-16h15v20h18V539h14v53h-14V571h-18v21h-15V539Zm115,0h15l18,29h2V539h14v53c-5.58.354-12.32,0.643-15-2l-18-27h-1v29h-15V539Zm57,0h34v12h-19v9h17v11h-17v9h19v12h-34V539Zm85,0h43v12h-14v41h-15V551h-14V539Zm78,53h-15c0.62-24.863-9.7-35.767-18-52v-1h16q4.995,10,10,20v-2q4.995-9,10-18l15,1C1995.76,555.417,1986.9,567.226,1987,592Zm-258-40-6,7c-2.65,4.914-1.44,9.583,0,15l6,4h10c7.07-4.775,10.4-18.885,1-24C1737.26,552.171,1734.13,551.9,1729,552Z"></path>
  <path id="Color_Fill_14" data-name="Color Fill 14" className={styles.svgElem14}  d="M1483,863c48.02-.694,99.12,32.124,141,42,1.3,9.711,1.54,16.289-3,24-29.43,12.815-110.62-26.274-143-36-1.42-10.658-2.35-14.973,0-26C1480.57,865.737,1481.4,865.216,1483,863Zm150,45q-0.495,6-1,12Q1632.5,914,1633,908Zm2,2c7.16,8.744,4.87,23.038,1,33h-1V910Zm-3,28c0.33,1,.67,2,1,3h-1v-3Zm-580,97h2c-0.33,1-.67,2-1,3C1052.67,1037,1052.33,1036,1052,1035Z"></path>
  <path id="Color_Fill_15" data-name="Color Fill 15" className={styles.svgElem15}  d="M1649,947h-15q0.495-26.5,1-53c18.45-.589,30.61.3,40,8q1.005,6.5,2,13c-3.01,5.981-6.16,8.041-11,12q5.505,10,11,20h-16l-12-20v20Zm34-53h34v12h-19v9h17v11h-17v9h19v12h-34V894Zm80,16c-12.58.172-14.48-3.435-23-5-0.67,1-1.33,2-2,3,0.33,1,.67,2,1,3,10.36,5.487,20.17,6.625,25,18-0.17,4.919-.76,7.417-3,10-6.24,13.638-27.69,7.2-36,1-0.67-3-1.33-6-2-9h14c3.45,3.076,2.63,4.167,9,5,0.67-1,1.33-2,2-3v-3c-8.1-4.38-19.92-6.365-24-15-2.8-7.922.74-13.442,4-18a51.943,51.943,0,0,1,28-1C1759.56,900.652,1762.24,902.037,1763,910Zm8-16c17.42-.757,34.61-1.616,40,10,3.4,5.76,2.03,14.137-2,18-4.04,6.518-11.95,7.5-23,7v18h-15V894Zm48,0h34v12h-19v9h17v11h-17v9h19v12h-34V894Zm58,0c19.98-.781,27.59,4.422,33,18v1c-13.11-.191-20.97-7.677-29-5l-6,6c-2.86,4.774-1.5,9.812,0,15l6,5c10.67-.915,16.41-10.135,29-5-5.7,15.216-32.69,27.468-46,10C1849.86,920.444,1864.01,901.59,1877,894Zm37,0h43v12h-14v41h-15V906h-14V894Zm-265,12v12c6.52,0.077,9.25-.922,13-3-0.22-4.513-.71-5.391-2-8Zm137,0v12c6.14-.021,8.42-1.016,12-3-0.33-2-.67-4-1-6-0.67-1-1.33-2-2-3h-9Z"></path>
  <path id="Color_Fill_17" data-name="Color Fill 17" className={styles.svgElem17}  d="M1645,1122c-12.58.17-14.48-3.44-23-5-0.67,1-1.33,2-2,3,0.33,1,.67,2,1,3,10.36,5.49,20.17,6.63,25,18-0.17,4.92-.76,7.42-3,10-6.24,13.64-27.69,7.2-36,1-0.67-3-1.33-6-2-9h14c3.45,3.08,2.63,4.17,9,5,0.67-1,1.33-2,2-3v-3c-8.1-4.38-19.92-6.36-24-15-2.8-7.92.74-13.44,4-18,9.77-3.26,17.33-3.87,28-1C1641.56,1112.65,1644.24,1114.04,1645,1122Zm-117-16c28.63-1.21,60.63,6.52,47,38-6.46,14.9-24.59,15.93-47,15v-53Zm55,0h15v53h-15v-53Zm86,0c19.98-.78,27.59,4.42,33,18v1c-13.11-.19-20.97-7.68-29-5l-6,6c-2.86,4.77-1.5,9.81,0,15,2,1.67,4,3.33,6,5,10.67-.92,16.41-10.13,29-5-5.7,15.22-32.69,27.47-46,10C1641.86,1132.44,1656.01,1113.59,1669,1106Zm40,0h15v53h-15v-53Zm23,0c17.52-.76,34.58-1.69,40,10,3.4,5.76,2.03,14.14-2,18-4.04,6.52-11.95,7.5-23,7v18h-15v-53Zm48,0h15v42h16v11h-31v-53Zm37,0h15v53h-15v-53Zm23,0h15q9,14.505,18,29h2v-29h14v53c-5.58.35-12.32,0.64-15-2l-18-27h-1v29h-15v-53Zm57,0h34v12h-19v9h17v11h-17v9h19v12h-34v-53Zm-150,12v12c6.14-.02,8.42-1.02,12-3-0.33-2-.67-4-1-6-0.67-1-1.33-2-2-3h-9Zm-204,1v27c9.48,0.48,14.12-.86,17-7,2.86-4.77,1.5-9.81,0-15-2-1.33-4-2.67-6-4C1550.33,1119.67,1546.67,1119.33,1543,1119Z"></path>
</svg>

        {/* <div className={styles.listContainerTitle}>    
         <Title   large={true} text={'Cabieses Foundation'} opacity={true}  left={true}/>
         <Title   normal={true} text={'MEANS'}   left={true} color={'#FDC316'}/>
    </div>
        <div className={styles.list}>
          <div className={styles.listItem}>Sustainability</div>
          <div className={styles.listItem}>Passion</div>
          <div className={styles.listItem}>Versatility</div>
          <div className={styles.listItem}>Inclusion</div>
          <div className={styles.listItem}>Integration</div>
          <div className={styles.listItem}>Honesty</div>
          <div className={styles.listItem}>Respect</div>
          <div className={styles.listItem}>Improvement</div>
          <div className={styles.listItem}>Discipline</div>
          <div className={styles.listItem}>Solidarity</div>
        </div> */}

      </div>
      <Footer/>
     </div>
   
    </div>
  );
}
