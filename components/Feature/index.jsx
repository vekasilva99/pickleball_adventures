import React, {useEffect,useState} from "react";
import styles from './feature.module.css'
import { Reveal } from "@/components/Reveal";



export const Feature = ({item}) =>{
    return(
        
      <div className={styles.feature}>
      <Reveal width="100%">
        <img src={item.imageUrl} />
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </Reveal>
    </div>

    )
}