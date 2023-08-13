import React from "react";
import styles from './header.module.css'

export const Header = ({titleLine1,titleLine2,background,backgroundTop,whiteBackground,yellowBackground}) =>{
    return(
        
        <div className={styles.header}>
            {whiteBackground &&
            <div className={styles.whiteGradient}></div>}
                 {yellowBackground &&
            <div className={styles.yellowGradient}></div>}
      <img src={background} className={styles.background}/>
      <div className={styles.backgroundTopContainer}>
      <img src={backgroundTop} className={styles.backgroundTop}/>
      <div className={styles.title}>
      <h2>{titleLine1}</h2>
      <h3>{titleLine2}</h3>
      </div>
      </div>
     </div>
    )
}