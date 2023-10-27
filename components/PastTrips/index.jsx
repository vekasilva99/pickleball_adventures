import React, {useEffect,useState} from "react";
import styles from './pastTrips.module.css'
import { Title } from "../Title";
import moment from "moment";
import { Reveal } from "../Reveal";

const images = [
  "../assets/images/peru/23.jpeg",
  "../assets/images/peru/10.jpg",
  "../assets/images/pickleball.jpg",
  "../assets/images/Peru1.jpg",
];

export const PastTrips = ({data}) =>{

  


    return(
        <Reveal width="100%">
      <div className={styles.destinationsContainer}>
      <div className={styles.medium}>
        <Title
          extraSmall={true}
          text={data.length==1 ? `You have ${data.length} past trip` :`You have ${data.length} past trips`}
          left={true}
          marginBottom={"5vh"}
        />
      </div>
      {data.map((reservation)=>{
    return <div className={styles.destinationCard}>
    <img src="/assets/images/Peru1.jpg" />
    <div className={styles.whiteGradient}></div>
    <div className={styles.cardInfo}>
      <div>
        <h2>{reservation.tripId.trip.name}</h2>
        <h3>{moment(reservation.tripId.date).format('MMM DD')} - {moment(reservation.tripId.date).add(reservation.tripId.trip.nights,'days').format('MMM DD')}, {moment(reservation.tripId.date).format('YYYY')}</h3>
      </div>
      <h4>
        Points earned: <strong>550</strong>
      </h4>
    </div>
  </div>
      })}
  

      <div className={styles.medium}>
        <p>
          If you don't see all your trips, email support@gmail.com for
          assistance.
        </p>
      </div>
    </div>
    </Reveal>
    )
}