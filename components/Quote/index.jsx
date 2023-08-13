import React from "react";
import styles from './quote.module.css'

export const Quote = ({titleLine1, titleLine2, content}) =>{
    return(
        
        <table className={styles.quote}>
          <tr>
          <td className={styles.quoteTitle}>{titleLine1} <br/>{titleLine2}</td>
          <td className={styles.quoteContent}>
            <p>{content}</p>
            
          </td>
          </tr>
        </table>
    )
}