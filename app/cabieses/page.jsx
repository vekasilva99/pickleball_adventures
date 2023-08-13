import Image from "next/image";
import styles from "./cabieses.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { Quote } from "@/components/Quote";


export default function Cabieses() {
  return (
    <div className={styles.main}>
      <Navbar />
     <Header titleLine1="Our" titleLine2="Foundation" background="assets/logo/cabieses2.png" backgroundTop="assets/logo/cabieses1.png" whiteBackground={true}/>
 
     <div className={styles.pageGradient}>
   <img src="assets/logo/cabieses.png" />
      <Title normal={true} text={'One ball can change a life, and a life can change the world'} opacity={true} />
      <button className={styles.button}>Donate Now</button>
      <video autoPlay muted playsInline loop className={styles.videoHome}>
            <source src="assets/videos/cabieses.mp4" type="video/mp4"></source>
          </video>
          <Title  normal={true} text={'What is Cabieses Foundation'} opacity={true} marginTop={'10vh'} marginBottom={'2vh'}/>
     
     <p>
     Is a non profit organization where we support children and young people for any social sectors who wish to develop their skills and abilities in sports without exclusion and humanitarian cooperation.
     </p>
     <Quote
          titleLine1={"Origin"}
          content={
            "Al fundar Pickleball Peru e introducir el deporte nos dimos cuenta la ambición de los niños en querer seguir jugando. Nos dimos cuenta la falta de educación deportiva y recursos. El no contar con equipamiento de pickleball no seria un impedimento para poner una sonrisa en estos niños y puedan disfrutar del deporte como todos nosotros. Es así como nace Cabieses Foundation."
          }
        />
        <div className={styles.row}>
          <div className={styles.column1}>
          <Title normal={true} text={'Vision'} opacity={true} />
          <p>To support the development of the greatest number of outstanding young athletes, at national and international level, with the purpose of forming the leaders of the future.</p>
          </div>
          <div className={styles.column2}>
            <img src="assets/images/Peru1.jpg"/>
          </div>
        </div>
        <div className={styles.listContainer}>
        <div className={styles.listContainerTitle}>    
         <Title   large={true} text={'Cabieses Foundation'} opacity={true}  left={true}/>
         <Title   normal={true} text={'MEANS'}   left={true} color={'#FDC316'}/>
    </div>
        <div className={styles.list}>
          <div className={styles.listItem}>Sustainability</div>
          <div className={styles.listItem}>Passion</div>
          <div className={styles.listItem}>Versatility</div>
          <div className={styles.listItem}>Inclusion</div>
          <div className={styles.listItem}>Integration</div>
          <div className={styles.listItem}>Honesty</div>
          <div className={styles.listItem}>Respect</div>
          <div className={styles.listItem}>Improvement</div>
          <div className={styles.listItem}>Discipline</div>
          <div className={styles.listItem}>Solidarity</div>
        </div>

      </div>
      <Footer/>
     </div>
   
    </div>
  );
}
