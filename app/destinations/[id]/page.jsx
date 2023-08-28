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
  {image: "../assets/images/peru/hotel/16.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/17.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/21.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/34.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/1.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/2.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/3.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/4.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/5.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/6.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/7.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/8.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/9.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/10.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/11.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/12.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/13.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/14.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/15.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/18.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/19.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/20.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/22.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/23.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/24.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/25.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/26.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/27.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/28.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/29.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/30.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/31.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/32.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
  {image: "../assets/images/peru/hotel/33.jpg",title1:'Discover',title2:'Hotel Country Club',content:' Five-Star Hotel Built in 1927 and stated as a Peruvian Cultural Monument, the Country Club Lima Hotel holds more than 300 works of art provided by the Pedro de Osma Museum. It is located in the prestigious residential area of San Isidro in Lima.'},
];
const images3 = [
  {image: "../assets/images/peru/hotel/31.jpg",title1:'Discover',title2:'Our Fitness Center',content:'Exercising and playing a sport is already a necessity and responds to a lifestyle. Release your energy in our recently remodeled gym, after an afternoon of walking or work.'},
  {image: "../assets/images/peru/hotel/19.jpg",title1:'Discover',title2:'Our Fitness Center',content:'Exercising and playing a sport is already a necessity and responds to a lifestyle. Release your energy in our recently remodeled gym, after an afternoon of walking or work.'},
  {image: "../assets/images/peru/hotel/18.jpg",title1:'Discover',title2:'Our Fitness Center',content:'Exercising and playing a sport is already a necessity and responds to a lifestyle. Release your energy in our recently remodeled gym, after an afternoon of walking or work.'},
];

const images4 = [
  {image: "../assets/images/peru/hotel/35.jpg",title1:'Yaku',title2:'Spa',content:'Take a necessary break to let the energy of the water wash away your stress at the Yaku Spa. Hot stone massages, relaxation, deep tissue, are some of the treatments offered, as well as hydrotherapies, wraps, exfoliations, facials and hairdressing.'},
];

const images5 = [
  {image: "../assets/images/peru/hotel/36.jpg",title1:'Discover',title2:'La Panadería del Country',content:'With a varied menu of top quality artisan products, La Panadería del Country offers pastries, sandwiches, salads, pizzas, pastas, desserts and more.'},
  {image: "../assets/images/peru/hotel/37.jpg",title1:'Discover',title2:'Perroquet',content:'Its menu is characterized by a proposal of authentic Peruvian food and the best of international cuisine. Enjoy breakfast, lunch, dinner and meetings for any occasion.'},
  {image: "../assets/images/peru/hotel/4.jpg",title1:'Discover',title2:'Bar Inglés',content:'The English Bar is a classic of the Lima nightlife. Its dim lighting and soft music make it a perfect setting for intimate meetings and conversations, accompanied by one of the most famous Pisco Sours in the capital.'},
  {image: "../assets/images/peru/hotel/38.jpg",title1:'Discover',title2:'Vitrales',content:'The Vitrales room is an ideal place to have tea under the colorful light of its stained glass ceiling, and the seductive view of the Gardens of the Country Club Lima Hotel.'},
];

const images6 = [
  {image: "../assets/images/peru/hotel/40.jpg",title1:'Discover',title2:'Art',content:'The Pedro de Osma museum has donated 300 pieces of viceregal art to the Country Club Lima Hotel, enhancing the experience of each of its halls and rooms. Its gold leaf frames, the careful carving work, and the history contained in its large canvases, permeate the environment with a spirit that speaks of a unique and unmistakably Peruvian history.'},
  {image: "../assets/images/peru/hotel/13.jpg",title1:'Discover',title2:'Our Pool',content:'Enjoy a moment of incomparable relaxation in the water and accompany it with the best of our cocktails.'},
  {image: "../assets/images/peru/hotel/39.jpg",title1:'Enjoy',title2:'Golf',content:'We have an agreement with the Lima Golf Club, an exclusive private club a few steps from the hotel that allows hotel guests to use its facilities and enjoy a few hours of golf.'},
];




const restaurants = [
  {
    id: 0,
    name: "Maido Restaurant",
    content:
      "Contemporary high-end restaurant offering Peruvian cuisine with a Japanese touch. Winner of first place in the Summum 2022 Awards in the category of BestRestaurants in Peru.",
    images: [
      "../assets/images/peru/Maido/M5.jpg",
      "../assets/images/peru/Maido/M6.jpg",
      "../assets/images/peru/Maido/M7.jpg",
    ],
  },

  {
    id: 3,
    name: "Huaca Pucllana Restaurant",
    content:
      "Refined restaurant with elegant Peruvian dishes and views of a pre-Inca stepped pyramid. It offers Peruvian cuisine, with its rich variety of products, such as sea fish, seafood, or the immense variety of vegetables, with all colors, textures and flavors.",
    images: [
      "../assets/images/peru/Huaca/H13.jpg",
      "../assets/images/peru/Huaca/H14.jpg",
      "../assets/images/peru/Huaca/H15.jpg",
    ],
  },


  {
    id: 5,
    name: "Cala Restaurant",
    content:
      "Lounge restaurant of contemporary Peruvian food with marine inspiration with one of the most beautiful views of Lima that brings together tradition and vanguard with notable references to coastal cuisine.",
    images: [
      "../assets/images/peru/Cala/X12.jpg",
      "../assets/images/peru/Cala/X13.jpg",
      "../assets/images/peru/Cala/X14.jpg",
    ],
  },

  {
    id: 6,
    name: "Tanta",
    content:
      "",
    images: [
      "../assets/images/peru/Tanta/X8.jpg",
      "../assets/images/peru/Tanta/X9.jpg",
      "../assets/images/peru/Tanta/X10.jpg",
    ],
  },


  {
    id: 8,
    name: "Panchita",
    content:
      "",
    images: [
      "../assets/images/peru/Panchita/11.jpeg",
      "../assets/images/peru/Panchita/12.jpg",
      "../assets/images/peru/Panchita/13.jpeg",
    ],
  },
  {
    id: 9,
    name: "Domo Saltado",
    content:
      "",
    images: [
      "../assets/images/peru/DomoSaltado/D12.jpg",
      "../assets/images/peru/DomoSaltado/D13.jpg",
      "../assets/images/peru/DomoSaltado/D14.jpg",
    ],
  },
  {
    id: 10,
    name: "La Panka",
    content:
      "",
    images: [
      "../assets/images/peru/LAPANKA/LP8.jpg",
      "../assets/images/peru/LAPANKA/LP9.jpg",
      "../assets/images/peru/LAPANKA/LP10.jpg",
    ],
  },
  {
    id: 11,
    name: "La Mar",
    content:
      "",
    images: [
      "../assets/images/peru/LAMAR/16.jpg",
      "../assets/images/peru/LAMAR/17.jpg",
      "../assets/images/peru/LAMAR/18.jpg",
    ],
  },
  {
    id: 12,
    name: "Astrid & Gaston",
    content:
      "",
    images: [
      "../assets/images/peru/Astrid&Gaston/AG9.jpg",
      "../assets/images/peru/Astrid&Gaston/AG10.jpg",
      "../assets/images/peru/Astrid&Gaston/AG11.jpg",
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
      "../assets/images/peru/UrbanKitchen/11.jpeg",
      "../assets/images/peru/UrbanKitchen/12.jpeg",
      "../assets/images/peru/UrbanKitchen/13.jpeg",
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
  {id:0,name:'DPASO',content:'Enjoy a journey full of flavors, colors, music, dance, tradition and living culture; that harmonize with the Peruvian Paso Horse to create an experience never lived before. This show includes: Buffet Lunch, Typical Dances, Peruvian Paso Horse Show, Horse back riding in the riding school.',images:['../assets/images/peru/Dpaso/D7.jpg','../assets/images/peru/Dpaso/D8.jpg','../assets/images/peru/Dpaso/D9.jpg']},
  {id:1,name:'Clases de cajón',content:'Reconocido a nivel mundial y símbolo de la música criolla, el cajón peruano es un tesoro histórico musical. Declarado como patrimonio cultural del Perú por su  aporte valioso a nuestra cultura. Experimenta la música peruana afrodescendiente en un momento cultural inmersivo.',images:['../assets/images/peru/10.jpg']}
]
export default function Destination() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedOptionHotel, setSelectedOptionHotel] = useState(0);
  const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0]);
  const [currentActivity, setCurrentActivity] = useState(activities[0]);
  const [currentEvent, setCurrentEvent] = useState(activities[0]);
  const [hotelImages,setHotelImages]=useState(images2)

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

  useEffect(() => {
    getImages()
  }, [selectedOptionHotel]);


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

  const selectedEvent = (id) => {
    if (id == currentEvent.id) {
      return styles.selected;
    } else {
      return "";
    }
  };
  const selectedActivity = (id) => {
    if (id == currentActivity.id) {
      return styles.selected;
    } else {
      return "";
    }
  };

  const getOption=(id)=>{
    if(id==selectedOption){
      return `${styles.option} ${styles.selectedOption}`
    }else{
      return `${styles.option}` 
    }
  }

  const getImages=()=>{
    if(selectedOptionHotel==0){
      setHotelImages([...images2])
    }else if(selectedOptionHotel==1){
      setHotelImages([...images3])
    }else if(selectedOptionHotel==2){
      setHotelImages([...images4])
    }else if(selectedOptionHotel==3){
      setHotelImages([...images5])
    }else if(selectedOptionHotel==4){
      setHotelImages([...images6])
    }
  }
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
          <Slider images={hotelImages} selected={selectedOptionHotel} select={(aux)=>{console.log('kjnhbgvfcfgvhbjn',aux);setSelectedOptionHotel(aux)}}/>
          </div>
          <div className={styles.optionsContainer}>
          <div className={styles.options}>
            <div className={getOption(0)} onClick={()=>{setSelectedOption(0)}}><h2>Restaurants</h2></div>
            <div className={getOption(1)} onClick={()=>{setSelectedOption(1)}}><h2>Activities</h2></div>
            <div className={getOption(2)} onClick={()=>{setSelectedOption(2)}}><h2>Events</h2></div>
          </div>
          </div>
          <div className={styles.rowSlider}>
          <div className={styles.row} style={{marginLeft:(-selectedOption*100).toString()+'%'}}>
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

          <div className={styles.row}>
          <div className={styles.column}>
            <h4 className={styles.type}>Activity</h4>
            <Title
              normal={true}
              text={currentActivity.name}
              marginBottom={"2vh"}
              left={true}
              bold={true}
            />
            <h2>{currentActivity.content}</h2>
            <div className={styles.imageContainer3}>
              <img src={currentActivity.images[0]} />
              <img src={currentActivity.images[1]} />
              <img src={currentActivity.images[2]} />
            </div>
          </div>
          <div className={`${styles.column} ${styles.border}`}>
            {activities.map((restaurant) => {
              return (
                <div
                  className={`${styles.item} ${selectedActivity(restaurant.id)}`}
                  onClick={() => {
                    setCurrentActivity(restaurant);
                  }}
                >
                  <h4 className={styles.type}>Activity</h4>
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
        <div className={styles.row}>
          <div className={styles.column}>
            <h4 className={styles.type}>Event</h4>
            <Title
              normal={true}
              text={currentEvent.name}
              marginBottom={"2vh"}
              left={true}
              bold={true}
            />
            <h2>{currentEvent.content}</h2>
            <div className={styles.imageContainer3}>
              <img src={currentEvent.images[0]} />
              <img src={currentEvent.images[1]} />
              <img src={currentEvent.images[2]} />
         
            </div>
          </div>
          <div className={`${styles.column} ${styles.border}`}>
            {events.map((restaurant) => {
              return (
                <div
                  className={`${styles.item} ${selectedEvent(restaurant.id)}`}
                  onClick={() => {
                    setCurrentEvent(restaurant);
                  }}
                >
                  <h4 className={styles.type}>Event</h4>
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
        </div>

        </div>

        <Footer />
      </div>
    </>
  );
}
