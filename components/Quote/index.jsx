import React from "react";
import styles from './quote.module.css'
import { Title } from "../Title";
import { Reveal } from "../Reveal";

export const Quote = ({titleLine1, titleLine2, content}) =>{
    return(
      <Reveal width="100%">
      <div className={styles.quoteContainer}>
         
        <div className={styles.quote}>
        <img src="/assets/icons/arrow-45.png"></img>
             <Title   large={true} text={titleLine1} left={true} color={'white'}/>
     <Reveal width="100%">
          <p>{content}</p>
          </Reveal>
        </div>
        </div>
        </Reveal>
     
    )
}