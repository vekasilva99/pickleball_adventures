import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Quote } from "@/components/Quote";
import { Title } from "@/components/Title";

export default function SignIn() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.row}>
       
        <div className={styles.content}>
          <Title normal={true} text={'This is where the incredible experiences start.'} marginBottom={'10vh'} left={true} />
          <div className={styles.input} >
           
         <input placeholder=" "/>
         <h2>Email</h2>
         </div>
         <div className={styles.input} >
           
           <input type="password" placeholder=" "/>
           <h2>Password</h2>
           </div>
<button><h2>Sign In</h2></button>
<div className={styles.signUp}>
  <h2>Don't Have An Account?</h2>
  <button>Sign Up Now!</button>
</div>
        </div>
        <div className={styles.videoContainer}>
          <video autoPlay muted playsInline loop className={styles.videoHome}>
            <source src="assets/videos/2.mp4" type="video/mp4"></source>
          </video>
          <img src="assets/icons/arrow-45.png"></img>
        </div>
      </div>
    
    </div>
  );
}
