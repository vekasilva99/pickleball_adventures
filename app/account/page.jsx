"use client";
import React, { useEffect, useContext, useState } from "react";
import Image from "next/image";
import styles from "./aboutUs.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header4";
import { Quote } from "@/components/Quote";
import { Title } from "@/components/Title";
import { useRouter, useSearchParams } from "next/navigation";
import { PastTrips } from "@/components/PastTrips";
import { UpcomingTrips } from "@/components/UpcomingTrips";
import AuthContext from "@/context/AuthContext";
import axios from "axios";
import { Reveal } from "@/components/Reveal";



export default function Account() {
  const params = useSearchParams();
  const router = useRouter();
  const { user, setUser } = useContext(AuthContext);
  const callBackUrl = params.get("trips");
const [reservations,setReservations]=useState([])
  const [page, setPage] = useState(
    callBackUrl
      ? callBackUrl == "past"
        ? "past"
        : callBackUrl == "upcoming"
        ? "upcoming"
        : "upcoming"
      : "upcoming"
  );

  const getReservations = async (userId) => {
    const { data } = await axios.get(`${process.env.WEBAPP_URL}api/reservation/user/${userId}`);
    if(data?.reservations){
      setReservations(data.reservations)
    }

 
  };

  useEffect(() => {
    setPage(
      callBackUrl
        ? callBackUrl == "past"
          ? "past"
          : callBackUrl == "upcoming"
          ? "upcoming"
          : "upcoming"
        : "upcoming"
    );
  }, [callBackUrl]);


  useEffect(() => {
  if(user){
    getReservations(user._id)
 
  }
  }, [user]);

  useEffect(() => {
    console.log(reservations)
    }, [reservations]);


    const getPastTrips=()=>{
      return reservations.filter((reservation)=>new Date(reservation.tripId.date)<new Date())
    }

    const getUpcomingTrips=()=>{
      return reservations.filter((reservation)=>new Date(reservation.tripId.date)>=new Date())
    }

  return (
    <div className={styles.main}>
      <Navbar />
      <Header
        titleLine1="About"
        titleLine2="Us"
        background="/assets/images/download.png"
        backgroundTop="/assets/images/download.jpg"
        whiteBackground={false}
        yellowBackground={true}
      />

      <div className={styles.pageGradient}>
        <Reveal width="100%">
        <div className={styles.navigation}>
          <div
            onClick={() => {
              setPage("upcoming");
              router.push("/account?trips=upcoming");
            }}
            className={
              page == "upcoming"
                ? `${styles.navItem} ${styles.active}`
                : styles.navItem
            }
          >
            <h3>Upcoming Trips</h3>
          </div>
          <div
            className={
              page == "past"
                ? `${styles.navItem} ${styles.active}`
                : styles.navItem
            }
            onClick={() => {
              setPage("past");
              router.push("/account?trips=past");
            }}
          >
            <h3>Past Trips</h3>
          </div>
        </div>
        </Reveal>
        {page == "past" && (
        <PastTrips data={getPastTrips()}/>
        )}

        {page == "upcoming" && (
         <UpcomingTrips data={getUpcomingTrips()}/>
        )}
      </div>
      <Footer />
    </div>
  );
}
