import React from "react";
import styles from './quote.module.css'
import { Title } from "../Title";

export const Quote = ({titleLine1, titleLine2, content}) =>{
    return(
      <div className={styles.quoteContainer}>
         
        <div className={styles.quote}>
        <img src="/assets/icons/arrow-45.png"></img>
             <Title   large={true} text={titleLine1} left={true} color={'white'}/>
     
          <p>{content}</p>
        </div>
        </div>
     
    )
}