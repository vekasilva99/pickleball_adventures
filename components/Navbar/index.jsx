"use client";
import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./navbar.module.css";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import AuthContext from "@/context/AuthContext";
export const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [open,setOpen]=useState(false)
  const { data } = useSession();
  

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);
  const router = useRouter();

  const logoutHandler = () => {
    signOut();
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.rightContainer}>
          <img src="/assets/logo/logo.png" />
          <img src="/assets/logo/cabieses.png" />
        </div>
        <div className={styles.leftContainer}>
          <div>
            <button
              className={styles.navItem}
              onClick={() => {
                router.push("/destinations");
              }}
            >
              Destinations
            </button>
            <button
              className={styles.navItem}
              onClick={() => {
                router.push("/about-us");
              }}
            >
              About Us
            </button>
            <button
              className={styles.navItem}
              onClick={() => {
                router.push("/cabieses");
              }}
            >
              Foundation
            </button>
            <button
              className={styles.navItem}
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              Contact
            </button>
          </div>
          {user ? (
            <div className={styles.nameContainer}>
            <button className={styles.navItem} onClick={()=>{setOpen(!open)}}>{user.first_name}</button>
            <div className={open ? styles.container : `${styles.container} ${styles.closed}`}>
            
              <a className={styles.item}>Profile</a>
              <a className={styles.item} onClick={()=>{router.push('/account?trips=upcoming')}}>Upcoming Trips</a>
              <a className={styles.item} onClick={()=>{router.push('/account?trips=past')}}> Past Trips</a>
              <h3 className={styles.item} onClick={()=>{logoutHandler()}}>Sign Out</h3>
            
              </div>
            </div>
          ) : (
            <button
              className={styles.navItem}
              onClick={() => {
                router.push("/sign-in");
              }}
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      <div className={styles.navbarMobile}>
        <button
          className={styles.navItem}
          onClick={() => {
            router.push("/destinations");
          }}
        >
          {/* <img src="/assets/icons/plane.png"/> */}
          <div className={styles.plane}></div>
          <h2>Destinations</h2>
        </button>
        <button
          className={styles.navItem}
          onClick={() => {
            router.push("/about-us");
          }}
        >
          <div className={styles.info}></div>
          <h2>About Us</h2>
        </button>
        <button
          className={styles.navItem}
          onClick={() => {
            router.push("/cabieses");
          }}
        >
          <div className={styles.foundation}></div>
          <h2>Foundation</h2>
        </button>
        <button
          className={styles.navItem}
          onClick={() => {
            router.push("/contact-us");
          }}
        >
          <div className={styles.contact}></div>
          <h2>Contact</h2>{" "}
        </button>
      </div>
      {user ? (
        <button className={styles.signInMobile}>{user.first_name}</button>
      ) : (
        <button
          className={styles.signInMobile}
          onClick={() => {
            router.push("/sign-in");
          }}
        >
          Sign In
        </button>
      )}
    </>
  );
};
