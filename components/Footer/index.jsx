import styles from './footer.module.css'
import { Reveal } from "../Reveal";
import LazyLoad from 'react-lazy-load';

export const Footer = () =>{
    return(
        <Reveal>
        <div className={styles.footer}>
            <div>
            <h2>Contact</h2>
            <h3>Phone Number</h3>
            <h4>+51 950 657 643</h4>
            <h3>Email</h3>
            <h4>contact@cabiesespickleball.com</h4>
            </div>
            <div>
            <LazyLoad offsetVertical={200} className="lazyload-image" >
                <img src="/assets/icons/instagram.webp"/>
                </LazyLoad>
                <LazyLoad offsetVertical={200} className="lazyload-image" >
                <img src="/assets/icons/facebook.webp"/>
                </LazyLoad>
                <LazyLoad offsetVertical={200} className="lazyload-image" >
                <img src="/assets/icons/email.webp"/>
                </LazyLoad>

            </div>
        
        </div>
        </Reveal>
    )
}