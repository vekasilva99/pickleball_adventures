import React from "react";
import styles from './footer.module.css'

export const Footer = () =>{
    return(
        
        <div className={styles.footer}>
            <div>
            <h2>Contact</h2>
            <h3>Phone Number</h3>
            <h4>+51 950 657 643</h4>
            <h3>Email</h3>
            <h4>contact@cabiesespickleball.com</h4>
            </div>
            <div>
                <img src="assets/icons/instagram.png"/>
                <img src="assets/icons/facebook.png"/>
                <img src="assets/icons/email.png"/>
            </div>
        
        </div>
    )
}