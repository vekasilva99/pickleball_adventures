"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./aboutUs.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header2";
import { Quote } from "@/components/Quote";
import { Title } from "@/components/Title";

const images = [
  "/assets/images/pickleball1.png",
  "/assets/images/pickleball2.png",
  "/assets/images/pickleball.jpg",
  "/assets/images/Peru1.jpg",
];
export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
        <div className={styles.row}>
          <div className={styles.column1}>
            <img src="/assets/images/machu-pichu.jpg" />
          </div>
          <div className={styles.column2}>
            <p>
              {" "}
              Mi vida siempre ha estado en vuelta en los deportes el poder haber
              jugado en el tour profesional de tenis y viajar a diferentes
              partes del mundo, decidí venir a Estados Unidos a estudiar pero el
              deporte dejo de ser una prioridad. Con el Pickleball la vida me
              dio una segunda oportunidad para demostrar mi talento, pero dobre
              todo me volvió a unir a mi familia y me dio la posibilidad de
              poder dejar un legado en mi país al ayudar a mi comunidad.
            </p>
            <Title
              normal={true}
              text={"- Hercilio Cabieses"}
              opacity={true}
              italic={true}
              left={true}
            />
          </div>

          <div className={styles.column3}>
            <p>
              Pickleball me dio nuevamente la oportunidad de competir, ya que
              debió a un accidente que tuve acabo con mi carrera de tenista.
              Quiero ser un modelo para los demás y que sepan que nunca tienen
              que aceptar un No por respuesta. Con dedicación y disciplina
              puedes cumplir todas tus metas. Este deporte me abrió muchas
              puertas
            </p>
            <Title
              normal={true}
              text={"Miranda - Cabieses"}
              opacity={true}
              italic={true}
              right={true}
            />
          </div>
          
        </div>

      
        <div className={styles.center}>
          <div className={styles.listContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 2199 1559"
            >
              <path
                id="Color_Fill_1"
                data-name="Color Fill 1"
                className={styles.svgElem1}
                d="M1097,495c137.26-2.037,231.85,54.8,270,152,10.43,26.57,10.88,53.323,16,87,6.49,42.72-2.85,90.245-13,123-10.71,34.571-25.48,69.407-45,96-14.81,20.174-35.41,36.467-55,52l-39,42c-6.61,6.51-15.03,9.72-19,19-3.29,7.68-13.79,60.22-11,64,6.57,3.54,11.53,3.47,16,9-8.09,19.38-18.65,20.08-35,31q-7.5,7.995-15,16c0.33,0.67.67,1.33,1,2,16.8-.67,36.71.79,42,12,15.54,28.38-50.61,28.65-68,34v2q30,4.005,60,8c0.33,2,.67,4,1,6q-7.995,22.5-16,45c-6.48,8.93-30.29,5.18-28,19q9.495,0.495,19,1c0.33,0.67.67,1.33,1,2-1.57,10.19-16.56,26.81-25,30q-20.505,1.005-41,2c-46.89,7.4-130.648,11.46-108-44h-2l-19-6c0.606-16.11,12.541-21.51,19-32-11.469-.43-28.413-4.02-34-11,4.4-25.39,30.119-34.41,58-36v-4h-19l-38-3c1.768-18.23,21.887-28.33,18-47q-8.5-1.995-17-4c-0.333-.67-0.667-1.33-1-2,0.851-15.43,15.272-21.04,13-34-8.346-47.6-59.607-90.09-86-123-45.2-56.371-102.957-163.439-80-276a305.035,305.035,0,0,1,28-79c16.037-31.468,38.477-64.74,65-86,32.862-26.342,69.3-45.979,117-58Zm-11,32-68,7c-49.256,11.576-85.644,32.079-119,59-21.463,17.323-35.635,45.547-47,73-7.228,17.461-12.861,37.792-17,59-22.363,114.6,58.235,223.848,109,275q28,27,56,54c-2.539,12.93,7.11,71.69,15,78,7.61,4.66,14.23-.2,19-4,11.29-79.77,16.91-175.823-3-259q-6-26.5-12-53c-38.449-10.191-59.882,7.179-79-26-4.813-8.353-6.6-21.292-2-32l16-20c34.285-43.15,70.11,13.469,81,46l6-1c12.6-31.667-2.47-47.98,26-67,4-2.674,8.56-6.442,14-5,32.63,4.49,1.88,56.607-3,66,2.55,18.168,20.58,18.279,37,13,2.72-8.126,1.77-21.473,4-32,6.27-29.642,16.5-48.041,37-57,9.37,0.85,17.75,4.842,21,12,12.41,21.375-25.63,65.267-32,77,0.67,0.667,1.33,1.333,2,2a21.733,21.733,0,0,0,14,9c-0.33-.667-0.67-1.333-1-2,20.4-16.032,24.19-45.316,50-60,10.97,0.713,14.53,4.179,20,10,0.62,37.71-22.89,66.844-48,78-7.19,3.193-24.01.384-29,6-27.33,28.578-29.94,104.616-38,151q-4.005,30-8,60,1.5,40.995,3,82c12.7,0.27,32.79,2.29,42-2l39-90c8.58-13.2,34.29-19.77,47-29,37.67-27.366,73.86-54.958,98-96,12.45-21.171,19.17-48.85,25-76,6.48-30.191,5.2-71.282-1-100C1331.27,599.841,1244.84,526.067,1086,527ZM731,695q0.5,1,1,2Q731.5,696,731,695Zm411,34-3,5c-3,10.1-6.45,29.9-4,40h4c7.05-6.9,27.63-21.3,22-36-1.33-2.333-2.67-4.667-4-7Zm-76,8c-1.33,1.333-2.67,2.667-4,4-5.31,9.336.93,19.767,7,24h2c4.05-5.319,7.28-7.855,8-17A21.713,21.713,0,0,0,1066,737ZM964,747c-6.169,4.025-11.157,5.338-12,15,12.411,19.858,20.255,26.76,54,26,0.67-1,1.33-2,2-3C999.094,770.288,986.831,747.545,964,747Zm235,18c-9.47,6.241-25.94,24.851-23,39h1c18.74-3.025,34.82-10.611,36-31l-3-5Zm-146,32-12,7q6.495,34,13,68,4.5,58.993,9,118c9.01,52.89-9.09,94.98-12,139l1,1c10.08-.01,32.63.5,37-6,6.84-13.28,1.96-49.82,0-66q2.505-24,5-48c7.57-44.238,12.62-86.238,25-126q10.5-27.5,21-55-9.495-10-19-20c-13.93,1.879-29.71,15.278-46,9C1064.39,813.91,1063.68,800.758,1053,797Zm-45,375q12-1.995,24-4v-2c-0.33-.67-0.67-1.33-1-2-9.09-.77-16.01-0.08-23,3v5Zm139,2c-7.51,3.62-24.56,3.24-28,11q19.5-.495,39-1c-0.33-2-.67-4-1-6-0.67-1.33-1.33-2.67-2-4h-8Zm-120,130c4.11,18.68,81.8,15.53,103,10,2.2-3.39,3.29-4.52,4-10H1027Z"
              ></path>
              <path
                id="Color_Fill_2"
                data-name="Color Fill 2"
                className={styles.svgElem2}
                d="M1041,530h7c-0.33,1.667-.67,3.333-1,5-16.74,1.728-35.19,15.516-48,23-8.489,4.96-23.724,4.3-34,11-9.765,6.368-15.8,15.376-32,16v-1c12.343-26.8,35.576-36.892,70-47Zm118,3c8.47,0.1,74.75,21.433,79,25,6.09,5.106,17.59,29.866,28,39l3-2c-0.15,3.955-2.08,4.769,1,6,6,6.59,18.24,7.981,24,12,14.8,10.324,27.92,58.408,31,76l4-1c-3.14,29.4,11.02,70.178,4,107-6.44,33.765-18.22,68.686-32,94-6.99,12.838-13.99,41.873-22,46-6.79-2.8-22.82,17.122-30,22-18.86,12.814-61.73,29.444-85,20-12.29-4.987-36.58,8.445-47-2-10.39-24.819,27.01-129.44,36-144,12.6-2.043,25.71-1.5,35-7,19.73-11.667,45.06-45.015,41-76-32.03-35.537-54.13,47.066-72,53l-12-8c2.65-16.785,46.68-58.256,31-80-3.05-7.682-11.42-11.061-21-12-17.5,12.183-28.01,25.382-34,49-2.46,9.716.47,36.044-7,41-15.03,9.971-35.33.178-36-16,4.89-10.9,9.61-20.1,19-20,4.94-14.045,13.31-25.378,18-42,7.75-27.476-12.76-70.435-20-80-5.05-6.666-13.83-10.021-18-18l-8,1c1.26-12.882-52.35-20.847-71-18,0.355,3.142,1.657,1.285-1,3-5.766-5.221-21.084,3.8-26,7,0.565,3.565,1.793,2.577-3,4v2c-3.794-.977-3.189-4.426-5-1-10.937,4.607-36.437,27.5-34,45l-4-1c-0.587,9.878-5.6,18.965-8,27-6.462,21.6,11.4,62.492,23,71-5.344,13.319-5.533,25.859,2,37,25.519,37.74,47.658,6.917,79,26,7.06,47.215,20.66,88.766,21,146l-28-1c0.33-1.333.67-2.667,1-4-15.38.132-20.89-5.327-31-7,1.342-2.763.633-.294,1-3-13.97-.327-20.6-6.624-29-12-9.113-5.83-18.289-5.035-28-10-31.456-16.084-40.465-47.048-46-88-2.485-18.39-15.251-41.772-9-65,5.533-20.557,15.776-40.363,22-57,3.387-9.053-5-59.887,1-71,6.975-12.926,25.966-18.8,32-29,5.659,2.287,32.334-16.648,41-22,34.64-21.394,78.59-33.053,118-52C1092.98,540.126,1160.35,537.237,1159,533Zm-14,195c9.84,0.276,12.32,3.9,17,9,0.49,17.1-15.05,37.241-28,37v-8C1137.39,751.641,1134.97,735.7,1145,728Zm-80,9h3q5.505,4.5,11,9c0.2,11.434-3.46,14.686-9,20l-3-1c-4.58-6.69-8.34-12.7-6-24C1062.33,739.667,1063.67,738.333,1065,737ZM963,747c23.812-.1,36.814,22.528,45,38l-3,4c-31.728-3.205-45.073-4.624-54-30C954.929,753.616,957.9,751.132,963,747Zm212,57c0.13-14.847,13.28-38.382,28-39,2.67,1,5.33,2,8,3q1.005,5,2,10C1207.2,793.471,1195.57,803.5,1175,804Zm-122-7h4c19.66,45.027,52.39,2.3,65,13l18,18c2.61,9.911-11.84,30.315-15,39-12.15,33.44-19.7,72.143-26,110h-8c-4.73-4.421-20.09-4.449-27-6,0.09,4.174.19,2.225-1,6h-2q-4.5-59.495-9-119c-3.56-18.193-10.51-33.23-11-54ZM915,945c34.77,20.409,80.479,35.553,129,46v7q-24.495,2-49,4c-21.37-4.9-62.108-32.343-82-44C912.163,949.9,911.913,951.478,915,945Zm131,86v14c-12.64-2.16-39.58,13.87-48,6q-6.5-6.495-13-13c0.333-1.33.667-2.67,1-4C999.05,1037.3,1036.86,1031.52,1046,1031Zm63,95q-1.005-46.995-2-94c0.67,0.33,1.33.67,2,1,0.59,7.83,1.04,7.06,0,14h7c16-16.1,50.4-9.28,75-12v1q-19.995,45-40,90h-42Zm-44-67,25-3c0.33,22.12,5.98,56.59-3,72q-18,1.005-36,2,6.495-40.5,13-81h1v10Zm-44,70c-0.37-25.65-2.56-43.53,6-60,5.26,0.83,8.66-1.04,17-2-1.06,15.78-3.85,58.22-15,65-4.12,2.57-11.59,2.44-16,0,1-.33,2-0.67,3-1C1018.02,1128.92,1017,1129.64,1021,1129Zm-1,34,16,3v1c-6.89,1.78-23.2,9.1-29,2,0.33-1,.67-2,1-3Zm139,22c-11.03.31-34.99,3.17-42-2v-1c12.09-3.04,29.9-11.51,41-5v2C1158.33,1181,1158.67,1183,1159,1185Z"
              ></path>
              <path
                id="Color_Fill_3"
                data-name="Color Fill 3"
                className={styles.svgElem3}
                d="M747,927c13.5,0.892,26.587,16.4,17,30-4.325,7.059-14.806,8.693-21,14-10.9,9.343-58.533,63.81-86,65-4.247-2.38-7.711-2.39-10-7-4.037-3.51-4.366-10.07-4-18,28.045-23.98,49.238-42.172,75-68C722.189,938.8,741.307,931.857,747,927Z"
              ></path>
              <path
                id="Color_Fill_4"
                data-name="Color Fill 4"
                className={styles.svgElem4}
                d="M298,1027c-12.584.17-14.476-3.44-23-5l-2,3,1,3c10.357,5.49,20.174,6.63,25,18-0.167,4.92-.76,7.42-3,10-6.237,13.64-27.686,7.2-36,1q-1-4.5-2-9h14c3.451,3.08,2.629,4.17,9,5l2-3v-3c-8.1-4.38-19.923-6.36-24-15-2.8-7.92.742-13.44,4-18,9.766-3.26,17.332-3.87,28-1C294.56,1017.65,297.243,1019.04,298,1027Zm179-17c33.77,0.59,39.411,46.47,10,54C451.021,1073.22,437.993,1025.65,477,1010Zm128,17c-12.584.17-14.476-3.44-23-5l-2,3q0.5,1.5,1,3c10.357,5.49,20.174,6.63,25,18-0.167,4.92-.76,7.42-3,10-6.237,13.64-27.686,7.2-36,1q-1-4.5-2-9h14c3.451,3.08,2.629,4.17,9,5l2-3v-3c-8.1-4.38-19.923-6.36-24-15-2.8-7.92.742-13.44,4-18,9.766-3.26,17.332-3.87,28-1C601.56,1017.65,604.243,1019.04,605,1027Zm-484-16c17.522-.76,34.579-1.69,40,10,3.4,5.76,2.033,14.14-2,18-4.037,6.52-11.946,7.5-23,7v18H121v-53Zm47,0c18.823-.59,31.418.15,41,8q1,6.5,2,13c-3,5.98-6.158,8.04-11,12q5.5,10.005,11,20H195q-6-10.005-12-20v20H168v-53Zm50,0h34v12H233v9h17v11H233v9h19v12H218v-53Zm84,0h43v12H331v41H316v-41H302v-12Zm49,0h15v53H351v-53Zm46,33v-10h27q-0.5,7.995-1,16c-9.3,25.29-59.807,15.55-50-21,6.41-23.89,42.776-22.79,51-1-13.455-.07-20.153-4.46-30-3-7.071,4.78-10.4,18.88-1,24a12.37,12.37,0,0,0,13,1c3.762-1.76,3.729-1.61,5-6H397Zm34-33h15v53H431v-53Zm82,0h14c-0.4,13.98-1.149,30.64,4,39,5.483,1.03,8.116,1.12,11-3,4.3-6.86,2.249-25.56,2-36h14c1.11,26.74,3.517,61.83-30,53C510.113,1059.29,512.05,1034.12,513,1011Zm-377,12v12c6.141-.02,8.422-1.02,12-3q-0.5-3-1-6l-2-3h-9Zm47,0v12c6.518,0.08,9.251-.92,13-3-0.215-4.51-.708-5.39-2-8C190.334,1023.67,186.666,1023.33,183,1023Zm292,1q-3,3.495-6,7c-2.654,4.91-1.44,9.58,0,15,2,1.33,4,2.67,6,4h10c7.071-4.78,10.4-18.88,1-24C483.263,1024.17,480.133,1023.9,475,1024Z"
              ></path>
              <path
                id="Color_Fill_5"
                data-name="Color Fill 5"
                className={styles.svgElem5}
                d="M548,653c13.912-.12,51.338,6.033,60,12,7.938,5.468,26.125-1.128,32,0,14.842,2.851,29.416,4.788,37,8,16.909,7.161,34.335-1.5,52,12,2.361,9.867,1.18,13.236,0,24-23.318,5.2-94.909-3.068-116-12H593c-15.731-5.62-38.55-4.755-51-14-2.215-8.983-2.479-14.966-2-24C544.622,657.923,545.894,656.3,548,653Z"
              ></path>
              <path
                id="Color_Fill_6"
                data-name="Color Fill 6"
                className={styles.svgElem6}
                d="M95,628h17l19,53H115c-0.684-4.487-1.527-6.514-4-9H94l-3,9H76v-1Zm41,0h14c-0.4,13.977-1.149,30.64,4,39,5.483,1.028,8.116,1.121,11-3,4.3-6.863,2.249-25.56,2-36h14c1.11,26.744,3.517,61.831-30,53C133.113,676.287,135.05,651.117,136,628Zm50,0h43v12H215v41H200V640H186V628Zm48,0h15v20h18V628h14v53H267V660H249v21H234V628Zm56,0h34v12H305v9h17v11H305v9h19v12H290V628Zm41,0h15l18,29h2V628h14v53c-5.577.354-12.318,0.643-15-2l-18-27h-1v29H331V628Zm55,0h43v12H415v41H400V640H386V628Zm48,0h15v53H434V628Zm40,0c19.984-.781,27.586,4.422,33,18v1c-13.108-.191-20.967-7.677-29-5l-6,6c-2.859,4.774-1.5,9.812,0,15l6,5c10.673-.915,16.408-10.135,29-5-5.7,15.216-32.694,27.468-46,10C446.865,654.444,461.009,635.59,474,628ZM103,645q-2.5,8-5,16h11Z"
              ></path>
              <path
                id="Color_Fill_7"
                data-name="Color Fill 7"
                className={styles.svgElem7}
                d="M713,377c6.342-.142,15.745.694,19,4,8.665,7.157,11.694,19.424,19,28,13.415,15.746,62.53,50.384,55,79-8.064,1.032-18.971,7.877-31,1-10.03-22.49-64.74-64.591-64-78,0.267-4.831-11.506-11.953-6-24C707.8,383.333,710.955,381.708,713,377Z"
              ></path>
              <path
                id="Color_Fill_8"
                data-name="Color Fill 8"
                className={styles.svgElem8}
                d="M628,337c-12.584.172-14.476-3.435-23-5l-2,3q0.5,1.5,1,3c10.357,5.487,20.174,6.625,25,18-0.167,4.919-.76,7.417-3,10-6.237,13.638-27.686,7.2-36,1q-1-4.5-2-9h14c3.451,3.076,2.629,4.167,9,5l2-3v-3c-8.1-4.38-19.923-6.365-24-15-2.8-7.922.742-13.442,4-18,9.766-3.258,17.332-3.87,28-1C624.56,327.652,627.243,329.037,628,337Zm47,0c-12.584.172-14.476-3.435-23-5l-2,3q0.5,1.5,1,3c10.357,5.487,20.174,6.625,25,18-0.167,4.919-.76,7.417-3,10-6.237,13.638-27.686,7.2-36,1q-1-4.5-2-9h14c3.451,3.076,2.629,4.167,9,5l2-3v-3c-8.1-4.38-19.923-6.365-24-15-2.8-7.922.742-13.442,4-18,9.766-3.258,17.332-3.87,28-1C671.56,327.652,674.243,329.037,675,337ZM340,321l7,35h1l6-35h16l-13,53-19-1-6-30-1,2-7,29c-6.06.367-14.993,0.919-18-2l-13-50v-1h16l6,35h1l7-35h17Zm36,0h34v12H391v9h17v11H391v9h19v12H376V321Zm41,0h15v42h16v11H417V321Zm37,0h15v42h16v11H454V321Zm37,0h15l18,29h2V321h14v53c-5.577.354-12.318,0.643-15-2l-18-27h-1v29H491V321Zm57,0h34v12H563v9h17v11H563v9h19v12H548V321Z"
              ></path>
              <path
                id="Color_Fill_9"
                data-name="Color Fill 9"
                className={styles.svgElem9}
                d="M1059,243c8.34,2.84,19.83,2.035,25,8,5.25,6.057,3.11,19.725,4,30,2.38,27.491,12.2,116.537-2,142h-20c-3.4-5.036-7.58-5.6-9-13q-1.005-61.994-2-124c-1.6-6.593-6.45-21.453-4-31C1052.45,249.36,1057.19,248.4,1059,243Z"
              ></path>
              <path
                id="Color_Fill_10"
                data-name="Color Fill 10"
                className={styles.svgElem10}
                d="M974,149h34v12H989v9h17v11H989v9h19v12H974V149Zm41,0h15v42h16v11h-31V149Zm37,0h15v53h-15V149Zm20,0h43v12h-14v41h-15V161h-14V149Zm48,0h34v12h-19v9h17v11h-17v9h19v12h-34V149Z"
              ></path>
              <path
                id="Color_Fill_11"
                data-name="Color Fill 11"
                className={styles.svgElem11}
                d="M1378,317c10.22-.522,18.66.663,23,6,11.17,19.276-7.5,42.669-18,56-4.77,6.06-4.64,13.5-9,20-9.91,14.769-25.41,26.761-37,40,0.67,1.333,1.33,2.667,2,4-5.63,7.465-23.6,12.421-30,25-10.27-.891-13.36-1.973-23-5-2.14-7.173-4.8-8.074-5-18C1307.32,431.573,1366.78,351.279,1378,317Z"
              ></path>
              <path
                id="Color_Fill_12"
                data-name="Color Fill 12"
                className={styles.svgElem12}
                d="M1696,266c30.96,0.51,34.86,30.173,20,49q4.995,6.5,10,13v1h-17c-5.47-11.857-18.46-6.862-28-14C1656.11,296.375,1678.64,273.65,1696,266Zm-228,1h15v20h18V267h14v53h-14V299h-18v21h-15V267Zm55,0h15v53h-15V267Zm46,33V290h27q-0.495,8-1,16c-9.3,25.287-59.81,15.553-50-21,6.41-23.892,42.78-22.792,51-1-13.46-.07-20.15-4.46-30-3-7.07,4.775-10.4,18.885-1,24a12.365,12.365,0,0,0,13,1c3.76-1.764,3.73-1.61,5-6h-14Zm34-33h15v20h18V267h14v53h-14V299h-18v21h-15V267Zm129,0h14c-0.4,13.977-1.15,30.64,4,39,5.48,1.028,8.12,1.121,11-3,4.3-6.863,2.25-25.56,2-36h14c1.11,26.744,3.52,61.831-30,53C1729.11,315.287,1731.05,290.117,1732,267Zm70,0h17q9.495,26.5,19,53h-16c-0.68-4.487-1.53-6.514-4-9h-17l-3,9h-15v-1Q1792.5,293,1802,267Zm40,0h15v42h16v11h-31V267Zm37,0h15v53h-15V267Zm20,0h43v12h-14v41h-15V279h-14V267Zm79,53h-15c0.62-24.863-9.7-35.767-18-52v-1h16q4.995,10,10,20v-2q4.995-9,10-18l15,1C1986.76,283.417,1977.9,295.226,1978,320Zm-284-40-6,7c-2.65,4.914-1.44,9.583,0,15l6,4h10c7.07-4.775,10.4-18.885,1-24C1702.26,280.171,1699.13,279.9,1694,280Zm116,4q-2.505,8-5,16h11Z"
              ></path>
              <path
                id="Color_Fill_13"
                data-name="Color Fill 13"
                className={styles.svgElem13}
                d="M1557,556c13.17,2.511,21.26,18.676,12,31-8.22,8.978-110.32,36.98-128,40a21.8,21.8,0,0,0-9-8c-0.39-7.588-1.73-13.935,1-20l6-8c21.76-.4,60.69-17.737,79-26C1531.17,559.059,1544.58,561.473,1557,556Zm36,29q1.995,6,4,12h-4V585Z"
              ></path>
              <path
                id="Color_Fill_14"
                data-name="Color Fill 14"
                className={styles.svgElem14}
                d="M1875,560c-12.58.172-14.48-3.435-23-5-0.67,1-1.33,2-2,3,0.33,1,.67,2,1,3,10.36,5.487,20.17,6.625,25,18-0.17,4.919-.76,7.417-3,10-6.24,13.638-27.69,7.2-36,1-0.67-3-1.33-6-2-9h14c3.45,3.076,2.63,4.167,9,5,0.67-1,1.33-2,2-3v-3c-8.1-4.38-19.92-6.365-24-15-2.8-7.922.74-13.442,4-18,9.77-3.258,17.33-3.87,28-1C1871.56,550.652,1874.24,552.037,1875,560Zm-282-16h34v12h-19v9h17v11h-17v9h19v12h-34V544Zm38,0c8.54-.356,15.31.118,20,3q3.495,5.5,7,11c0.67-.333,1.33-0.667,2-1q3.495-6.5,7-13l16,1c-0.67.667-1.33,1.333-2,2-12.66,29.024-16.91,20.9,3,49v1h-17q-4.995-7-10-14h-1q-4.005,7-8,14l-16-1c0.67-.667,1.33-1.333,2-2C1647.21,563.7,1650.22,573.372,1631,544Zm75,0c19.98-.781,27.59,4.422,33,18v1c-13.11-.191-20.97-7.677-29-5l-6,6c-2.86,4.774-1.5,9.812,0,15l6,5c10.67-.915,16.41-10.135,29-5-5.7,15.216-32.69,27.468-46,10C1678.86,570.444,1693.01,551.59,1706,544Zm40,0h15v42h16v11h-31V544Zm37,0h14c-0.4,13.977-1.15,30.64,4,39,5.48,1.028,8.12,1.121,11-3,4.3-6.863,2.25-25.56,2-36h14c1.11,26.744,3.52,61.831-30,53C1780.11,592.287,1782.05,567.117,1783,544Zm100,0h15v53h-15V544Zm19,0h16q6,18.5,12,37h1q5.505-18.5,11-37h16q-9,26.5-18,53h-20Q1911,570.5,1902,544Zm60,0h34v12h-19v9h17v11h-17v9h19v12h-34V544Z"
              ></path>
              <path
                id="Color_Fill_15"
                data-name="Color Fill 15"
                className={styles.svgElem15}
                d="M1437,863c47.99-.686,99.14,32.129,141,42,1.3,9.711,1.54,16.289-3,24-29.43,12.815-110.62-26.274-143-36-1.42-10.658-2.35-14.973,0-26C1434.57,865.737,1435.4,865.216,1437,863Zm149,43c2.27,3.328,2.24,9.72,0,14V906Zm0,32c0.67,2.666,1.33,5.334,2,8C1585.84,943.882,1586.01,942.556,1586,938Z"
              ></path>
              <path
                id="Color_Fill_16"
                data-name="Color Fill 16"
                className={styles.svgElem16}
                d="M1764,909c-12.58.172-14.48-3.435-23-5-0.67,1-1.33,2-2,3,0.33,1,.67,2,1,3,10.36,5.487,20.17,6.625,25,18-0.17,4.919-.76,7.417-3,10-6.24,13.638-27.69,7.2-36,1-0.67-3-1.33-6-2-9h14c3.45,3.076,2.63,4.167,9,5,0.67-1,1.33-2,2-3v-3c-8.1-4.38-19.92-6.365-24-15-2.8-7.922.74-13.442,4-18,9.77-3.258,17.33-3.87,28-1C1760.56,899.652,1763.24,901.037,1764,909Zm30-17c33.77,0.587,39.41,46.466,10,54C1768.02,955.216,1754.99,907.652,1794,892Zm-208,1c17.52-.758,34.58-1.687,40,10,3.4,5.76,2.03,14.137-2,18-4.04,6.518-11.95,7.5-23,7v18h-15V893Zm48,0h34v12h-19v9h17v11h-17v9h19v12h-34V893Zm41,0c18.82-.586,31.42.147,41,8q1.005,6.5,2,13c-3.01,5.981-6.16,8.041-11,12q5.505,10,11,20h-16l-12-20v20h-15V893Zm155,0h15l18,29h2V893h14v53c-5.58.354-12.32,0.643-15-2l-18-27h-1v29h-15V893Zm74,0h17q9.495,26.5,19,53h-16c-0.68-4.487-1.53-6.514-4-9h-17l-3,9h-15v-1Q1894.5,919,1904,893Zm40,0h15v42h16v11h-31V893Zm37,0h15v53h-15V893Zm23,0h38c0.3,19.8-12.6,28.337-21,40v1h21v12h-38c-0.26-20.792,13.33-27.652,21-41h-21V893Zm46,0h34v12h-19v9h17v11h-17v9h19v12h-34V893Zm41,0c28.63-1.214,60.63,6.52,47,38-6.46,14.9-24.59,15.934-47,15V893Zm-490,12v12c6.14-.021,8.42-1.016,12-3-0.33-2-.67-4-1-6-0.67-1-1.33-2-2-3h-9Zm89,0v12c6.52,0.077,9.25-.922,13-3-0.22-4.513-.71-5.391-2-8Zm102,1-6,7c-2.65,4.914-1.44,9.583,0,15l6,4h10c7.07-4.775,10.4-18.885,1-24C1800.26,906.171,1797.13,905.9,1792,906Zm314,0v27c9.48,0.479,14.12-.856,17-7,2.86-4.774,1.5-9.812,0-15l-6-4Zm-194,4q-2.505,8-5,16h11Z"
              ></path>
              <path
                id="Color_Fill_17"
                data-name="Color Fill 17"
                className={styles.svgElem17}
                d="M1369,1019c16.51-.26,75.87,45.64,80,54,6.13,11.29-1.7,20.73-5,28-36.42,5.33-49.19-43.29-79-46-1.46-9.67-5.26-15.02-4-28C1365.03,1025.42,1367.11,1022.59,1369,1019Z"
              ></path>
              <path
                id="Color_Fill_18"
                data-name="Color Fill 18"
                className={styles.svgElem18}
                d="M1484,1101h15v42h16v11h-31v-53Zm37,0h14c-0.4,13.98-1.15,30.64,4,39,5.48,1.03,8.12,1.12,11-3,4.3-6.86,2.25-25.56,2-36h14c1.11,26.74,3.52,61.83-30,53C1518.11,1149.29,1520.05,1124.12,1521,1101Zm50,0c8.54-.36,15.31.12,20,3q3.495,5.505,7,11c0.67-.33,1.33-0.67,2-1q3.495-6.495,7-13,7.995,0.495,16,1l-2,2c-12.66,29.02-16.91,20.9,3,49v1h-17q-4.995-7.005-10-14h-1q-4.005,7.005-8,14-7.995-.495-16-1l2-2C1587.21,1120.7,1590.22,1130.37,1571,1101Zm59,0h14c-0.4,13.98-1.15,30.64,4,39,5.48,1.03,8.12,1.12,11-3,4.3-6.86,2.25-25.56,2-36h14c1.11,26.74,3.52,61.83-30,53C1627.11,1149.29,1629.05,1124.12,1630,1101Zm53,0c18.82-.59,31.42.15,41,8q1.005,6.495,2,13c-3.01,5.98-6.16,8.04-11,12q5.505,10.005,11,20h-16q-6-10.005-12-20v20h-15v-53Zm80,53h-15c0.62-24.86-9.7-35.77-18-52v-1h16q4.995,10.005,10,20v-2q4.995-9,10-18,7.5,0.495,15,1C1771.76,1117.42,1762.9,1129.23,1763,1154Zm-65-41v12c6.52,0.08,9.25-.92,13-3-0.22-4.51-.71-5.39-2-8C1705.33,1113.67,1701.67,1113.33,1698,1113Z"
              ></path>
            </svg>

            {/* <div className={styles.listContainerTitle}>    
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
        </div> */}
          </div>

          <Quote
            titleLine1={"Our Mission"}
            content={
              "Our mission is for you to experience an outstanding tour to have fun with an exclusive and limited group of members, but above all, to encourage you to take away from this adventure not only the knowledge of unique destinations but also the fulfillment that comes from helping others and creating change with us."
            }
          />

          <div className={styles.slider}>
            {images.map((image, index) => {
              if (index == 0) {
                return (
                  <img
                  id={`image-${index}`}
                    src={image}
                    style={{
                      marginLeft: (currentSlide * -100).toString() + "%",
                    }}
                  />
                );
              } else {
                return <img  id={`image-${index}`} src={image} />;
              }
            })}
          </div>
          <div className={styles.left}>
            <Title
              small={true}
              text={
                "Un hermano es para toda la vida y que alegria que el deporte nos vuelva a unir"
              }
              opacity={true}
              center={true}
              italic={true}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
