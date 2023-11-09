"use client";
import React, { useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import Image from "next/image";
import styles from "./contact.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header3";
import { toast } from "react-toastify";
import validator from "validator";
export default function ContactUs() {
  const form = useRef();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
   
let error=false;
const firstName = e.target.user_name.value;
const lastName = e.target.user_last_name.value;
const email = e.target.user_email.value;
const message = e.target.message.value;
console.log(firstName,lastName)

if(firstName.replace(/ /g,'') == ""){
error=true
toast.error('Name is required',{
  className: "toast-text"
});
}
if(lastName.replace(/ /g,'') == ""){
  error=true
  toast.error('Last name is required',{
    className: "toast-text"
  });
}
if(email.replace(/ /g,'') == ""){
  error=true
  toast.error('Email is required',{
    className: "toast-text"
  });
}
if(message.replace(/ /g,'') == ""){
  error=true
  toast.error('Message is required',{
    className: "toast-text"
  });
}
if(!validator.isEmail(email)){
  error=true
  toast.error('Enter valid email',{
    className: "toast-text"
  });
}
if(!error){
  emailjs.sendForm('service_3m56aas', 'template_j19yfmf', form.current, 'BLvjnOIXcVKmzQgC5')
  .then((result) => {
      setShowSuccessModal(true)
  }, (error) => {
    toast.error(error.text,{
      className: "toast-text"
    });
    
  });
}
 
  };
  return (
    <div className={styles.main}>
        <div
        className={
          showSuccessModal
            ? `${styles.overlay}`
            : `${styles.overlay} ${styles.noShow}`
        }
        onClick={() => {
          setShowSuccessModal(false);
        }}
      >
        <div className={styles.modalSuccess}>
          <img src="../assets/icons/check-circle.webp" />
          <h2>Awesome!</h2>
          <h3>Your email has been sent!</h3>
          <h3>Our team will contact us as soon as possible.</h3>
         
          <button
            onClick={() => {
              setShowSuccessModal(false)
            
            }}
          >
            Close
          </button>
        </div>
      </div>
      <Navbar />
     <Header whiteBackground={true} titleLine1="Contact" titleLine2="Us" background="/assets/images/pickleball.webp" backgroundTop="/assets/images/pickleball.webp"/>
 
     <div className={styles.pageGradient}>

     <form className={styles.inputContainer} ref={form} onSubmit={sendEmail}>
          <div className={styles.input}>
            <h3>First Name</h3>
            <input placeholder=" " name="user_name" id="user_name"/>
            <h2>First Name</h2>
          </div>
          <div className={styles.input}>
          <h3>Last Name</h3>
            <input  placeholder=" " name="user_last_name" id="user_last_name"/>
            <h2>Last Name</h2>
          </div>
          <div className={`${styles.input} ${styles.inputLarge}`}>
          <h3>Email</h3>
            <input  placeholder=" " name="user_email" id="user_email" />
            <h2>Email</h2>
          </div>

          <div className={`${styles.input} ${styles.inputLarge}`}>
          <h3>Message</h3>
            <textarea   placeholder=" " name="message" id="message"  />
            <h2>Message</h2>
            
          </div>
          <button >
            <h2>Send</h2>
          </button>
      
      
       
          </form>
      <Footer/>
     </div>
   
    </div>
  );
}
