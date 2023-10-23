import React, {useEffect,useState} from "react";
import styles from './feature.module.css'
import { Reveal } from "@/components/Reveal";
import LazyLoad from 'react-lazy-load';



export const Feature = ({item}) =>{
    return(
        
      <div className={styles.feature}>
      <Reveal width="100%">
      <LazyLoad offsetVertical={300} >
        <img src={item.imageUrl} />
        </LazyLoad>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </Reveal>
    </div>

    )
}