"use client";

import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Title } from "@/components/Title";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import { toast } from "react-toastify";
import { countryList } from "@/helpers/countryList";
import { countryCodes } from "@/helpers/countryCodes";
import validator from "validator";
import LoaderContext from "@/context/LoaderContext";
import LazyLoad from 'react-lazy-load';
import ReactPlayer from 'react-player';


export default function SignUp() {
  const { error, registerUser, clearErrors } = useContext(AuthContext);
  const { setLoading } = useContext(LoaderContext);
  const notify = () => toast("Wow so easy!");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [first_nameError, setFirst_nameError] = useState(undefined);
  const [last_nameError, setLast_nameError] = useState(undefined);
  const [emailError, setEmailError] = useState(undefined);
  const [birthdateError, setBirthdateError] = useState(undefined);
  const [dayError, setDayError] = useState(undefined);
  const [monthError, setMonthError] = useState(undefined);
  const [yearError, setYearError] = useState(undefined);
  const [genderError, setGenderError] = useState(undefined);
  const [countryError, setCountryError] = useState(undefined);
  const [stateError, setStateError] = useState(undefined);
  const [phone_numberError, setPhone_numberError] = useState(undefined);
  const [codeError, setCodeError] = useState(undefined);
  const [numberError, setNumberError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const [password2Error, setPassword2Error] = useState(undefined);

  const getClassSelect=(value)=>{
  
if(value==""){
  return styles.empty
}else{
  return ""
}
  }
  useEffect(() => {

  
    if (error) {
      toast.error(error,{
        className: "toast-text"
      });
   
      clearErrors();
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();

    registerUser({ name, email, password });
  };

  const signUp=(e)=>{
    e.preventDefault();
    setLoading(true)
    let isError=false
    if(first_name.replace(/ /g,'') == ""){
      setFirst_nameError('Required')
      isError=true
    }
    if(last_name.replace(/ /g,'') == ""){
      setLast_nameError('Required')
      isError=true
    }
    if(gender.replace(/ /g,'') == ""){
      setGenderError('Required')
      isError=true
    }
    if(day.replace(/ /g,'') == ""){
      setDayError('Required')
      isError=true
    }
    if(month.replace(/ /g,'') == ""){
      setMonthError('Required')
      isError=true
    }
    if(year.replace(/ /g,'') == ""){
      setYearError('Required')
      isError=true
    }
    if(country.replace(/ /g,'') == ""){
      setCountryError('Required')
      isError=true
    }
    if(state.replace(/ /g,'') == ""){
      setStateError('Required')
      isError=true
    }
    if(email.replace(/ /g,'') == ""){
      setEmailError('Required')
    }
    if(!validator.isEmail(email)){
      setEmailError('Invalid Email')
      isError=true
    }
    if(code.replace(/ /g,'') == ""){
      setCodeError('Required')
      isError=true
    }
    if(number.replace(/ /g,'') == ""){
      setNumberError('Required')
      isError=true
    }
    if(password.replace(/ /g,'') == ""){
      setPassword('Required')
      isError=true
    }
    if(password2.replace(/ /g,'') == ""){
      setPassword2('Required')
      isError=true
    }
    if(password != password2){
      setPassword('Passwords do not match')
      setPassword2('Passwords do not match')
      isError=true
    }
    if(password.length <6){
      setPassword('Required')
      isError=true
      toast.error("Password must be longer than 6 characters.",{
        className: "toast-text"
      });
    }

    if(!isError){
      const data={
        first_name,
        last_name, 
        email,
        birthdate:new Date(day+" "+month+" "+year).toISOString(),
        gender,
        country,
        state,
        phone_number:{code:code,number:number}, 
        password

      }
   
      registerUser(data);
    }else{
      setLoading(false)
    }
  }
  return (
    <div className={styles.main}>
      
      <Navbar />
      <div className={styles.row}>
        <div className={styles.content}>
          <Title
            normal={true}
            text={"This is where the incredible experiences start."}
            marginBottom={"10vh"}
            left={true}
          />
          <div className={styles.inputContainer}>
          <div className={styles.input}>
            <h3>First Name</h3>
            <input placeholder=" " required value={first_name} onChange={(e) => setFirst_name(e.target.value)} className={first_nameError!=undefined ? styles.invalid : ""}/>
            <h2>First Name</h2>
          </div>
          <div className={styles.input}>
          <h3>Last Name</h3>
            <input  placeholder=" " required value={last_name} onChange={(e) => setLast_name(e.target.value)} className={last_nameError!=undefined ? styles.invalid : ""}/>
            <h2>Last Name</h2>
          </div>
          <div className={styles.input} >
          <h3>Gender</h3>
            <select  placeholder=" " required value={gender} onChange={(e) => setGender(e.target.value)} className={genderError!=undefined ? styles.invalid : getClassSelect(gender)}>
            <option value="" disabled selected>Gender</option>
            <option value="Woman">Woman</option>
            <option value="Man">Man</option>
            <option value="Genderqueer/Non-Binary">Genderqueer/Non-Binary</option>
              </select>
          
          </div>
          <div className={styles.input}>
          <h3>Date of Birth</h3>
          <div className={styles.inputGroup}>
          <div className={`${styles.input} ${styles.inputMonth}`}>
            <select  placeholder=" " required value={month} onChange={(e) => setMonth(e.target.value)} className={monthError!=undefined ? styles.invalid : getClassSelect(month)}>
            <option value="" disabled selected>Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="January">January</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
              </select>
            </div>
            <div className={`${styles.input} ${styles.inputMonth}`}>
            <select  placeholder=" " required value={day} onChange={(e) => setDay(e.target.value)} className={dayError!=undefined ? styles.invalid : getClassSelect(day)}>
            <option value="" disabled selected>Day</option>
            {[...Array(31)].map((e,i)=>{
              return  <option value={(i+1).toString()} >{i+1}</option>
            })}
           
          </select>
            </div>
            <div className={`${styles.input} ${styles.inputMonth}`}>
            <select  placeholder=" " required value={year} onChange={(e) => setYear(e.target.value)} className={yearError!=undefined ? styles.invalid : getClassSelect(year)} >
            <option value="" disabled selected>Year</option>
            {[...Array(120)].map((e,i)=>{
              return  <option value={(2023-i).toString()} >{2023-i}</option>
            })}
           
          </select>
            </div>
            </div>
          </div>
          <div className={styles.input}>
          <h3>Citizenship</h3>
          <select  placeholder=" " required value={country} onChange={(e) => setCountry(e.target.value)} className={countryError!=undefined ? styles.invalid : getClassSelect(country)}>
            <option value="" disabled selected>Citizenship</option>
            {countryList.map((country,index)=>{
              return  <option value={index} >{country.country}</option>
            })}
           
          </select>
          </div>
          <div className={styles.input}>
          <h3>State/province of residency</h3>
          <select  placeholder=" " required value={state} onChange={(e) => setState(e.target.value)} className={stateError!=undefined ? styles.invalid : getClassSelect(state)}>
            <option value="" disabled selected>State/province of residency</option>
            {countryList[country]?.states &&
            <>
            {countryList[country].states.map((state,index)=>{
              return  <option value={state} >{state}</option>
              
            })}</>}
           
          </select>
          </div>
          <div className={styles.input}>
          <h3>Email</h3>
            <input  placeholder=" " required value={email} onChange={(e) => setEmail(e.target.value)} className={emailError!=undefined ? styles.invalid : ""}/>
            <h2>Email</h2>
          </div>
          <div className={styles.input}>
          <h3>Phone</h3>
          <div className={styles.inputGroup}>
          <div className={`${styles.input} ${styles.inputMonth}`}>
          <select  placeholder=" " required value={code} onChange={(e) => setCode(e.target.value)} className={codeError!=undefined ? styles.invalid : getClassSelect(code)}>
            <option value="" disabled selected>Code</option>
        
            {countryCodes.map((code,index)=>{
              return  <option value={code.dial_code} >{code.name} {code.dial_code}</option>
              
            })}
           
          </select>
       
            </div>
            <div className={`${styles.input} ${styles.inputMonth} ${styles.inputPhone}`} >
            <input placeholder=" "  required value={number} onChange={(e) => setNumber(e.target.value)} className={numberError!=undefined ? styles.invalid : ""}/>
            <h2>Phone</h2>
            </div>
            </div>
          </div>
          <div className={styles.input}>
          <h3>Password</h3>
            <input type="password" placeholder=" " required value={password} onChange={(e) => setPassword(e.target.value)} className={passwordError!=undefined ? styles.invalid : ""}/>
            <h2>Password</h2>
          </div>
          <div className={styles.input}>
          <h3>Confirm Password</h3>
            <input type="password" placeholder=" " required value={password2} onChange={(e) => setPassword2(e.target.value)} className={password2Error!=undefined ? styles.invalid : ""}/>
            <h2>Confirm Password</h2>
          </div>
       
          </div>
          <button onClick={(e)=>{signUp(e)}}>
            <h2>Sign Up</h2>
          </button>
          <div className={styles.signUp}>
            <h2>Have An Account?</h2>
            <button>Sign In Now!</button>
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
