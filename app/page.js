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
import { DestinationCard } from "@/components/DestinationCard";
import { Feature } from "@/components/Feature";

const destinations=[
  {name:"Peru",
  imageUrl:"/assets/images/Peru1.jpg",
  id:1,
  active:true
},
{name:"Ecuador",
imageUrl:"/assets/images/ecuador.jpg",
id:2,
active:false
},
{name:"Colombia",
imageUrl:"/assets/images/colombia.jpeg",
id:2,
active:false
},

]

const features=[
  {
  title:'Lodging',
  description:'Spend your stay in one of the most exclusive hotels.',
  imageUrl:'/assets/icons/lodging.png'
},
{
  title:'Restaurants',
  description:'Prove the incredible mix of flavors at the best and recognized restaurants.',
  imageUrl:'/assets/icons/restaurant.png'
},
{
  title:'Pickleball Clinic',
  description:'Enjoy daily Pickleball Clinics led by World Class Pros.',
  imageUrl:'/assets/icons/pickleball.png'
},
{
  title:'Social Labor',
  description:'Spread the Pickleball Love to local kids from disadvantaged areas.',
  imageUrl:'/assets/icons/hand.png'
},
{
  title:'Guided Activities',
  description:'Explore the culture by visiting iconic places.',
  imageUrl:'/assets/icons/activities.png'
},
{
  title:'Events and Shows',
  description:'Enjoy a journey full of music, dance and tradition.',
  imageUrl:'/assets/icons/events.png'
},

]


export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <Navbar />
      <Reveal width="100%">
        <div className={styles.row}>
          <div className={styles.videoContainer}>
          <LazyLoad offsetVertical={200} className="lazyload-video">
            <ReactPlayer
              url="/assets/videos/VideoPickleball3.mp4"
              playing
              muted
              loop
              width="100%"
              height="100%"
              preload={true}
              playsinline={true}
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
         {destinations.map((destination)=>{
          return <DestinationCard item={destination}/>
         })}
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
          {features.map((feature)=>{
            return <Feature item={feature}/>
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
