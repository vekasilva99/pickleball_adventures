"use client";
import Image from "next/image";
import React from "react";
import styles from "./destinations.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import LazyLoad from 'react-lazy-load';
import { DestinationCardLarge } from "@/components/DestinationCardLarge";
import moment from "moment";

const destinations=[
  {
    _id: "64e7cf1c7053a6d4c4626cf4",
    name: "Week on Lima",
    city: "Lima",
    country: "Peru",
    imageUrl:"/assets/images/Peru1.webp",
    nights: 7,
    active: true,
    images: [
      "../assets/images/peru/28.webp",
      "../assets/images/peru/1.webp",
      "../assets/images/peru/13.webp",
      "../assets/images/peru/20.webp",
      "../assets/images/peru/27.webp",
      "../assets/images/peru/35.webp"
    ],
    
    dates:[
      {
        _id:"64e7d0b93093bbf9d66f1618",
        date: "2023-11-08T04:00:00.000Z",
        priceSingle: 5500,
        priceDouble: 5000,
        maxGuests: 100,
        numberGuests: 32,
        active: true,
      }
    ]
  },
  {
    _id: "64e7cf1c7053a6d4c4626cf4",
    name: "Week on Quito",
    city: "Quito",
    country: "Ecuador",
    imageUrl:"/assets/images/ecuador.webp",
    nights: 7,
    active: false,
    images: [
      "../assets/images/peru/28.webp",
      "../assets/images/peru/1.webp",
      "../assets/images/peru/13.webp",
      "../assets/images/peru/20.webp",
      "../assets/images/peru/27.webp",
      "../assets/images/peru/35.webp"
    ],
  
  },
  {
    _id: "64e7cf1c7053a6d4c4626cf4",
    name: "Week on Cartagena",
    city: "Cartagena",
    country: "Colombia",
    imageUrl:"/assets/images/colombia.webp",
    nights: 7,
    active: false,
    images: [
      "../assets/images/peru/28.webp",
      "../assets/images/peru/1.webp",
      "../assets/images/peru/13.webp",
      "../assets/images/peru/20.webp",
      "../assets/images/peru/27.webp",
      "../assets/images/peru/35.webp"
    ],
  
  },

  {
    _id: "64e7cf1c7053a6d4c4626cf4",
    name: "Week on Caracas",
    city: "Caracas",
    country: "Venezuela",
    imageUrl:"/assets/images/venezuela.webp",
    nights: 7,
    active: false,
    images: [
      "../assets/images/peru/28.webp",
      "../assets/images/peru/1.webp",
      "../assets/images/peru/13.webp",
      "../assets/images/peru/20.webp",
      "../assets/images/peru/27.webp",
      "../assets/images/peru/35.webp"
    ],
  
  },

]
export default function Destinations() {
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const [selected, setSelected] = React.useState(destinations[0]);
  const toggle = (item) => {
    console.log('iteeeem',item)
    if(item){
      console.log(item)
      setSelected(destinations[item])
    }
    
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
        <LazyLoad offsetVertical={200} >
          <img
            className={styles.close}
            src="/assets/icons/close-yellow.webp"
            onClick={() => {
              toggle();
            }}
          />
          </LazyLoad>
          <div className={styles.modalContent}>
            <h3>{selected.nights} Nights</h3>
            <h2>{selected.city}, {selected.country}</h2>
            <button
              className={styles.button}
              onClick={() => {
                router.push("/destinations/peru");
              }}
            >
              <h2>EXPLORE THIS ITINERARY</h2>
              <LazyLoad offsetVertical={200} >
              <img src="/assets/icons/arrow-45.webp" />
              </LazyLoad>
            </button>
          </div>
          <div className={styles.dateContent}>
            <div className={styles.month}>
              <h4>{moment(selected.dates[0].date).format('MMMM')} {moment(selected.dates[0].date).format('YYYY')}</h4>
            </div>
            <div className={styles.item}>
              <h5>{moment(selected.dates[0].date).format('dddd')}, {moment(selected.dates[0].date).format('MMMM')} {moment(selected.dates[0].date).format('DD')}, {moment(selected.dates[0].date).format('YYYY')}</h5>
              <h2>${selected.dates[0].priceSingle}</h2>
              <button
                className={styles.button}
                onClick={() => {
                  router.push("/reserve");
                }}
              >
                <h2>SELECT DATE</h2>
                <LazyLoad offsetVertical={200} >
                <img src="/assets/icons/arrow-45.webp" />
                </LazyLoad>
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
          background="/assets/images/beach.webp"
          whiteBackground={true}
          backgroundTop="/assets/images/beach.webp"
        />
        <div className={styles.page}>
          <div className={styles.destinationsContainer}>
            {destinations.map((destination,index)=>{
              return    <DestinationCardLarge item={destination} index={index}toggle={(item)=>{toggle(item)}}/>
            })}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
