"use client";
import React from "react";
import styles from "./destinations.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";
import LazyLoad from 'react-lazy-load';
import {DestinationCardLarge} from "@/components/DestinationCardLarge";
import moment from "moment";
import axios from "axios";

// const destinations=[
//   {
//     _id: "64e7cf1c7053a6d4c4626cf4",
//     name: "Week on Lima",
//     city: "Lima",
//     country: "Peru",
//     main_image:"/assets/images/Peru1.webp",
//     nights: 7,
//     active: true,
//     images: [
//       "../assets/images/peru/28.webp",
//       "../assets/images/peru/1.webp",
//       "../assets/images/peru/13.webp",
//       "../assets/images/peru/20.webp",
//       "../assets/images/peru/27.webp",
//       "../assets/images/peru/35.webp"
//     ],
    
//     dates:[
//       {
//         _id:"64e7d0b93093bbf9d66f1618",
//         date: "2023-11-08T04:00:00.000Z",
//         priceSingle: 5500,
//         priceDouble: 5000,
//         maxGuests: 100,
//         numberGuests: 32,
//         active: true,
//       }
//     ]
//   },
//   {
//     _id: "64e7cf1c7053a6d4c4626cf4",
//     name: "Week on Quito",
//     city: "Quito",
//     country: "Ecuador",
//     main_image:"/assets/images/ecuador.webp",
//     nights: 7,
//     active: false,
//     images: [
//       "../assets/images/peru/28.webp",
//       "../assets/images/peru/1.webp",
//       "../assets/images/peru/13.webp",
//       "../assets/images/peru/20.webp",
//       "../assets/images/peru/27.webp",
//       "../assets/images/peru/35.webp"
//     ],
  
//   },
//   {
//     _id: "64e7cf1c7053a6d4c4626cf4",
//     name: "Week on Cartagena",
//     city: "Cartagena",
//     country: "Colombia",
//     main_image:"/assets/images/colombia.webp",
//     nights: 7,
//     active: false,
//     images: [
//       "../assets/images/peru/28.webp",
//       "../assets/images/peru/1.webp",
//       "../assets/images/peru/13.webp",
//       "../assets/images/peru/20.webp",
//       "../assets/images/peru/27.webp",
//       "../assets/images/peru/35.webp"
//     ],
  
//   },

//   {
//     _id: "64e7cf1c7053a6d4c4626cf4",
//     name: "Week on Caracas",
//     city: "Caracas",
//     country: "Venezuela",
//     main_image:"/assets/images/venezuela.webp",
//     nights: 7,
//     active: false,
//     images: [
//       "../assets/images/peru/28.webp",
//       "../assets/images/peru/1.webp",
//       "../assets/images/peru/13.webp",
//       "../assets/images/peru/20.webp",
//       "../assets/images/peru/27.webp",
//       "../assets/images/peru/35.webp"
//     ],
  
//   },

// ]
export default function Destinations() {
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const [destinations,setDestinations]=React.useState([])
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
console.log('jhjgfhjk',destinations)
  const groupDatesByMonth = (dates) => {
    return dates.reduce((groupedDates, date) => {
      const month = new Date(date.date).toLocaleString('default', { month: 'long', year: 'numeric' });
      if (!groupedDates[month]) {
        groupedDates[month] = [];
      }
      groupedDates[month].push(date);
      console.log(groupedDates)
      return groupedDates;
    }, {});
  };
 
  

  React.useEffect(() => {
    getClass();
  }, [showModal]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.WEBAPP_URL}/api/trips`);
        const destinations = response.data.trips;
        console.log('desss',destinations)
        setDestinations(destinations)
        setSelected(destinations[0])
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchData();
  }, []);
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
            <h3>{selected?.nights} Nights</h3>
            <h2>{selected?.city}, {selected?.country}</h2>
            <button
              className={styles.button}
              onClick={() => {
                router.push(`/destinations/${selected?._id}`);
              }}
            >
              <h2>EXPLORE THIS ITINERARY</h2>
              <LazyLoad offsetVertical={200} >
              <img src="/assets/icons/arrow-45.webp" />
              </LazyLoad>
            </button>
          </div>
          {selected?.dates.length > 0 &&
          <div className={styles.dateContent}>
            {Object.entries(groupDatesByMonth(selected.dates)).map(([month,dates])=>{
            return <>
            <div className={styles.month}>
              <h4>{month}</h4>
            </div>
            {dates.map((date)=>{
              return    <div className={styles.item}>
              <h5>{moment(date.date).format('dddd')}, {moment(date.date).format('MMMM')} {moment(date.date).format('DD')}, {moment(date.date).format('YYYY')}</h5>
              <h2>${date.priceSingle}</h2>
              <button
                className={styles.button}
                onClick={() => {
                  router.push(`/reserve/${date._id}`);
                }}
              >
                <h2>SELECT DATE</h2>
                <LazyLoad offsetVertical={200} >
                <img src="/assets/icons/arrow-45.webp" />
                </LazyLoad>
              </button>
            </div>
            })}
         
            </>})}
          </div>}
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


