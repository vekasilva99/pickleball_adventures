"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Quote } from "@/components/Quote";
import { Title } from "@/components/Title";
import { useRouter } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import React from 'react';
import LazyLoad from 'react-lazy-load';
import ReactPlayer from 'react-player';



export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <Navbar />
      <Reveal width="100%">
        <div className={styles.row}>
          <div className={styles.videoContainer}>
          <LazyLoad offsetVertical={500} className="lazyload-video">
            <ReactPlayer
              url="/assets/videos/VideoPickleball3.mp4"
              playing
              muted
              loop
              width="100%"
              height="100%"
              className={styles.videoHome}
            />
          </LazyLoad>
            <img src="/assets/icons/arrow-45.png"></img>
          </div>

          <div className={styles.content}>
            <Title large={true} text={"Pickleball Adventures"} left={true} />
            <button
              className={styles.button}
              onClick={() => {
                router.push("/destinations");
              }}
            >
              <h2>Book Now</h2>
              <img src="/assets/icons/arrow-45.png" />
            </button>
          </div>
        </div>
      </Reveal>
      <div className={styles.page}>
        <Title
          normal={true}
          text={"Experience something new"}
          opacity={true}
          marginTop={"10vh"}
          marginBottom={"2vh"}
        />
        <Reveal>
          <p>
            Experience a boutique adventure where you'll discover a unique,
            internationally acclaimed <br />
            destination filled with culture and history.
          </p>
        </Reveal>
        <div className={styles.destinationsContainer}>
          <Reveal>
            <div className={styles.destinationCard}>
              <img src="/assets/images/Peru1.jpg" />
              <div className={styles.whiteGradient}></div>
              <div className={styles.cardInfo}>
                <h2>Peru</h2>
                <button
                  onClick={() => {
                    router.push("/destinations/peru");
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.destinationCard}>
              <img src="/assets/images/ecuador.jpg" />
              <div className={styles.whiteGradientNotActive}></div>
              <div className={styles.cardInfo}>
                <h2>Ecuador</h2>
                <button className={styles.buttonComingSoon}>Coming Soon</button>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.destinationCard}>
              <img src="/assets/images/colombia.jpeg" />
              <div className={styles.whiteGradientNotActive}></div>

              <div className={styles.cardInfo}>
                <h2>Colombia</h2>
                <button className={styles.buttonComingSoon}>Coming Soon</button>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <button
            className={styles.secondaryButton}
            onClick={() => {
              router.push("/destinations");
            }}
          >
            See More
          </button>
        </Reveal>
        <Quote
          titleLine1={"Let the adventure"}
          titleLine2={"begin"}
          content={`Live a unique trip experience while having the opportunity to make a difference in the lifes of underprivileged children and youth, providing them with opportunities and a better future through sports. All while sharing your passion for the game of pickleball. Explore charming places guided by local people, with guaranteed safety. Join us and get ready for an adventure that will surpass your expectations. Be one of the chosen ones who leaves a lasting impact on the lives of others!`}
        />
        <Title
          marginLeft={"5vw"}
          widthReveal={"100%"}
          normal={true}
          text={"What’s Included"}
          opacity={true}
          marginTop={"10vh"}
          marginBottom={"2vh"}
          left={true}
        />

        <div className={styles.featuresContainer}>
          <div className={styles.feature}>
            <Reveal width="100%">
              <img src="/assets/icons/lodging.png" />
              <h4>Lodging</h4>
              <p>Spend your stay in one of the most exclusive hotels.</p>
            </Reveal>
          </div>

          <div className={styles.feature}>
            <Reveal width="100%">
              <img src="/assets/icons/restaurant.png" />
              <h4>Restaurants</h4>
              <p>
                Prove the incredible mix of flavors at the best and recognized
                restaurants.
              </p>
            </Reveal>
          </div>

          <div className={styles.feature}>
            <Reveal width="100%">
              <img src="/assets/icons/pickleball.png" />
              <h4>Pickleball Clinic</h4>
              <p>Enjoy daily Pickleball Clinics led by World Class Pros.</p>
            </Reveal>
          </div>

          <div className={styles.feature}>
            <Reveal width="100%">
              <img src="/assets/icons/hand.png" />
              <h4>Social Labor</h4>
              <p>
                Spread the Pickleball Love to local kids from disadvantaged
                areas
              </p>
            </Reveal>
          </div>

          <div className={styles.feature}>
            <Reveal width="100%">
              <img src="/assets/icons/activities.png" />
              <h4>Guided Activities</h4>
              <p>Explore the culture by visiting iconic places.</p>
            </Reveal>
          </div>

          <div className={styles.feature}>
            <Reveal width="100%">
              <img src="/assets/icons/events.png" />
              <h4>Events and Shows</h4>
              <p>Enjoy a journey full of music, dance and tradition.</p>
            </Reveal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
