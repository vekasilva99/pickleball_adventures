"use client";
import Image from "next/image";
import React from "react";
import styles from "./destinations.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";
import { Reveal } from "@/components/Reveal";
export default function Destinations() {
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const toggle = () => {
    setShowModal(!showModal);
  };

  const getClass = () => {
    let show = `${styles.overlay} `;
    if (!showModal) {
      show += `${styles.overlayHidden}`;
    }
    return show;
  };

  React.useEffect(() => {
    getClass();
  }, [showModal]);
  return (
    <>
      <div className={getClass()}>
        <div className={styles.modal}>
          <img
            className={styles.close}
            src="/assets/icons/close-yellow.png"
            onClick={() => {
              toggle();
            }}
          />
          <div className={styles.modalContent}>
            <h3>7 Nights</h3>
            <h2>Lima, Peru</h2>
            <button
              className={styles.button}
              onClick={() => {
                router.push("/destinations/peru");
              }}
            >
              <h2>EXPLORE THIS ITINERARY</h2>
              <img src="/assets/icons/arrow-45.png" />
            </button>
          </div>
          <div className={styles.dateContent}>
            <div className={styles.month}>
              <h4>September 2023</h4>
            </div>
            <div className={styles.item}>
              <h5>Wed, September 3, 2023</h5>
              <h2>$5,500</h2>
              <button
                className={styles.button}
                onClick={() => {
                  router.push("/reserve");
                }}
              >
                <h2>SELECT DATE</h2>
                <img src="/assets/icons/arrow-45.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <Navbar />
        <Header
          titleLine1="Our"
          titleLine2="Destinations"
          background="/assets/images/beach.png"
          whiteBackground={true}
          backgroundTop="/assets/images/beach.jpg"
        />
        <div className={styles.page}>
          <div className={styles.destinationsContainer}>
            <Reveal>
            <div className={styles.destinationCard}>
              <img src="/assets/images/Peru1.jpg" />
              <div className={styles.whiteGradient}></div>
              <div className={styles.cardInfo}>
                <Reveal>
                <h3>7 Nights</h3>
                </Reveal>
                <Reveal>
                <h2>Lima, Peru</h2>
                </Reveal>
              </div>
              <div className={styles.price}>
                <h1>$5,500</h1>
                <h2>AVG PER PERSON</h2>
                <button
                  onClick={() => {
                    toggle();
                  }}
                >
                  View 1 date
                </button>
              </div>
            </div>
            </Reveal>
            <Reveal>
            <div className={styles.destinationCard}>
              <img src="/assets/images/ecuador.jpg" />
              <div className={styles.whiteGradientNotActive}></div>
              <div className={styles.cardInfo}>
                <Reveal>
                <h3>7 Nights</h3>
                </Reveal>
                <Reveal>
                <h2>Quito, Ecuador</h2>
                </Reveal>
                <Reveal>
                <button className={styles.notActive}>Coming Soon</button>
                </Reveal>
              </div>
            </div>
            </Reveal>
            <Reveal>
            <div className={styles.destinationCard}>
              <img src="/assets/images/venezuela.jpg" />
              <div className={styles.whiteGradientNotActive}></div>
              <div className={styles.cardInfo}>
                <Reveal>
                <h3>7 Nights</h3>
                </Reveal>
                <Reveal>
                <h2>Caracas, Venezuela</h2>
                </Reveal>
              </div>
            </div>
            </Reveal>
            <Reveal>
            <div className={styles.destinationCard}>
              <img src="/assets/images/colombia.jpeg" />
              <div className={styles.whiteGradientNotActive}></div>
              <div className={styles.cardInfo}>
                <Reveal>
                <h3>7 Nights</h3>
                </Reveal>
                <Reveal>
                <h2>Cartagena, Colombia</h2>
                </Reveal>
              </div>
            </div>
            </Reveal>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
