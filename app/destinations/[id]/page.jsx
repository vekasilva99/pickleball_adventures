"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./destinations.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { Events } from "@/components/Events";
import { Slider } from "@/components/HotelSlider";
import { useRouter } from 'next/navigation';
const images = [
  "../assets/images/peru/28.jpeg",
  "../assets/images/peru/1.jpg",
  "../assets/images/peru/13.jpg",
  "../assets/images/peru/20.jpg",
  "../assets/images/peru/27.jpg",
  "../assets/images/peru/35.jpeg",
];

const images2 = [
  "../assets/images/peru/7.jpg",
  "../assets/images/peru/5.jpg",
  "../assets/images/peru/6.jpg",
  "../assets/images/peru/8.jpg",
];

const restaurants = [
  {
    id: 0,
    name: "Maido Restaurant",
    content:
      "Contemporary high-end restaurant offering Peruvian cuisine with a Japanese touch. Winner of first place in the Summum 2022 Awards in the category of BestRestaurants in Peru.",
    images: [
      "../assets/images/peru/2.jpg",
      "../assets/images/peru/18.jpg",
      "../assets/images/peru/9.jpg",
    ],
  },

  {
    id: 3,
    name: "Huaca Pucllana Restaurant",
    content:
      "Refined restaurant with elegant Peruvian dishes and views of a pre-Inca stepped pyramid. It offers Peruvian cuisine, with its rich variety of products, such as sea fish, seafood, or the immense variety of vegetables, with all colors, textures and flavors.",
    images: [
      "../assets/images/beach.jpg",
      "../assets/images/foundation.jpg",
      "../assets/images/pickleball.jpg",
    ],
  },


  {
    id: 5,
    name: "Cala Restaurant",
    content:
      "Lounge restaurant of contemporary Peruvian food with marine inspiration with one of the most beautiful views of Lima that brings together tradition and vanguard with notable references to coastal cuisine.",
    images: [
      "../assets/images/beach.jpg",
      "../assets/images/foundation.jpg",
      "../assets/images/pickleball.jpg",
    ],
  },

  {
    id: 6,
    name: "Rosa Nautica Restaurant",
    content:
      "Restaurant internationally recognized for offering a unique dining experience. Specialists in seafood cuisine, original drinks and signature recipes. Winner of awards such as “Quality Peru Award”, “World Leader Business Enterprise”, “Customer Service Quality Program”and associated with the Chaine des Rotisseurs.",
    images: [
      "../assets/images/beach.jpg",
      "../assets/images/foundation.jpg",
      "../assets/images/pickleball.jpg",
    ],
  },


  {
    id: 8,
    name: "Fauna Restaurant",
    content:
      "Restaurant recognized as the second restaurant with the Best Ambience of Peru, top 5 among new restaurants and cuisines of the world and as one of the 20 best restaurants in Peru in the Summum 2022 awards, with a rural proposal of the creators of Carnal Prime Steakhouse.",
    images: [
      "../assets/images/beach.jpg",
      "../assets/images/foundation.jpg",
      "../assets/images/pickleball.jpg",
    ],
  },

];

const activities = [
  {
    id: 0,
    name: "Urban Kitchen",
    content:
      "Uninhibited restaurant that rescues the freshest seasonal products of our Peruvian sea. The restaurant seeks to be a fusion of Peruvian cevichería, with bridges to the four cardinal points, and references to other cuisines of the world such as gyozas, tacos and curries. Duration: 2 hours and a half",
    images: [
      "../assets/images/peru/11.jpg",
      "../assets/images/peru/33.jpg",
      "../assets/images/peru/32.jpg",
    ],
  },
  {
    id: 1,
    name: "Huaca Pucllana Site Museum",
    content:
      "Get to know our pre-Hispanic past visiting the Huaca Pucllana, belonging to the Lima culture. It is the most visited huaca in the city. It is an archaeological site dating back to 700 A.D. from the period of regional developments, located in the district of Miraflores. The site museum of Huaca Pucllana was inaugurated in 1984. During your visit to this archaeological complex, you can learn more about the ancestral customs of the Lima, Ychsma and Wari cultures, since they occupied Huaca Pucllana in different periods.",
    images: [
      "../assets/images/peru/4.jpg",
      "../assets/images/peru/27.jpg",
      "../assets/images/peru/17.jpg",
    ],
  },
  {
    id: 2,
    name: "Pickleball Clinic",
    content:
      "While you enjoy the various attractions and restaurants we have to offer, we will practice your favorite sport, pickleball, in our beautiful city. This clinic will be led by Hercilio Cabieses, professional Pickleball coach by the International Pickleball Teaching Professional Association (IPTPA), world and Latin American Pickleball ambassador and medalist in the U S Open 2021 tournament. Duration: 1 hour and a half each session",
    images: [
      "../assets/images/peru/21.jpg",
      "../assets/images/pickleball.jpg",
      "../assets/images/peru/25.jpg",
    ],
  },
  {
    id: 3,
    name: "Pachacamac Museum",
    content:
      "Most important archaeological sanctuary of the central coast. It is organized thematically showing the entire cultural sequence of the Pachacamac Sanctuary, from around 200 A.D. to the establishment of the Incas in 1470",
    images: [
      "../assets/images/peru/14.jpeg",
      "../assets/images/peru/1.jpg",
      "../assets/images/peru/24.jpg",
    ],
  },
  {
    id: 4,
    name: "CITY TOUR",
    content:
      "Get to know the best of Lima through an exciting tour. We will visit the district of Miraflores and the most important attractions of the Historic Center of Lima such as: Plaza San Martín, Plaza mayor, Entrance to the Basilica and/or Convent of Santo Domingo, Desamparados Station. *Bilingual tour guide service included.",
    images: [
      "../assets/images/peru/13.jpg",
      "../assets/images/peru/26.jpg",
      "../assets/images/peru/35.jpeg",
    ],
  },
];

const events=[
  {id:0},
  {id:0}
]
export default function Destination() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0]);

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 4000;
  const nextSlide = () => {
    let slide = images[0];
    images.shift();
    images.push(slide);
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    let slide = images[images.length - 1];
    images.pop();
    images.unshift(slide);
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    console.log("prev");
  };

  // function auto() {
  //   slideInterval = setInterval(nextSlide, intervalTime);
  // }


  useEffect(() => {
    setCurrentSlide(0);
  }, []);


  // useEffect(() => {
  //   if (autoScroll) {
  //     auto();
  //   }
  //   return () => clearInterval(slideInterval);
  // }, [currentSlide]);



  const selected = (id) => {
    if (id == currentRestaurant.id) {
      return styles.selected;
    } else {
      return "";
    }
  };
  return (
    <>
      <div className={styles.main}>
        <Navbar />
        <div className={styles.header}>
          <div className={styles.row}>
            <div className={styles.column}>
              <button className={styles.back}>Go Back</button>
              <div className={styles.infoContainer}>
                <div className={styles.info}>
                  <div className={styles.totalDays}>
                    <div className={styles.days}>
                      <div className={styles.day}>
                        <img src="../assets/icons/moon.png" />
                      </div>
                      <div className={styles.day}>
                        <img src="../assets/icons/sun.png" />
                      </div>
                    </div>
                    <h3>7 nights/8 days</h3>
                  </div>
                  <h3>$5,500</h3>
                </div>
                <Title
                  small={true}
                  text={"September 3, 2023"}
                  opacity={true}
                  marginTop={"2vh"}
                  left={true}
                />
                <button className={styles.button} onClick={()=>{router.push("/reserve");}}>
                  <h2>Book Now</h2>
                  <img src="../assets/icons/arrow-45.png" />
                </button>
              </div>
              <Title
                large={true}
                text={"Week on Lima"}
                opacity={true}
                marginBottom={"2vh"}
                left={true}
                italic={true}
              />
            </div>
            <div className={styles.column}>
              <div className={styles.imageContainer}>
                {images.map((image, index) => {
                  return <img src={image} />;
                })}
              </div>

              <div className={`${styles.days} ${styles.absolute}`}>
                <div
                  className={styles.day}
                  onClick={() => {
                    prevSlide();
                  }}
                >
                  <img src="../assets/icons/arrow-left.png" />
                </div>
                <div
                  className={styles.day}
                  onClick={() => {
                    nextSlide();
                  }}
                >
                  <img src="../assets/icons/arrow-right.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.page}>
          <div className={styles.row}>
            <div className={styles.column}>
              <h4 className={styles.type}>Lodging</h4>
              <Title
                small={true}
                text={"Hotel Country Club"}
                marginBottom={"2vh"}
                left={true}
                bold={true}
              />
              <p>
                Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural
                Monument, the Country Club Lima Hotel holds more than 300 works
                of art provided by the Pedro de Osma Museum. It is located in
                the prestigious residential area of San Isidro in Lima.
             
              </p>
            
            </div>
            <div className={styles.column}>
              <div className={styles.imageContainer2}>
              <Slider images={images2}/>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <h4 className={styles.type}>Restaurant</h4>
              <Title
                normal={true}
                text={currentRestaurant.name}
                marginBottom={"2vh"}
                left={true}
                bold={true}
              />
              <h2>{currentRestaurant.content}</h2>
              <div className={styles.imageContainer3}>
                <img src={currentRestaurant.images[0]} />
                <img src={currentRestaurant.images[1]} />
                <img src={currentRestaurant.images[2]} />
              </div>
            </div>
            <div className={`${styles.column} ${styles.border}`}>
              {restaurants.map((restaurant) => {
                return (
                  <div
                    className={`${styles.item} ${selected(restaurant.id)}`}
                    onClick={() => {
                      setCurrentRestaurant(restaurant);
                    }}
                  >
                    <h4 className={styles.type}>Restaurant</h4>
                    <Title
                      small={true}
                      text={restaurant.name}
                      marginBottom={"2vh"}
                      left={true}
                      bold={true}
                    />
                    <p>{restaurant.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {activities.map((activity) => {
            return (
              <div className={`${styles.page} ${styles.center}`}>
                <Title
                  small={true}
                  text={activity.name}
                  marginBottom={"2vh"}
                  bold={true}
                />
                <p>{activity.content}</p>
                <div className={styles.imageContainer4}>
                  {activity.images.map((image) => {
                    return <img src={image} />;
                  })}
                </div>
              </div>
            );
          })}
 <div className={`${styles.rowComponent}`}>

<Events events={events}/>


 </div>

        </div>

        <Footer />
      </div>
    </>
  );
}
