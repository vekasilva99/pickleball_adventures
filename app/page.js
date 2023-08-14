"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Quote } from "@/components/Quote";
import { Title } from "@/components/Title";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.row}>
        <div className={styles.videoContainer}>
          <video autoPlay muted playsInline loop className={styles.videoHome}>
            <source src="/assets/videos/2.mp4" type="video/mp4"></source>
          </video>
          <img src="/assets/icons/arrow-45.png"></img>
        </div>
        <div className={styles.content}>
          <Title large={true} text={'Pickleball Adventures'} />
          <button className={styles.button} onClick={()=>{router.push("/destinations");}}>
            <h2>Book Now</h2>
            <img src="/assets/icons/arrow-45.png" />
          </button>
        </div>
      </div>
      <div className={styles.page}>
      <Title  normal={true} text={'Experience something new'} opacity={true} marginTop={'10vh'} marginBottom={'2vh'}/>
     
        <p>
          Experience a boutique adventure where you'll discover a unique,
          internationally acclaimed <br />
          destination filled with culture and history.
        </p>
        <div className={styles.destinationsContainer}>
          <div className={styles.destinationCard}>
            <img src="/assets/images/Peru1.jpg" />
            <div className={styles.whiteGradient}></div>
            <div className={styles.cardInfo}>
              <h2>Peru</h2>
              <button onClick={()=>{router.push("/destinations/peru");}}>Book Now</button>
            </div>
          </div>
          <div className={styles.destinationCard}>
            <img src="/assets/images/ecuador.jpg" />
            <div className={styles.whiteGradientNotActive}></div>
            <div className={styles.cardInfo}>
              <h2>Ecuador</h2>
              <button className={styles.buttonComingSoon}>Coming Soon</button>
            </div>
          </div>
          <div className={styles.destinationCard}>
            <img src="/assets/images/colombia.jpeg" />
            <div className={styles.whiteGradientNotActive}></div>
            <div className={styles.cardInfo}>
              <h2>Colombia</h2>
              <button className={styles.buttonComingSoon}>Coming Soon</button>
            </div>
          </div>
        </div>

        <button className={styles.secondaryButton} onClick={()=>{router.push("/destinations");}}>See More</button>

       <Quote titleLine1={'Experience'} titleLine2={'something new'} content={`Experience a boutique adventure where you'll discover a unique, internationally acclaimed destination filled with culture and history. ​ You'll also have the opportunity to make a difference in the lives of underprivileged children and youth, providing them with opportunities and a better future through sports. All while sharing your passion for the game of pickleball. Explore charming places guided by local people, with guaranteed safety. Join us and get ready for an adventure that will surpass your expectations. Be one of the chosen ones who leaves a lasting impact on the lives of others!`}/>
       <Title  marginLeft={'8vw'} normal={true} text={'What’s Included'} opacity={true} marginTop={'10vh'} marginBottom={'2vh'} left={true}/>
     
      <div className={styles.featuresContainer}>
  
        <div className={styles.feature}>
          <img src="/assets/icons/lodging.png"/>
          <h4>Lodging</h4>
          <p>Spend your stay in one of the most exclusive hotels.</p>
        </div>
        <div className={styles.feature}>
          <img src="/assets/icons/restaurant.png"/>
          <h4>Restaurants</h4>
          <p>Prove the incredible mix of flavors at the best and recognized restaurants.</p>
        </div>
        <div className={styles.feature}>
          <img src="/assets/icons/pickleball.png"/>
          <h4>Pickleball Clinic</h4>
          <p>Enjoy daily Pickleball Clinics led by World Class Pros.</p>
        </div>
        <div className={styles.feature}>
          <img src="/assets/icons/hand.png"/>
          <h4>Social Labor</h4>
          <p>Spread the Pickleball Love to local kids from disadvantaged areas</p>
        </div>
        <div className={styles.feature}>
          <img src="/assets/icons/activities.png"/>
          <h4>Guided Activities</h4>
          <p>Explore the culture by visiting iconic places.</p>
        </div>
        <div className={styles.feature}>
          <img src="/assets/icons/events.png"/>
          <h4>Events and Shows</h4>
          <p>Enjoy a journey full of music, dance and tradition.</p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}
