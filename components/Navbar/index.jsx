"use client";
import React,{useEffect,useContext} from "react";
import { useRouter } from 'next/navigation';
import styles from './navbar.module.css'
import { useSession } from "next-auth/react";
import AuthContext from "@/context/AuthContext";
export const Navbar = () =>{
    const { user, setUser } = useContext(AuthContext);
    const {data}=useSession()
   console.log(data)

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);
    const router = useRouter();
    return(
        <>
        <div className={styles.navbar}>
            <div className={styles.rightContainer}>
                <img src="/assets/logo/logo.png"/>
                <img src="/assets/logo/cabieses.png"/>
            </div>
            <div className={styles.leftContainer}>
                <div>
              <button className={styles.navItem} onClick={()=>{router.push("/destinations");}}>Destinations</button>
              <button className={styles.navItem} onClick={()=>{router.push("/about-us");}}>About Us</button>
              <button className={styles.navItem} onClick={()=>{router.push("/cabieses");}}>Foundation</button>
              <button className={styles.navItem} onClick={()=>{router.push("/contact-us");}}>Contact</button>
              </div>
              {user ?  <button className={styles.navItem}>{user.first_name}</button>:
              <button className={styles.navItem} onClick={()=>{router.push("/sign-in");}}>Sign In</button>}
            </div>
        </div>

        <div className={styles.navbarMobile}>
          
              <button className={styles.navItem} onClick={()=>{router.push("/destinations");}}>
{/* <img src="/assets/icons/plane.png"/> */}
<div className={styles.plane}></div>
               <h2>Destinations</h2> 
                
                </button>
              <button className={styles.navItem} onClick={()=>{router.push("/about-us");}}>
              <div className={styles.info}></div>
               <h2>About Us</h2> 
              </button>
              <button className={styles.navItem} onClick={()=>{router.push("/cabieses");}}>
              <div className={styles.foundation}></div>
               <h2>Foundation</h2> 
              </button>
              <button className={styles.navItem} onClick={()=>{router.push("/contact-us");}}>
              <div className={styles.contact}></div>
               <h2>Contact</h2> </button>
           
        </div>
        {user ?  <button className={styles.signInMobile} >{user.first_name}</button>:
        <button className={styles.signInMobile} onClick={()=>{router.push("/sign-in");}}>Sign In</button>}
        </>
    )
}