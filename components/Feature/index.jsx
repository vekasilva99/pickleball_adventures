import styles from './feature.module.css'
import { Reveal } from "@/components/Reveal";
import LazyLoad from 'react-lazy-load';



export const Feature = ({item}) =>{
    return(
        
      <div className={styles.feature}>
      <Reveal width="100%">
      <LazyLoad offsetVertical={200} className="lazyload-image">
        <img src={item.imageUrl} />
        </LazyLoad>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </Reveal>
    </div>

    )
}