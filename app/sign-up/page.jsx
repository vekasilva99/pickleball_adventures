import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Quote } from "@/components/Quote";
import { Title } from "@/components/Title";

export default function SignUp() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.row}>
        <div className={styles.content}>
          <Title
            normal={true}
            text={"This is where the incredible experiences start."}
            marginBottom={"10vh"}
            left={true}
          />
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
          <div className={styles.input}>
          <h3>Gender</h3>
            <input  placeholder=" " />
            <h2>Gender</h2>
          </div>
          <div className={styles.input}>
          <h3>Date of Birth</h3>
          <div className={styles.inputGroup}>
          <div className={`${styles.input} ${styles.inputMonth}`}>
            <input  placeholder=" " />
            <h2>Month</h2>
            </div>
            <div className={`${styles.input} ${styles.inputMonth}`}>
            <input  placeholder=" " />
            <h2>Day</h2>
            </div>
            <div className={`${styles.input} ${styles.inputMonth}`}>
            <input  placeholder=" " />
            <h2>Year</h2>
            </div>
            </div>
          </div>
          <div className={styles.input}>
          <h3>Citizenship</h3>
            <input  placeholder=" " />
            <h2>Citizenship</h2>
          </div>
          <div className={styles.input}>
          <h3>State/province of residency</h3>
            <input  placeholder=" " />
            <h2>State/province of residency</h2>
          </div>
          <div className={styles.input}>
          <h3>Email</h3>
            <input  placeholder=" " />
            <h2>Email</h2>
          </div>
          <div className={styles.input}>
          <h3>Phone</h3>
            <input placeholder=" " />
            <h2>Phone</h2>
          </div>
          <div className={styles.input}>
          <h3>Password</h3>
            <input type="password" placeholder=" " />
            <h2>Password</h2>
          </div>
          <div className={styles.input}>
          <h3>Confirm Password</h3>
            <input type="password" placeholder=" " />
            <h2>Confirm Password</h2>
          </div>
       
          </div>
          <button>
            <h2>Sign Up</h2>
          </button>
          <div className={styles.signUp}>
            <h2>Have An Account?</h2>
            <button>Sign In Now!</button>
          </div>
        </div>
        <div className={styles.videoContainer}>
          <video autoPlay muted playsInline loop className={styles.videoHome}>
            <source src="/assets/videos/2.mp4" type="video/mp4"></source>
          </video>
          <img src="/assets/icons/arrow-45.png"></img>
        </div>
      </div>
    </div>
  );
}
