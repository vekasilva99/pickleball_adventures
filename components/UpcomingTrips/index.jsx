import React, {useEffect,useState} from "react";
import styles from './upcomingTrips.module.css'
import { Title } from "../Title";
import moment from "moment";
import { Reveal } from "../Reveal";

const images = [
  "../assets/images/peru/23.webp",
  "../assets/images/peru/10.webp",
  "../assets/images/pickleball.webp",
  "../assets/images/Peru1.webp",
];

export const UpcomingTrips = ({data}) =>{

  
const getDaysLeft=(date)=>{
return moment(date).diff(moment(new Date()),'days')
}

const getGuests=(rooms)=>{
  let guests=""
  
  for(let i=0;i<rooms.length;i++){
    for(let j=0;j<rooms[i].guests.length;j++){
      if(i != rooms.length-1){
        guests+=rooms[i].guests[j].first_name + " " + rooms[i].guests[j].last_name+", "
 
      }else{
        if(j !=rooms[i].guests.length-1){
          guests+=rooms[i].guests[j].first_name + " " + rooms[i].guests[j].last_name+", "
        }else{
          guests+=rooms[i].guests[j].first_name + " " + rooms[i].guests[j].last_name
        }
      
      }
      
    }
  }
return guests
}

    return(
        
      <div className={styles.destinationsContainer}>
        {data.map((reservation)=>{
return   <Reveal><div className={styles.destinationCard2}>
<div className={styles.reservationInfoContainer}>
  <div className={styles.reservationInfo}>
    <div className={styles.row}>
      <div>
        <h2>Reservation</h2>
        <h1>{reservation._id.toString().substring(0,8)}</h1>
      </div>
      <h4>View more details</h4>
    </div>
    <h3>Guests</h3>
    <h5>{getGuests(reservation.rooms)}</h5>
  </div>
</div>
<div className={styles.reservation}></div>
<div className={styles.overlay}></div>
<div className={styles.reservationTitle}>
  <div className={styles.row}>
    <h3>{reservation.tripId.trip.city}, {reservation.tripId.trip.country} | {moment(reservation.tripId.date).format('MMM DD')} - {moment(reservation.tripId.date).add(reservation.tripId.trip.nights,'days').format('MMM DD')}, {moment(reservation.tripId.date).format('YYYY')}</h3>
    <div className={styles.daysToGo}>
      <h1>{getDaysLeft(reservation.tripId.date)}</h1>
      <div>
        <h2>Days</h2>
        <h2>to go</h2>
      </div>
    </div>
  </div>
  <h1>Week on Lima</h1>
</div>
</div>
</Reveal> })}
    
    </div>
    )
}