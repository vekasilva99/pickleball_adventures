import React, {useEffect,useState} from "react";
import styles from './destinationCard.module.css'
import { Reveal } from "@/components/Reveal";



export const DestinationCard = ({item}) =>{
    return(
        
      <Reveal>
      <div className={styles.destinationCard}>
      <LazyLoad offsetVertical={300} >
        <img src={item.imageUrl} />
        </LazyLoad>
        <div className={item.active ? styles.whiteGradient : styles.whiteGradientNotActive}></div>
        <div className={styles.cardInfo}>
          <h2>{item.name}</h2>
          <button className={styles.buttonComingSoon} disabled={!item.active}   onClick={() => {
                    router.push("/destinations/peru");
                  }}>{item.active ? "Book Now" : "Coming Soon"}</button>
        </div>
      </div>
    </Reveal>

    )
}