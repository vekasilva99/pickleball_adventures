import Image from "next/image";
import styles from "./contact.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ContactUs() {
  return (
    <div className={styles.main}>
      <Navbar />
     <Header whiteBackground={true} titleLine1="Contact" titleLine2="Us" background="/assets/images/pickleball.png" backgroundTop="/assets/images/pickleball.jpg"/>
 
     <div className={styles.pageGradient}>
     <div className={styles.inputContainer}>
          <div className={styles.input}>
            <h3>First Name</h3>
            <input placeholder=" " />
            <h2>First Name</h2>
          </div>
          <div className={styles.input}>
          <h3>Last Name</h3>
            <input  placeholder=" " />
            <h2>Last Name</h2>
          </div>
          <div className={`${styles.input} ${styles.inputLarge}`}>
          <h3>Email</h3>
            <input  placeholder=" " />
            <h2>Email</h2>
          </div>

          <div className={`${styles.input} ${styles.inputLarge}`}>
          <h3>Message</h3>
            <textarea   placeholder=" " />
            <h2>Message</h2>
            
          </div>
          <button>
            <h2>Send</h2>
          </button>
      
      
       
          </div>
      <Footer/>
     </div>
   
    </div>
  );
}
