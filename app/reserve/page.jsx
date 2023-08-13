"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./aboutUs.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Quote } from "@/components/Quote";
import { Title } from "@/components/Title";


export default function Reserve() {
  const [currentStep,setCurrentStep]=useState(0)
  const [rooms,setRooms]=useState(1)
  const [guests,setGuests]=useState([])
  const [guestsInfo,setGuestInfo]=useState([])
  const [guestsInfoStep,setGuestInfoStep]=useState(3)
  const [paymentStep,setPaymentStep]=useState(4)
  const [selectedGuest,setSelectedGuest]=useState(0)
  
  const addRoom=()=>{
    setRooms(rooms+1)
  }

  const removeRooms=()=>{
    if(rooms > 1){
      setRooms(rooms-1)
    }
  }

  const defaultGuests=()=>{
    setGuestInfoStep(2+rooms)
    setPaymentStep(2+(rooms*2))
    let aux=[]
    for(let i=0;i<rooms;i++){
      aux.push(1)

    }
    setGuests(aux)
  }

  const addGuest=(index)=>{
    let aux=guests

    aux[index]=aux[index]+1
    console.log(index,aux)
    setGuests([...aux])

  }

  const removeGuest=(index)=>{
    let aux=guests

    aux[index]=aux[index]-1
    setGuests([...aux])

  }

  const defaultGuestInfo=()=>{
    let aux=[]

    for(let i=0;i<rooms;i++){
      let aux2=[]
      for(let j=0;j<guests[i];j++){
        let data={name:'',last_name:'',gender:'',date_of_birth:{month:'',day:'',year:''},citizenship:'',state:'',email:'', phone:''}
        aux2.push(JSON.stringify(data))
      }
      aux.push(aux2)
    }
    setGuestInfo([...aux])
console.log(aux)
  }

  const numberOfGuests=()=>{
    let aux=0

    for(let i=0;i<guests.length;i++){
aux+=guests[i].length
    }
   
    return aux
  }
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.row}>
        <div className={styles.column1}>
          <div className={styles.sidebar}>
          <Title   color={'white'} small={true} text={'Week on Lima'}  left={true}/>
          <h2>Sept. 3, 2023 - Sept. 10, 2023</h2>
          <button className={styles.back}>Go Back</button>
          <div className={currentStep > 0 ? styles.sidebarContent : styles.sidebarContentHidden}>
            <div className={currentStep > 0 && currentStep < guestsInfoStep ? `${styles.sidebarElement} ${styles.currentOption}` : styles.sidebarElement }>
              <h3>Rooms</h3>
              <div className={styles.roomsSummary}>
              {[...Array(rooms)].map((room,index)=>{
                return <div className={styles.roomDetail}>
                  <h2>Room {index+1}</h2>
                  {[...Array(guests[index])].map((guest,index2)=>{
                    return     <h4>Guest {index2 + 1}</h4>
                  })}
              
                </div>
              })}
              </div>
            </div>
            <div className={currentStep >=guestsInfoStep && currentStep < paymentStep  ? `${styles.sidebarElement} ${styles.currentOption}` : styles.sidebarElement }>
              <h3>Guest Info</h3>
            </div>
            <div className={currentStep ==paymentStep ? `${styles.sidebarElement} ${styles.currentOption}` : styles.sidebarElement }>
              <h3>Payment</h3>
            </div>
          </div>
          <h4 className={currentStep > 0 ? styles.cancellationButton : styles.cancellationButtonHidden}>View Cancellation Policy</h4>
          </div>

        </div>
        <div className={styles.column2}>
          <div className={styles.steps}>
          <div className={styles.step} style={{marginLeft:(currentStep*-100).toString()+'%'}}>
            <div className={styles.containerImg}>
              <img src='assets/images/beach.jpg'/>
            </div>
            <div className={styles.container}>
              <div className={styles.row1}>
                <div className={styles.included}>
                  <h2>WHAT'S INCLUDED</h2>
                  <ul>
                    <li>Daily Pickleball Clinics led by our World-Class Pros</li>
                    <li>7-Night stay at the 5-Star Country Club Lima Hotel</li>
                    <li>Fine-Dining at Award- Winning Restaurants</li>
                    <li>Chef Experience- Learn to Cook from a Professional Chef</li>
                    <li>Huaca Pucllana & Pachacamac Museum Tours</li>
                    <li>Historic Tour of Lima</li>
                    <li>D'Paso- Horse shows</li>
                    <li>Cajon Music Classes- An Immersive Cultural Experience</li>
                  </ul>
                  <h2>WHAT'S NOT INCLUDED</h2>
                  <ul>
                    <li>Airfare</li>
                  </ul>
                </div>
                <div className={styles.priceContainer}>
                  <div className={styles.price}>
                    <h3>From USD* /Person</h3>
                    <h4>$5,550</h4>
                  </div>
                  <button onClick={()=>{setCurrentStep(1)}} className={styles.continue}>Continue</button>
                  <p>Estimated price total for 2 guests: $10200 USD</p>
                </div>
              </div>

            </div>

          </div>
          <div className={styles.step}>
    
            <div className={`${styles.container} ${styles.spaceAround}`}>
              <div>
            <Title   small={true} text={'How many rooms do you need?'}  left={true}/>
            <h5>Most rooms sleep up to 2 guests</h5>
            <div className={styles.add}>
            <button disabled={rooms ==1} onClick={()=>{removeRooms()}}><img src='assets/icons/minus.png'/></button>
            <h6>{rooms}</h6>
            <button  onClick={()=>{addRoom()}}><img src='assets/icons/plus.png'/></button>
            </div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.continue} onClick={()=>{defaultGuests();setCurrentStep(currentStep+1);}}>Continue</button>
            </div>

            </div>

          </div>
{[...Array(rooms)].map((room,index)=>{
         return <div className={styles.step}>
    
          <div className={`${styles.container} ${styles.spaceAround}`}>
            <div>
          <Title   small={true} text={`How many guests in Room ${index+1}?`}  left={true}/>
          <h5>Most rooms sleep up to 2 guests</h5>
          <div className={styles.add}>
          <button disabled={guests[index] ==1} onClick={()=>{removeGuest(index)}}><img src='assets/icons/minus.png'/></button>
          <h6>{guests[index]}</h6>
          <button  disabled={guests[index] ==2} onClick={()=>{addGuest(index)}}><img src='assets/icons/plus.png'/></button>
          </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.continue} onClick={()=>{setCurrentStep(currentStep+1); if(index+1==rooms){defaultGuestInfo()}}}>Continue</button>
          </div>
      
          </div>
      
        </div>
})}

{[...Array(rooms)].map((room,index)=>{
         return <div className={`${styles.step} ${styles.start}`}>
      <Title   small={true} text={`Room ${index+1} - Who's traveling?`}  left={true}/>
          <h5>Time to get personal — tell us a bit more about who is traveling. </h5>
          <div className={`${styles.container} ${styles.margin}`}>
          <Title   small={true} text={'Guest Information'}  left={true}/>
            <div>
        {guestsInfo[index] &&
          <div className={styles.guests}>

            {guestsInfo[index].map((guest,index2)=>{
              if(index2==0){
                return    <h2 onClick={()=>{setSelectedGuest(index2)}} className={selectedGuest==index2 ? styles.selected :'' }>Primary Guest</h2>
              }else{
                return <h2 onClick={()=>{setSelectedGuest(index2)}} className={selectedGuest==index2 ? styles.selected :'' }>Guest {index2+1}</h2>
              }
            })}
      
   

          </div>}
          <div className={styles.inputContainer}>
          <div className={styles.input}>
            <h3>First Name</h3>
            <input placeholder=" " />
            <h2>First Name</h2>
          </div>
          <div className={styles.input}>
          <h3>Last Name</h3>
            <input  placeholder=" " />
            <h2>Last Name</h2>
          </div>
          <div className={styles.input}>
          <h3>Gender</h3>
            <input  placeholder=" " />
            <h2>Gender</h2>
          </div>
          <div className={styles.input}>
          <h3>Date of Birth</h3>
          <div className={styles.inputGroup}>
          <div className={`${styles.input} ${styles.inputMonth}`}>
            <input  placeholder=" " />
            <h2>Month</h2>
            </div>
            <div className={`${styles.input} ${styles.inputMonth}`}>
            <input  placeholder=" " />
            <h2>Day</h2>
            </div>
            <div className={`${styles.input} ${styles.inputMonth}`}>
            <input  placeholder=" " />
            <h2>Year</h2>
            </div>
            </div>
          </div>
          <div className={styles.input}>
          <h3>Citizenship</h3>
            <input  placeholder=" " />
            <h2>Citizenship</h2>
          </div>
          <div className={styles.input}>
          <h3>State/province of residency</h3>
            <input  placeholder=" " />
            <h2>State/province of residency</h2>
          </div>
          <div className={styles.input}>
          <h3>Email</h3>
            <input  placeholder=" " />
            <h2>Email</h2>
          </div>
          <div className={styles.input}>
          <h3>Phone</h3>
            <input placeholder=" " />
            <h2>Phone</h2>
          </div>
          <div className={styles.input}>
          <h3>Password</h3>
            <input type="password" placeholder=" " />
            <h2>Password</h2>
          </div>
          <div className={styles.input}>
          <h3>Confirm Password</h3>
            <input type="password" placeholder=" " />
            <h2>Confirm Password</h2>
          </div>
       
          </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.continue} onClick={()=>{setCurrentStep(currentStep+1);}}>Continue</button>
          </div>
      
          </div>
      
        </div>
})}

<div className={`${styles.step} ${styles.start}`}>
      <Title   small={true} text={`How would you like to pay?`}  left={true}/>
          <h5>Total Price: $5,500.00</h5>
          <div className={`${styles.container} ${styles.margin}`}>
          <Title   small={true} text={'Pay with credit card'}  left={true}/>
          <h5>Add your credit card information below to make a payment.</h5>
            <div>
  
          <div className={styles.inputContainer}>
          <div className={styles.input}>
            <h3>First Name</h3>
            <input placeholder=" " />
            <h2>First Name</h2>
          </div>
          <div className={styles.input}>
          <h3>Last Name</h3>
            <input  placeholder=" " />
            <h2>Last Name</h2>
          </div>
          <div className={styles.input}>
          <h3>Card Number</h3>
            <input  placeholder=" " />
            <h2>Card Number</h2>
          </div>
          <div className={styles.input}>
          <h3>Expiration Date</h3>
          <div className={styles.inputGroup}>
          <div className={`${styles.input} ${styles.inputMonth}`}>
            <input  placeholder=" " />
            <h2>Month</h2>
            </div>
            <div className={`${styles.input} ${styles.inputMonth}`}>
            <input  placeholder=" " />
            <h2>Year</h2>
            </div>
            <div className={`${styles.input} ${styles.inputMonth}`}>
            <input  placeholder=" " />
            <h2>CVV</h2>
            </div>
            </div>
          </div>
 
       
          </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.continue} onClick={()=>{setCurrentStep(currentStep+1);}}>Book This Adventure</button>
          </div>
      
          </div>
      
        </div>


          </div>
        </div>
      </div>
   

    
      <Footer />
    </div>
  );
}
