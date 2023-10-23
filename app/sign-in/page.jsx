"use client";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Title } from "@/components/Title";
import React, { useState, useContext, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { parseCallbackUrl } from "@/helpers/index.js"
import AuthContext from "@/context/AuthContext";
import { toast } from "react-toastify";
import validator from "validator";
import {signIn} from "next-auth/react"
import LoaderContext from "@/context/LoaderContext";
import LazyLoad from 'react-lazy-load';
import ReactPlayer from 'react-player';

export default function SignIn() {
  const { error, clearErrors } = useContext(AuthContext);

  const { setLoading } = useContext(LoaderContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const router = useRouter();
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const params = useSearchParams();
  const callBackUrl = params.get("callbackUrl");
console.log(callBackUrl)
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



    if(email.replace(/ /g,'') == ""){
      setEmailError('Required')
    }
    if(!validator.isEmail(email)){
      setEmailError('Invalid Email')
      isError=true
    }


    if(password.replace(/ /g,'') == ""){
      setPassword('Required')
      isError=true
    }

    if(!isError){
      const data=await signIn('credentials',{email,password, callbackUrl: callBackUrl ? parseCallbackUrl(callBackUrl) : "/",})
 
   
      if (data?.error) {
        toast.error(data?.error);
        setLoading(false)
      }
  
      if (data?.ok) {
  
        router.push("/");
        setLoading(false)
      }
    }else{
      setLoading(false)
    }
 

  

  }
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.row}>
       
        <div className={styles.content}>
          <Title normal={true} text={'This is where the incredible experiences start.'} marginBottom={'10vh'} left={true} />
          <div className={styles.input} >
           
         <input placeholder=" " required value={email} onChange={(e) => setEmail(e.target.value)} className={emailError!=undefined ? styles.invalid : ""}/>
         <h2>Email</h2>
         </div>
         <div className={styles.input} >
           
           <input type="password" placeholder=" " required value={password} onChange={(e) => setPassword(e.target.value)} className={passwordError!=undefined ? styles.invalid : ""}/>
           <h2>Password</h2>
           </div>
<button onClick={(e)=>{login(e)}}><h2>Sign In</h2></button>
<div className={styles.signUp}>
  <h2>Don't Have An Account?</h2>
  <button>Sign Up Now!</button>
</div>
        </div>
        <div className={styles.videoContainer}>
      
          <LazyLoad offsetVertical={200} className="lazyload-video">
            <ReactPlayer
              url="/assets/videos/2.mp4"
              playing
              muted
              loop
              width="100%"
              height="100%"
              preload={true}
              playsinline={true}
              className={styles.videoHome}
            />
          </LazyLoad>
          <img src="/assets/icons/arrow-45.png"></img>
        </div>
      </div>
    
    </div>
  );
}
