"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import styles from './navbar.module.css'

export const Navbar = () =>{
    const router = useRouter();
    return(
        <>
        <div className={styles.navbar}>
            <div className={styles.rightContainer}>
                <img src="assets/logo/logo.png"/>
                <img src="assets/logo/cabieses.png"/>
            </div>
            <div className={styles.leftContainer}>
                <div>
              <button className={styles.navItem} onClick={()=>{router.push("/destinations");}}>Destinations</button>
              <button className={styles.navItem} onClick={()=>{router.push("/about-us");}}>About Us</button>
              <button className={styles.navItem} onClick={()=>{router.push("/cabieses");}}>Foundation</button>
              <button className={styles.navItem} onClick={()=>{router.push("/contact-us");}}>Contact</button>
              </div>
              <button className={styles.navItem} onClick={()=>{router.push("/sign-in");}}>Sign In</button>
            </div>
        </div>

        <div className={styles.navbarMobile}>
          
              <button className={styles.navItem} onClick={()=>{router.push("/destinations");}}>
<img src="assets/icons/lodging.png"/>
               <h2>Destinations</h2> 
                
                </button>
              <button className={styles.navItem} onClick={()=>{router.push("/about-us");}}>
              <img src="assets/icons/lodging.png"/>
               <h2>About Us</h2> 
              </button>
              <button className={styles.navItem} onClick={()=>{router.push("/foundation");}}>
              <img src="assets/icons/lodging.png"/>
               <h2>Foundation</h2> 
              </button>
              <button className={styles.navItem} onClick={()=>{router.push("/contact-us");}}><img src="assets/icons/lodging.png"/>
               <h2>Contact</h2> </button>
           
        </div>
        <button className={styles.signInMobile} onClick={()=>{router.push("/sign-in");}}>Sign In</button>
        </>
    )
}