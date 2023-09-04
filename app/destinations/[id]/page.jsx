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
  "../assets/images/peru/lima/1.jpg",
  "../assets/images/peru/lima/2.jpg",
  "../assets/images/peru/lima/3.jpg",
  "../assets/images/peru/lima/4.jpg",
  "../assets/images/peru/lima/5.jpg",
  "../assets/images/peru/lima/6.jpg",
  "../assets/images/peru/lima/7.jpg",
  "../assets/images/peru/lima/8.jpg",
  "../assets/images/peru/lima/9.jpg",
  "../assets/images/peru/lima/10.jpg",
  "../assets/images/peru/lima/11.jpg",
];

const images2 = [
  {image: "../assets/images/peru/hotel2/14.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/17.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/21.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/34.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/1.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/2.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/3.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/4.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/5.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/6.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/7.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/8.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/9.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/10.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/11.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/12.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/13.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/14.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/15.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/18.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/19.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/20.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/22.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/23.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/24.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/25.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/26.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/27.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/28.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/29.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/30.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/31.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/32.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
  {image: "../assets/images/peru/hotel/33.jpg",title1:'Discover',title2:'Hotel Country Club',content:"In a historic edifice adorned with antiques and original art, this esteemed hotel graces Lima's embassy district. Positioned across from the Lima Golf Club and a short 5 km from Larcomar shopping center, its location is a fusion of prestige and convenience. The dining experience is elevated with an upscale Peruvian restaurant and a chic piano bar. Guests can also unwind in the English-style pub, fitness center, spa, and outdoor pool, while enjoying access to the neighboring golf course."},
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
    id: 12,
    name: "Astrid & Gaston",
    content:
      "Indulge in the culinary wonder of Restaurant Flag, crafted by renowned chef Gaston Acurio. Housed in the 17th-century Casa Moreyra hacienda, a National Heritage site, it seamlessly blends tradition and innovation. With a dynamic menu changing every six months to capture the essence of each season, the restaurant offers an exquisite fusion of flavors. Honored with accolades like Latin America's Best Restaurant, it remains an esteemed destination among the world's top 100. Within these historic walls, authenticity meets artistry, delivering an unforgettable dining experience.",
    images: [
      "../assets/images/peru/Astrid&Gaston/AG9.jpg",
      "../assets/images/peru/Astrid&Gaston/AG10.jpg",
      "../assets/images/peru/Astrid&Gaston/AG11.jpg",
    ],
  },
  {
    id: 11,
    name: "La Mar",
    content:
      "Step into the vibrant world of La Mar, a Peruvian restaurant and cebicheria nestled in Lima's historic Miraflores neighborhood. The atmosphere exudes the lively essence of a Lima cebicheria – a celebration of festivity, spontaneity, and radiant colors. A haven of authentic maritime delights, La Mar's cozy setting invites you to revel in the ocean's offerings – from zesty ceviche to delicate tiraditos and an array of seafood wonders. Each dish captures the restaurant's cheerful and jubilant spirit, ensuring that every bite is infused with the joyful essence of this bustling Peruvian cevicheria.",
    images: [
      "../assets/images/peru/LAMAR/16.jpg",
      "../assets/images/peru/LAMAR/17.jpg",
      "../assets/images/peru/LAMAR/18.jpg",
    ],
  },
  {
    id: 8,
    name: "Panchita",
    content:
      "Discover the essence of Peruvian cuisine at this authentic restaurant, where traditional Creole flavors take center stage in a diverse menu that tantalizes with the rich aromas and tastes of Peru. Immerse yourself in a culinary journey that traverses history, skillfully weaving a tapestry of seasonings and ingredients that pay homage to Peruvian Creole culture. The restaurant's folkloric-inspired decor adds a unique blend of charm and sophistication to your dining experience. Belonging to the esteemed culinary realm of chef Gastón Acurio's corporation, it stands proudly as one of Lima's premier destinations to savor the delights of Peruvian gastronomy.",
    images: [
      "../assets/images/peru/Panchita/11.jpeg",
      "../assets/images/peru/Panchita/12.jpg",
      "../assets/images/peru/Panchita/13.jpeg",
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
      "Cala Restaurant Bar Lounge beckons as a seaside sanctuary where the finest contemporary Peruvian cuisine graces your palate against a backdrop of stunning views. This luxurious establishment boasts a versatile dining experience complete with a lounge bar, a terrace, and panoramic ocean vistas. With its privileged location offering one of Lima's most exquisite vistas, Cala marries tradition and innovation, weaving the tapestry of Peruvian gastronomy across time. Nestled on the Pacific shores, it's a testament to culinary sophistication, seamlessly blending references to coastal fare with avant-garde concepts. Whether relishing sunsets in the lounge, sharing camaraderie on the terrace, or creating memories in the main hall, the rhythmic waves provide an unforgettable symphony to your dining experience, where tradition and elegance converge.",
    images: [
      "../assets/images/peru/Cala/X12.jpg",
      "../assets/images/peru/Cala/X13.jpg",
      "../assets/images/peru/Cala/X14.jpg",
    ],
  },
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
    id: 9,
    name: "Doomo Saltado",
    content:
      "Doomo Saltado emerges with a resolute purpose, boasting over 60 delectable varieties of saltados. Their commitment extends to both their patrons and principles, rigorously upholding biosafety protocols. In a relaxed ambiance, this restaurant serves a medley of stir-fried, grilled, and Japanese dishes. At its heart, Doomo Saltado redefines culinary creativity, drawing inspiration from the iconic 'Lomo Saltado' and crafting an extensive array of more than 60 saltado renditions. This distinctive establishment seamlessly blends Peruvian, Japanese, and fusion cuisines, delivering a diverse gastronomic journey.",
    images: [
      "../assets/images/peru/DomoSaltado/D12.jpg",
      "../assets/images/peru/DomoSaltado/D13.jpg",
      "../assets/images/peru/DomoSaltado/D14.jpg",
    ],
  },
  {
    id: 6,
    name: "Tanta",
    content:
      "Immerse yourself in the heartwarming embrace of Tanta, a Lima-based restaurant where the essence of home resonates throughout its concept. This culinary haven invites you to partake in breakfast, lunch, or dinner, making it a sanctuary for any moment of the day. In every dish, you'll discover the cherished flavors reminiscent of the kitchens of mothers and grandmothers, a celebration of Peru's rich culinary heritage. Tanta stands as a testament to the nation's heartbeat, an embodiment of tradition and nostalgia, crafting an ambiance that echoes with the affectionate touch of homemade meals.",
    images: [
      "../assets/images/peru/Tanta/X8.jpg",
      "../assets/images/peru/Tanta/X9.jpg",
      "../assets/images/peru/Tanta/X10.jpg",
    ],
  },

  {
    id: 10,
    name: "La Panka",
    content:
      "La Panka, a grill restaurant, artfully blends quintessential Peruvian cuisine with a gourmet touch. The establishment casts a spell with its dynamic culinary spectrum, from savory 'anticuchos' to succulent 'grilled chickens', each bite a testament to authentic Peruvian flavors elevated to gourmet heights. A welcoming ambiance and genial service seamlessly complete the experience, solidifying 'La Panka' as an indelible destination for a truly unforgettable gastronomic journey.",
    images: [
      "../assets/images/peru/LAPANKA/LP8.jpg",
      "../assets/images/peru/LAPANKA/LP9.jpg",
      "../assets/images/peru/LAPANKA/LP10.jpg",
    ],
  },



];

const activities = [
  {
    id: 2,
    name: "Pickleball Clinic",
    content:
      "Experience a week of expert pickleball instruction in Lima, led by world-renowned professionals. Engage in skill-enhancing clinics, participate in fun drills, exciting games, and engaging challenges. The week concludes with a surprise event, promising an unforgettable adventure. Ensure you're equipped with your paddle – this is an opportunity not to be missed for an amazing pickleball journey.",
    images: [
      "../assets/images/peru/21.jpg",
      "../assets/images/pickleball.jpg",
      "../assets/images/peru/25.jpg",
    ],
  },
  {
    id: 2,
    name: "Cabieses Foundation",
    content:
      "",
    images: [
      "../assets/images/peru/21.jpg",
      "../assets/images/pickleball.jpg",
      "../assets/images/peru/25.jpg",
    ],
  },
  {
    id: 0,
    name: "Urban Kitchen",
    content:
      " Experience a unique culinary journey led by expert Peruvian chefs. Begin at San Isidro farmers market, exploring ingredients and flavors guided by a local chef. Transition to Urban Kitchen for a hands-on cooking class, learning to create traditional dishes. Indulge in the delicacies you've prepared before returning to your hotel. Armed with newfound skills, you can now recreate authentic Peruvian cuisine at your leisure.",
    images: [
      "../assets/images/peru/UrbanKitchen/11.jpeg",
      "../assets/images/peru/UrbanKitchen/12.jpeg",
      "../assets/images/peru/UrbanKitchen/13.jpeg",
    ],
  },
  {
    id: 4,
    name: "City Tour",
    content:
      "Experience an exhilarating day trip from Lima to Paracas and Huacachina, complete with hotel transfers. Witness wildlife like Humboldt penguins and sea lions on the Ballestas Islands, followed by sandboarding and dune buggy rides amidst Huacachina's towering dunes. Your journey commences with an early hotel pickup, leading to Paracas on a comfortable bus. A 2-hour boat tour of the Ballestas Islands showcases captivating marine life and birds in their natural habitat. ",
    images: [
      "../assets/images/peru/13.jpg",
      "../assets/images/peru/26.jpg",
      "../assets/images/peru/35.jpeg",
    ],
  },
  {
    id: 1,
    name: "Huaca Pucllana Site Museum",
    content:
      "Established in 1984 as a result of meticulous research initiated in 1981, the Huaca Pucllana Site Museum was conceived to safeguard and conserve archaeological artifacts while maintaining an active presence at the site. The museum offers a unique tourist circuit that provides insights into the pyramid's third section and the preserved lower portions, shedding light on its ceremonial past. Immersive life-size recreations of ancient Lima culture settlers engaged in various activities, along with excavation process photographs, offer a vivid window into the site's rich history.",
    images: [
      "../assets/images/peru/4.jpg",
      "../assets/images/peru/27.jpg",
      "../assets/images/peru/17.jpg",
    ],
  },

  {
    id: 3,
    name: "Pachacamac Museum",
    content:
      "Pachacamac, a sacred site for over 1200 years, held profound significance as a coastal sanctuary. It drew countless pilgrims for Andean ceremonies and served as a renowned oracle shaping the destinies of influential leaders through its prophecies. Encompassing the Lima, Wari, Ychsma, and Inca cultures, the site's rich history spans diverse peoples and cultural epochs.",
    images: [
      "../assets/images/peru/14.jpeg",
      "../assets/images/peru/1.jpg",
      "../assets/images/peru/24.jpg",
    ],
  },

];

const events=[
  {id:0,name:'DPASO',content:'Elevate your Lima experience with the Santiago de Surco Peruvian Paso and Dance Dinner Show – a night of unmatched cultural richness. Revel in the synergy of dancers and Peruvian horses for an unforgettable evening, complemented by a sumptuous dinner. Immerse yourself in traditional Peruvian culture through dance and the renowned Peruvian paso. Delight in a delectable buffet dinner featuring Peruvian favorites, making it a quintessential night out in Peru.',images:['../assets/images/peru/Dpaso/D7.jpg','../assets/images/peru/Dpaso/D8.jpg','../assets/images/peru/Dpaso/D9.jpg']},
  {id:1,name:'Clases de cajón',content:"Designed to enhance your musical skills, these courses encompass theoretical and practical aspects, cultivating your ability to read and write music scores. You'll gain technical expertise and interpretative proficiency, empowering independent learning and enabling repertoire selection. The learning experience is enriched with theoretical readings on crucial instrument facets and body awareness insights for effective practice.",images:['../assets/images/peru/10.jpg']}
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
