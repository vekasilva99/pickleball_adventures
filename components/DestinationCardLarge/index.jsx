import styles from "./destinationCard.module.css";
import { Reveal } from "@/components/Reveal";
import LazyLoad from "react-lazy-load";
import { useRouter } from "next/navigation";

export const DestinationCardLarge = ({ item, toggle, index }) => {
  const router = useRouter();

  const getNumberDates = (number) => {
    if (number.length == 1) {
      return "View 1 date";
    } else {
      return `View ${number.length} dates`;
    }
  };

  const getSoldOut = () => {
    let soldOut = true;

    for (let i = 0; i < item.dates.length; i++) {
      if (item.dates[i].numberGuests < item.dates[i].maxGuests) {
        soldOut = false;
        break;
      }
    }

    return soldOut;
  };

console.log(item)
  return (
    <Reveal>
      <div className={styles.destinationCard}>
        <LazyLoad offsetVertical={200} className="lazyload-image">
          <img src={item.main_image} />
        </LazyLoad>
        <div
          className={
            item.active && !getSoldOut()
              ? styles.whiteGradient
              : styles.whiteGradientNotActive
          }
        ></div>
        <div className={styles.cardInfo}>
          <h3>{item.nights} Nights</h3>

          <h2>
            {item.city}, {item.name}
          </h2>

          {!item.active && (
            <button className={styles.notActive}>Coming Soon</button>
          )}

          {item.active && getSoldOut() && (
            <button className={styles.notActive}>Sold Out</button>
          )}
        </div>
        {item.active && item.dates.length > 0 && !getSoldOut() && (
          <div className={styles.price}>
            <h1>${item.dates[0].priceSingle}</h1>
            <h2>AVG PER PERSON</h2>
            <button
              onClick={() => {
                toggle(index);
              }}
            >
              {getNumberDates(item.dates)}
            </button>
          </div>
        )}
      </div>
    </Reveal>
  );
};
