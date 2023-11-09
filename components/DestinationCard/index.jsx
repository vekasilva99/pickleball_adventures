import styles from './destinationCard.module.css'
import { Reveal } from "@/components/Reveal";
import LazyLoad from 'react-lazy-load';
import { useRouter } from "next/navigation";



export const DestinationCard = ({item}) =>{
  const router = useRouter();
    return(
        
      <Reveal overflow={'visible'}>
      <div className={styles.destinationCard}>
      <LazyLoad offsetVertical={200} className="lazyload-image2" >
        <img src={item.main_image} />
        </LazyLoad>
        <div className={item.active ? styles.whiteGradient : styles.whiteGradientNotActive}></div>
        <div className={styles.cardInfo}>
          <h2>{item.city}, {item.country}</h2>
          <button className={item.active ? styles.button : styles.buttonComingSoon} disabled={!item.active}   onClick={() => {
                    router.push("/destinations/peru");
                  }}>{item.active ? "Book Now" : "Coming Soon"}</button>
        </div>
      </div>
    </Reveal>

    )
}