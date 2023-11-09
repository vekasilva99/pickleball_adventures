"use client";

import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Quote } from "@/components/Quote";
import { Title } from "@/components/Title";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';
import AuthContext from "@/context/AuthContext";
import { toast } from "react-toastify";
import { countryList } from "@/helpers/countryList";
import { countryCodes } from "@/helpers/countryCodes";
import validator from "validator";
import {signIn} from "next-auth/react"
import LoaderContext from "@/context/LoaderContext";

export default function SignIn() {
  const { error, registerUser, clearErrors } = useContext(AuthContext);

  const { setLoading } = useContext(LoaderContext);
  const [password2, setPassword2] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessModal,setShowSuccessModal]=useState(false)


  const router = useRouter();

  const searchParams = useSearchParams()
 
  const token = searchParams.get('token')
  const id = searchParams.get('id')

  console.log(token)
  const [password2Error, setPassword2Error] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);


  useEffect(() => {

  
    if (error) {
      toast.error(error,{
        className: "toast-text"
      });
   
      clearErrors();
    }
  }, [error]);



  const login=async(e)=>{
    e.preventDefault();
    setLoading(true)
    let isError=false



    if(password2.replace(/ /g,'') == ""){
      setPassword2('Required')
      isError=true
    }

    if(password.replace(/ /g,'') == ""){
      setPassword('Required')
      isError=true
    }

    if(password.length <6){
      setPassword('Required')
      toast.error("Password must be longer than 6 characters.",{
        className: "toast-text"
      });
      isError=true
    }

    if(password != password2){
      setPassword('Passwords should match')
      setPassword2('Passwords should match')
      isError=true
    }

    

    if(!isError){

      const dataAux={token:token,userId:id,password:password}
      try {
        const { data } = await axios.post(
          `${process.env.WEBAPP_URL}api/resetPassword`,
          dataAux
        );

        console.log("DATTTTAAAA", data);
        if (data?.success) {
          setLoading(false);
          setShowSuccessModal(true);
        }
      } catch (error) {
        setLoading(false);

        toast.error(error.response?.data.error);
       
      }
    }else{
      setLoading(false)
    }
 

  

  }
  return (
    <div className={styles.main}>
        <div
        className={
          showSuccessModal
            ? `${styles.overlay}`
            : `${styles.overlay} ${styles.noShow}`
        }
        onClick={() => {
          setShowCancellation(false);
        }}
      >
        <div className={styles.modalSuccess}>
          <img src="../assets/icons/check-circle.webp" />
          <h2>Your Password has been updated!</h2>
          <h3>Now you can log in</h3>
          <button onClick={()=>{router.push("/sign-in");setShowSuccessModal(false);        }}>Log In</button>
        </div>
      </div>
      <Navbar />
      <div className={styles.row}>
       
        <div className={styles.content}>
          <Title normal={true} text={'This is where the incredible experiences start.'} marginBottom={'10vh'} left={true} />
       
         <div className={styles.input} >
           
           <input type="password" placeholder=" " required value={password} onChange={(e) => setPassword(e.target.value)} className={passwordError!=undefined ? styles.invalid : ""}/>
           <h2>Password</h2>
           </div>
           <div className={styles.input} >
           
           <input type="password" placeholder=" " required value={password2} onChange={(e) => setPassword2(e.target.value)} className={password2Error!=undefined ? styles.invalid : ""}/>
           <h2>Confirm Password</h2>
           </div>
<button onClick={(e)=>{login(e)}}><h2>Change Password</h2></button>

        </div>
        <div className={styles.videoContainer}>
          <video autoPlay muted playsInline loop className={styles.videoHome}>
            <source src="/assets/videos/2.mp4" type="video/mp4"></source>
          </video>
          <img src="/assets/icons/arrow-45.webp"></img>
        </div>
      </div>
    
    </div>
  );
}
