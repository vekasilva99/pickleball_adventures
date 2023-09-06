"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import styles from "./aboutUs.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Quote } from "@/components/Quote";
import { countryList } from "@/helpers/countryList";
import { countryCodes } from "@/helpers/countryCodes";
import { Title } from "@/components/Title";
import { useRouter } from "next/navigation";
import validator from "validator";
import { toast } from "react-toastify";
import LoaderContext from "@/context/LoaderContext";
import { useContext } from "react";

const prices = {
  priceSingle: 5500,
  priceDouble: 5000,
};
export default function PasswordReset() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState([]);
  const [guestsInfo, setGuestInfo] = useState([]);
  const [guestsInfoStep, setGuestInfoStep] = useState(3);
  const [paymentStep, setPaymentStep] = useState(4);
  const [selectedGuest, setSelectedGuest] = useState(0);
  const [selectedGuestInfo, setSelectedGuestInfo] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: { month: "", day: "", year: "" },
    country: "",
    state: "",
    email: "",
    phone: { code: "", number: "" },
  });
  const [showCancellation, setShowCancellation] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { setLoading } = useContext(LoaderContext);

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
  const router = useRouter();
  const getClassSelect = (value) => {
    if (value == "") {
      return styles.empty;
    } else {
      return "";
    }
  };

  const addRoom = () => {
    setRooms(rooms + 1);
  };

  const removeRooms = () => {
    if (rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  const defaultGuests = () => {
    setGuestInfoStep(2 + rooms);
    setPaymentStep(2 + rooms * 2);
    let aux = [];
    for (let i = 0; i < rooms; i++) {
      aux.push(1);
    }
    setGuests(aux);
    calculateTotal(aux);
    console.log("GUests1", aux);
  };

  const addGuest = (index) => {
    let aux = guests;

    aux[index] = aux[index] + 1;
    console.log(index, aux);
    setGuests([...aux]);
    calculateTotal(aux);
    console.log("GUests2", aux);
  };

  const removeGuest = (index) => {
    let aux = guests;

    aux[index] = aux[index] - 1;
    setGuests([...aux]);
    calculateTotal(aux);
    console.log("GUests3", aux);
  };

  const calculateTotal = (guests) => {
    let total = 0;
    for (let i = 0; i < guests.length; i++) {
      if (guests[i] <= 1) {
        total += guests[i] * prices.priceSingle;
      } else {
        total += guests[i] * prices.priceDouble;
      }
    }
    console.log("total", total);
    setTotalPrice(total);
  };
  const calculateTotalPerRoom = (guests) => {
    let total = 0;
    
      if (guests <= 1) {
        total += guests * prices.priceSingle;
      } else {
        total += guests * prices.priceDouble;
      }
    
    console.log("total", total);
    return total
  };

  const defaultGuestInfo = () => {
    let aux = [];

    for (let i = 0; i < rooms; i++) {
      let aux2 = [];
      for (let j = 0; j < guests[i]; j++) {
        let data = {
          first_name: "",
          last_name: "",
          gender: "",
          date_of_birth: { month: "", day: "", year: "" },
          country: "",
          state: "",
          email: "",
          phone: { code: "", number: "" },
        };
        aux2.push(JSON.stringify(data));
      }
      aux.push(aux2);
    }
    setGuestInfo([...aux]);
    console.log("kkkkk", aux);
  };

  const numberOfGuests = () => {
    let aux = 0;

    for (let i = 0; i < guests.length; i++) {
      aux += guests[i].length;
    }

    return aux;
  };

  const changeSelectedGuest = (room, index) => {
    console.log(
      "hola",
      guestsInfo,
      room,
      index,
      JSON.parse(guestsInfo[room][index])
    );
    let aux = guestsInfo;
    aux[room][selectedGuest] = JSON.stringify(selectedGuestInfo);
    setSelectedGuest(index);
    setGuestInfo(aux);
    console.log(aux);
    setSelectedGuestInfo(JSON.parse(guestsInfo[room][index]));
  };

  const changeRoom = (room, index) => {
    let aux = guestsInfo;
    aux[room][selectedGuest] = JSON.stringify(selectedGuestInfo);
    setSelectedGuest(0);
    setGuestInfo(aux);
    console.log(aux);
    setSelectedGuestInfo(JSON.parse(guestsInfo[room + 1][0]));
  };

  const toFindDuplicates = (arry) =>
    arry.filter((item, index) => arry.indexOf(item) !== index);
  const book = async () => {
    setLoading(true);
    let repeated = false;
    let emails = [];
    for (let i = 0; i < guestsInfo.length; i++) {
      for (let j = 0; j < guestsInfo[i].length; j++) {
        emails.push(JSON.parse(guestsInfo[i][j]).email);
      }
    }
    const duplicateElementa = toFindDuplicates(emails);
    console.log(duplicateElementa);
    console.log("emails", emails);

    if (duplicateElementa.length > 0) {
      toast.error("Emails of each guest should be unique.", {
        className: "toast-text",
      });
      setCurrentStep(guestsInfoStep);
      setLoading(false);
    } else {
      let dataAux = { rooms: [], tripId: process.env.PERU,total:totalPrice };

      for (let i = 0; i < guestsInfo.length; i++) {
        let roomAux = { room_number: i + 1, guests: [],price:calculateTotalPerRoom(guests[i])};
        for (let j = 0; j < guestsInfo[i].length; j++) {
          let infoAux = JSON.parse(guestsInfo[i][j]);
          infoAux.country = countryList[infoAux.country].country;
          infoAux.phone_number=infoAux.phone
          infoAux.birthdate = new Date(
            infoAux.date_of_birth.day +
              " " +
              infoAux.date_of_birth.month +
              " " +
              infoAux.date_of_birth.year
          ).toISOString();
         

          roomAux.guests.push(infoAux);
        }

        dataAux.rooms.push(roomAux);
      }

  
      try {
        const { data } = await axios.post(
          `${process.env.WEBAPP_URL}api/reservation`,
          dataAux
        );

      
        if (data?.newReservation) {
          setLoading(false);
          setShowSuccessModal(true);
        }
      } catch (error) {
        setLoading(false);
        toast.error(error.response?.data.error);
   
      }
    }
  };

  const checkGuestInfoByRoom = (room) => {
    let empty = false;
    let error = false;
    let aux = guestsInfo;
    aux[room][selectedGuest] = JSON.stringify(selectedGuestInfo);
    setGuestInfo(aux);
    for (let i = 0; i < aux[room].length; i++) {
      let guestAux = JSON.parse(aux[room][i]);
      console.log(guestAux);
      if (
        guestAux.first_name.replace(/ /g, "") == "" ||
        guestAux.last_name.replace(/ /g, "") == "" ||
        guestAux.gender.replace(/ /g, "") == "" ||
        guestAux.date_of_birth.day.replace(/ /g, "") == "" ||
        guestAux.date_of_birth.month.replace(/ /g, "") == "" ||
        guestAux.date_of_birth.year.replace(/ /g, "") == "" ||
        guestAux.country.replace(/ /g, "") == "" ||
        guestAux.state.replace(/ /g, "") == "" ||
        guestAux.email.replace(/ /g, "") == "" ||
        guestAux.phone.code.replace(/ /g, "") == "" ||
        guestAux.phone.number.replace(/ /g, "") == ""
      ) {
        empty = true;
      }

      if (!validator.isEmail(guestAux.email)) {
        error = true;
      }
    }

    console.log(empty, error);
    if (!empty && !error) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className={styles.main}>
      <div
        className={
          showCancellation
            ? `${styles.overlay}`
            : `${styles.overlay} ${styles.noShow}`
        }
        onClick={() => {
          setShowCancellation(false);
        }}
      >
        <div className={styles.modal}>
          <p>
            Cancellation Policy <br />
            (Non Refundable Deposit)
            <br />
            If you cancel your reservation after a specific date, you may be
            subject to cancellation charges.
          </p>
          <div className={styles.modalTable}>
            <div className={styles.modalRow}>
              <div className={styles.modalColumn}>
                <p>Cancel After</p>
              </div>
              <div className={styles.modalColumn}>
                <p>Penalty</p>
              </div>
            </div>
            <div className={styles.modalRow}>
              <div className={styles.modalColumn}>
                <p>95 or more days prior to the trip</p>
              </div>
              <div className={styles.modalColumn}>
                <p>Full Refund (excluding $150 administrative fee)</p>
              </div>
            </div>
            <div className={styles.modalRow}>
              <div className={styles.modalColumn}>
                <p>60 or more days prior to the trip</p>
              </div>
              <div className={styles.modalColumn}>
                <p>50% Refund</p>
              </div>
            </div>
            <div className={styles.modalRow}>
              <div className={styles.modalColumn}>
                <p>30 days or les prior to the trip</p>
              </div>
              <div className={styles.modalColumn}>
                <p>No Refund</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <img src="../assets/icons/check-circle.png" />
          <h2>Awesome!</h2>
          <h3>Your booking has been confirmed!</h3>
          <h3>Check your email for details.</h3>
          <h3>See you in Lima!</h3>
          <button onClick={()=>{router.push("/");setShowSuccessModal(false);        }}>Close</button>
        </div>
      </div>
      <Navbar />
      <div className={styles.row}>
        <div className={showDetails ? `${styles.column1} ${styles.showDetails}`: `${styles.column1}` }>
          <div className={styles.sidebar}>
            <Title
              color={"white"}
              small={true}
              text={"Week on Lima"}
              left={true}
            />
            <h2>Sept. 3, 2023 - Sept. 10, 2023</h2>
            <button className={!showDetails ? styles.back : `${styles.back} ${styles.noShowButton}`}>Go Back</button>

            <button className={showDetails ? styles.back : `${styles.back} ${styles.noShowButton}`} onClick={()=>{setShowDetails(false)}}>Go Back</button>
            <div
              className={
                currentStep > 0
                  ? styles.sidebarContent
                  : styles.sidebarContentHidden
              }
            >
              <div
                className={
                  currentStep > 0 && currentStep < guestsInfoStep
                    ? `${styles.sidebarElement} ${styles.currentOption}`
                    : styles.sidebarElement
                }
              >
                <h3>Rooms</h3>
                <div className={styles.roomsSummary}>
                  {[...Array(rooms)].map((room, index) => {
                    return (
                      <div className={styles.roomDetail}>
                        <h2>Room {index + 1}</h2>
                        {[...Array(guests[index])].map((guest, index2) => {
                          return <h4>Guest {index2 + 1}</h4>;
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className={
                  currentStep >= guestsInfoStep && currentStep < paymentStep
                    ? `${styles.sidebarElement} ${styles.currentOption}`
                    : styles.sidebarElement
                }
              >
                <h3>Guest Info</h3>
              </div>
              <div
                className={
                  currentStep == paymentStep
                    ? `${styles.sidebarElement} ${styles.currentOption}`
                    : styles.sidebarElement
                }
              >
                <h3>Payment</h3>
              </div>
              {currentStep >= guestsInfoStep && (
                <div className={styles.totalPrice}>
                  <h5>Total Price:</h5>
                  <h6>${totalPrice}.00</h6>
                </div>
              )}
            </div>
            <h4
              className={
                currentStep > 0
                  ? styles.cancellationButton
                  : styles.cancellationButtonHidden
              }
              onClick={() => {
                setShowCancellation(true);
              }}
            >
              View Cancellation Policy
            </h4>
            <div className={styles.map}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 959 1401"
              >
                <path
                  id="Color_Fill_1"
                  data-name="Color Fill 1"
                  className={styles.svgElem1}
                  d="M602,135c34.9,0.26,21,33.536,29,40,5.263,3.282,51.506,7.986,61,4l21-17c16.1-4.221,28.742,9.677,39,14,5.842-4.234,13.8-12.954,26-10,9.934,2.405,16.289,11.3,24,16,15.548,9.482,55.584,9.882,51,38-4.653,28.544-27.21,46.557-41,67,20.777-.6,55.711,29.2,49,48-10.236,25.9-48.7,4.82-68,1-13.909,25.677-46.142,16.629-79,24-20.869,4.682-31.163,22.211-46,33l-22,12q-4.5,20-9,40l-14,18c-3.842,14.84,11.225,26.387,2,40-11.149,16.451-35.983,13.433-45,34,1.819,6.871,7.843,14.8,4,24-3.176,5.885-9.895,7.149-15,11,12.347,16.537,21.293,29.372,27,54,22.831,10.479,8.394,10.068,19,23l10,4c11.375,8.178,17.7,29.786,11,47,38.428-.63,52.38,16.919,63,44h47c22.8-8.464,30.548-44.535,65-39l3,2c8.79,34.58-5.882,73.9-1,112,21.608,7.11,38.045-12.9,60-4,39.708,16.1,61.6,92.049,85,128-3.312,16.171-14.43,23.226-24,33q0.5,23,1,46-2.5,8.505-5,17c2.364,11.98,17.652,19.91,12,37-7.215,21.82-31.458,29.15-37,53,7.6,5.67,13.107,13.56,17,23-4.837,10.06-11.773,16.59-18,25,0.087,38.53,28.51,32.5,41,57-11.683,28.82-35.756,47.1-54,71,6.018,21.11.16,38.24-19,43,3.034,97.94-86.855,30.59-115,12-8.289-5.47-18.61-6.64-23-16q-2-10.995-4-22l-47-24-20-21q-22-7.995-44-16-12-7.995-24-16c-17.906-8.11-39.367-11.54-54-23q-3-4.995-6-10-9-2.505-18-5l-11-12-40-18q-16.5-20.505-33-41l-26-15c-0.333-.33-0.667-0.67-1-1-5.57-4.97-4.962-12.21-9-19q-11-10.995-22-22c-0.667-.33-1.333-0.67-2-1q-0.5-9-1-18c-4.873-7.96-12.333-4.77-14-18q11-9.495,22-19c-4.882-12.5-12.623-18.16-19-28-11.7-18.055-14.42-42.137-28-58-7.981-9.323-24.037-8.217-30-20-4.617-10.239,7.13-21.9,3-32l-33-25q-0.5-14-1-28l-34-52q-5.5-19.5-11-39l-30-50q-9-27.5-18-55c-8.7-15.02-26.258-21.664-35-36q-12.5-30-25-60c-11.524-17.08-38.713-29.714-58-39-7.955,5.841-14.833,6.888-23,1-6.7-33.961-41.054-39.661-6-72L13,403c-2.872-8.5,3.751-15.151,1-20C8.971,372.37-3.94,364,0,345c7.152-34.49,37.345-45.058,54-69l6-12c8.521-6.442,27.087-8.338,39-5,10.029,24.441,18.363,38.684,1,61,12.4,2.023,16.534,10.36,26,13,13.28,3.7,18.566-4.32,27,7,6.046,8.115,7.184,25.928,17,30h6c4.827-12.955,12.185-17.5,21-26,0.287-26.926,14.9-37.393,20-58,2.432-9.822-.025-19.281,5-26l21-12q4.5-9,9-18c15.318-11.039,40.325-10.469,59-18,48.988-19.756,132.621-80.318,134-145-7.688-6.1-5.756-16.545-12-24L419,33c0.884-29.24,11.707-10.945,29-19l5-7c9.052-3.621,27.862,4.357,34,7,14.87,6.4,32.8,18.8,41,32,5.575,8.978,8.1,25.611,17,31C569.075,91.579,602.1,96.888,602,135ZM464,36l-6,3,14,14v1c0.326,14.511,1.97,35.213-3,45-10.051,3.568-43.1,63.069-56,76-21.41,21.459-47.81,41.695-78,54l-62,19c-15.723,11.075-8.122,29.463-33,40-0.289,19.669-12.96,25.74-17,40q0.5,10,1,20l-14,19-21,29c-25.857,17.512-49.844-19.9-55-38-14.492.3-19.535-7.256-30-8-9.32-.662-21.178,14.783-34,6-8.23-5.638-13.223-40-6-51,3.366-5.126,13.188-7.446,19-10l-1-3-1-4-3,1c-17.879,15.611-50.15,36.055-51,67l14,21c6.417,16.267-4.792,21.374,8,31,8.322,17.612,20.3,39.738-3,52l3,4c26.082,8.485,76.676,39.06,90,60l27,63,29,27,18,29c4.976,8.676,2.98,20.442,7,31l16,20q2.5,12.5,5,25l12,16q2.5,14.5,5,29c12.321,29.358,33.064,47.871,41,84,13.857,6.809,29.346,17.34,33,34q1,11.5,2,23l20,16,26,56c8.742,14.8,22.993,24.41,26,45q-4,19.005-8,38c10.954,8.42,13.589,22.98,22,34q15.5,10.005,31,20,3,7.995,6,16l16,12q3,6.495,6,13,22,10.005,44,20l10,12q10,2.505,20,5,9.5,9.495,19,19,19,6.495,38,13l29,18q21,7.995,42,16,10.5,10.995,21,22c11.635,7.35,24.531,6.83,37,16,5.3,3.89,17.033,11.25,19,18q0.5,8.505,1,17c7.282,14.39,34.277,25.52,49,33,7.044,3.58,27.464,16.16,35,6,4.756-11.34.653-31.21,6-41q10-4.005,20-8-4-4.005-8-8c-0.667-3.33-1.333-6.67-2-10,11.07-17.54,27.649-38.73,45-50q1.5-7.995,3-16c-32.807-19.51-36.081-52.58-17-87-22.229-34.17,6.912-61.08,23-86-4.4-8.4-16.963-24.48-12-37q5-5.5,10-11,0.5-30.5,1-61c6.006-2.791,11.217-5.989,15-11-15.749-33.19-28.74-79.089-57-100-14.517-10.742-41.492,4.975-64-2-29.365-9.1-19.078-62.763-19-98-29.422,20.617-61.158,33.022-108,22q-7.5-18.5-15-37c-23.166-5.935-50.518.313-64-15,0.009-15.383,8.27-18.6,14-28-2.549-14.259-16.109-12.41-22-22l-4-14c-3.77-5.994-12.824-7.672-16-15l-3-15-13-12q-0.5-7.5-1-15l-16-16c0.034-14.613,4.655-25.462,16-29-2.791-35.827,21.033-48.923,47-59-2.269-14.808-5.468-34.192,2-46l12-14c5.746-12.942,1.2-31.531,7-43,8.049-2.473,24.465-6.588,29-13l5-12,12-1,17-14c20.12-12.966,53-19.57,84-20,5.919-11.693,13.525-9.822,22-18-5.883-1.523-7.528-3.395-11-7-0.028-38.884,37.391-47.054,43-79-8.9-6.073-23.6-7.529-33-14l-13-14c-17.465,8.518-43.859,12.405-56-4l-40,18c-26.21,7.182-72.37-1.943-80-18-4.5-7.935-.55-20.211,0-30-24.824-1.989-27.8-18.711-32-41-19.254-1.475-48.67-18.269-55-33q-4-13-8-26C498.836,50.242,476.822,40.3,464,36Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.column2}>
          <button className={styles.buttonDetails} onClick={()=>{setShowDetails(true)}}>View Details</button>
          <div className={styles.steps}>
            <div
              className={styles.step}
              style={{ marginLeft: (currentStep * -100).toString() + "%" }}
            >
              <div className={styles.containerImg}>
                <img src="assets/images/beach.jpg" />
              </div>
              <div className={styles.container}>
                <div className={styles.row1}>
                  <div className={styles.included}>
                    <h2>WHAT'S INCLUDED</h2>
                    <ul>
                      <li>
                        Daily Pickleball Clinics led by our World-Class Pros
                      </li>
                      <li>
                        7-Night stay at the 5-Star Country Club Lima Hotel
                      </li>
                      <li>Fine-Dining at Award- Winning Restaurants</li>
                      <li>
                        Chef Experience- Learn to Cook from a Professional Chef
                      </li>
                      <li>Huaca Pucllana & Pachacamac Museum Tours</li>
                      <li>Historic Tour of Lima</li>
                      <li>D'Paso- Horse shows</li>
                      <li>
                        Cajon Music Classes- An Immersive Cultural Experience
                      </li>
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
                    <button
                      onClick={() => {
                        setCurrentStep(1);
                      }}
                      className={styles.continue}
                    >
                      Continue
                    </button>
                    <p>Estimated price total for 2 guests: $10200 USD</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.step}>
              <div className={`${styles.container} ${styles.spaceAround}`}>
                <div>
                  <Title
                    small={true}
                    text={"How many rooms do you need?"}
                    left={true}
                  />
                  <h5>Most rooms sleep up to 2 guests</h5>
                  <div className={styles.add}>
                    <button
                      disabled={rooms == 1}
                      onClick={() => {
                        removeRooms();
                      }}
                    >
                      <img src="assets/icons/minus.png" />
                    </button>
                    <h6>{rooms}</h6>
                    <button
                      onClick={() => {
                        addRoom();
                      }}
                    >
                      <img src="assets/icons/plus.png" />
                    </button>
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.continue}
                    onClick={() => {
                      defaultGuests();
                      setCurrentStep(currentStep + 1);
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            {[...Array(rooms)].map((room, index) => {
              return (
                <div className={styles.step}>
                  <div className={`${styles.container} ${styles.spaceAround}`}>
                    <div>
                      <Title
                        small={true}
                        text={`How many guests in Room ${index + 1}?`}
                        left={true}
                      />
                      <h5>Most rooms sleep up to 2 guests</h5>
                      <div className={styles.add}>
                        <button
                          disabled={guests[index] == 1}
                          onClick={() => {
                            removeGuest(index);
                          }}
                        >
                          <img src="assets/icons/minus.png" />
                        </button>
                        <h6>{guests[index]}</h6>
                        <button
                          disabled={guests[index] == 2}
                          onClick={() => {
                            addGuest(index);
                          }}
                        >
                          <img src="assets/icons/plus.png" />
                        </button>
                      </div>
                    </div>
                    <div className={styles.buttonContainer}>
                      <button
                        className={styles.continue}
                        onClick={() => {
                          setCurrentStep(currentStep + 1);
                          if (index + 1 == rooms) {
                            defaultGuestInfo();
                          }
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {[...Array(rooms)].map((room, index) => {
              return (
                <div className={`${styles.step} ${styles.start}`}>
                  <Title
                    small={true}
                    text={`Room ${index + 1} - Who's traveling?`}
                    left={true}
                  />
                  <h5>
                    Time to get personal — tell us a bit more about who is
                    traveling.{" "}
                  </h5>
                  <div className={`${styles.container} ${styles.margin}`}>
                    <Title
                      small={true}
                      text={"Guest Information"}
                      left={true}
                    />
                    <div>
                      {guestsInfo[index] && (
                        <div className={styles.guests}>
                          {guestsInfo[index].map((guest, index2) => {
                            if (index2 == 0) {
                              return (
                                <h2
                                  onClick={() => {
                                    changeSelectedGuest(index, index2);
                                  }}
                                  className={
                                    selectedGuest == index2
                                      ? styles.selected
                                      : ""
                                  }
                                >
                                  Primary Guest
                                </h2>
                              );
                            } else {
                              return (
                                <h2
                                  onClick={() => {
                                    changeSelectedGuest(index, index2);
                                  }}
                                  className={
                                    selectedGuest == index2
                                      ? styles.selected
                                      : ""
                                  }
                                >
                                  Guest {index2 + 1}
                                </h2>
                              );
                            }
                          })}
                        </div>
                      )}
                      <div className={styles.inputContainer}>
                        <div className={styles.input}>
                          <h3>First Name</h3>
                          <input
                            placeholder=" "
                            required
                            value={selectedGuestInfo.first_name}
                            onChange={(event) =>
                              setSelectedGuestInfo((prev) => ({
                                ...prev,
                                first_name: event.target.value,
                              }))
                            }
                            className={
                              first_nameError != undefined ? styles.invalid : ""
                            }
                          />
                          <h2>First Name</h2>
                        </div>
                        <div className={styles.input}>
                          <h3>Last Name</h3>
                          <input
                            placeholder=" "
                            required
                            value={selectedGuestInfo.last_name}
                            onChange={(event) =>
                              setSelectedGuestInfo((prev) => ({
                                ...prev,
                                last_name: event.target.value,
                              }))
                            }
                            className={
                              last_nameError != undefined ? styles.invalid : ""
                            }
                          />
                          <h2>Last Name</h2>
                        </div>
                        <div className={styles.input}>
                          <h3>Gender</h3>
                          <select
                            placeholder=" "
                            required
                            value={selectedGuestInfo.gender}
                            onChange={(event) =>
                              setSelectedGuestInfo((prev) => ({
                                ...prev,
                                gender: event.target.value,
                              }))
                            }
                            className={
                              genderError != undefined
                                ? styles.invalid
                                : getClassSelect(gender)
                            }
                          >
                            <option value="" disabled selected>
                              Gender
                            </option>
                            <option value="Woman">Woman</option>
                            <option value="Man">Man</option>
                            <option value="Genderqueer/Non-Binary">
                              Genderqueer/Non-Binary
                            </option>
                          </select>
                        </div>
                        <div className={styles.input}>
                          <h3>Date of Birth</h3>
                          <div className={styles.inputGroup}>
                            <div
                              className={`${styles.input} ${styles.inputMonth}`}
                            >
                              <select
                                placeholder=" "
                                required
                                value={selectedGuestInfo.date_of_birth.month}
                                onChange={(event) =>
                                  setSelectedGuestInfo((prev) => ({
                                    ...prev,
                                    date_of_birth: {
                                      day: selectedGuestInfo.date_of_birth.day,
                                      month: event.target.value,
                                      year: selectedGuestInfo.date_of_birth
                                        .year,
                                    },
                                  }))
                                }
                                className={
                                  monthError != undefined
                                    ? styles.invalid
                                    : getClassSelect(month)
                                }
                              >
                                <option value="" disabled selected>
                                  Month
                                </option>
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
                            <div
                              className={`${styles.input} ${styles.inputMonth}`}
                            >
                              <select
                                placeholder=" "
                                required
                                value={selectedGuestInfo.date_of_birth.day}
                                onChange={(event) =>
                                  setSelectedGuestInfo((prev) => ({
                                    ...prev,
                                    date_of_birth: {
                                      day: event.target.value,
                                      month:
                                        selectedGuestInfo.date_of_birth.month,
                                      year: selectedGuestInfo.date_of_birth
                                        .year,
                                    },
                                  }))
                                }
                                className={
                                  dayError != undefined
                                    ? styles.invalid
                                    : getClassSelect(day)
                                }
                              >
                                <option value="" disabled selected>
                                  Day
                                </option>
                                {[...Array(31)].map((e, i) => {
                                  return (
                                    <option value={(i + 1).toString()}>
                                      {i + 1}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            <div
                              className={`${styles.input} ${styles.inputMonth}`}
                            >
                              <select
                                placeholder=" "
                                required
                                value={selectedGuestInfo.date_of_birth.year}
                                onChange={(event) =>
                                  setSelectedGuestInfo((prev) => ({
                                    ...prev,
                                    date_of_birth: {
                                      day: selectedGuestInfo.date_of_birth.day,
                                      month:
                                        selectedGuestInfo.date_of_birth.month,
                                      year: event.target.value,
                                    },
                                  }))
                                }
                                className={
                                  yearError != undefined
                                    ? styles.invalid
                                    : getClassSelect(year)
                                }
                              >
                                <option value="" disabled selected>
                                  Year
                                </option>
                                {[...Array(120)].map((e, i) => {
                                  return (
                                    <option value={(2023 - i).toString()}>
                                      {2023 - i}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className={styles.input}>
                          <h3>Citizenship</h3>
                          <select
                            placeholder=" "
                            required
                            value={selectedGuestInfo.country}
                            onChange={(event) =>
                              setSelectedGuestInfo((prev) => ({
                                ...prev,
                                country: event.target.value,
                              }))
                            }
                            className={
                              countryError != undefined
                                ? styles.invalid
                                : getClassSelect(country)
                            }
                          >
                            <option value="" disabled selected>
                              Citizenship
                            </option>
                            {countryList.map((country, index) => {
                              return (
                                <option value={index}>{country.country}</option>
                              );
                            })}
                          </select>
                        </div>
                        <div className={styles.input}>
                          <h3>State/province of residency</h3>
                          <select
                            placeholder=" "
                            required
                            value={selectedGuestInfo.state}
                            onChange={(event) =>
                              setSelectedGuestInfo((prev) => ({
                                ...prev,
                                state: event.target.value,
                              }))
                            }
                            className={
                              stateError != undefined
                                ? styles.invalid
                                : getClassSelect(state)
                            }
                          >
                            <option value="" disabled selected>
                              State/province of residency
                            </option>
                            {countryList[selectedGuestInfo.country]?.states && (
                              <>
                                {countryList[
                                  selectedGuestInfo.country
                                ].states.map((state, index) => {
                                  return <option value={state}>{state}</option>;
                                })}
                              </>
                            )}
                          </select>
                        </div>
                        <div className={styles.input}>
                          <h3>Email</h3>
                          <input
                            placeholder=" "
                            required
                            value={selectedGuestInfo.email}
                            onChange={(event) =>
                              setSelectedGuestInfo((prev) => ({
                                ...prev,
                                email: event.target.value,
                              }))
                            }
                            className={
                              emailError != undefined ? styles.invalid : ""
                            }
                          />
                          <h2>Email</h2>
                        </div>
                        <div className={styles.input}>
                          <h3>Phone</h3>
                          <div className={styles.inputGroup}>
                            <div
                              className={`${styles.input} ${styles.inputMonth}`}
                            >
                              <select
                                placeholder=" "
                                required
                                value={selectedGuestInfo.phone.code}
                                onChange={(event) =>
                                  setSelectedGuestInfo((prev) => ({
                                    ...prev,
                                    phone: {
                                      code: event.target.value,
                                      number: selectedGuestInfo.phone.number,
                                    },
                                  }))
                                }
                                className={
                                  codeError != undefined
                                    ? styles.invalid
                                    : getClassSelect(code)
                                }
                              >
                                <option value="" disabled selected>
                                  Code
                                </option>

                                {countryCodes.map((code, index) => {
                                  return (
                                    <option value={code.dial_code}>
                                      {code.name} {code.dial_code}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            <div
                              className={`${styles.input} ${styles.inputMonth} ${styles.inputPhone}`}
                            >
                              <input
                                placeholder=" "
                                required
                                value={selectedGuestInfo.phone.number}
                                onChange={(event) =>
                                  setSelectedGuestInfo((prev) => ({
                                    ...prev,
                                    phone: {
                                      code: selectedGuestInfo.phone.code,
                                      number: event.target.value,
                                    },
                                  }))
                                }
                                className={
                                  numberError != undefined ? styles.invalid : ""
                                }
                              />
                              <h2>Phone</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.buttonContainer}>
                      <button
                        className={styles.continue}
                        onClick={() => {
                          if (checkGuestInfoByRoom(index)) {
                            if (index + 1 < rooms) {
                              changeRoom(index, selectedGuest);
                            }
                            setCurrentStep(currentStep + 1);
                          }
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className={`${styles.step} ${styles.start}`}>
              <Title
                small={true}
                text={`How would you like to pay?`}
                left={true}
              />
              <h5>Total Price: ${totalPrice}.00</h5>
              <div className={`${styles.container} ${styles.margin}`}>
                <Title small={true} text={"Pay with credit card"} left={true} />
                <h5>
                  Add your credit card information below to make a payment.
                </h5>
                <div>
                  <div className={styles.inputContainer}>
                    <div className={styles.input}>
                      <h3>First Name</h3>
                      <input placeholder=" " />
                      <h2>First Name</h2>
                    </div>
                    <div className={styles.input}>
                      <h3>Last Name</h3>
                      <input placeholder=" " />
                      <h2>Last Name</h2>
                    </div>
                    <div className={styles.input}>
                      <h3>Card Number</h3>
                      <input placeholder=" " />
                      <h2>Card Number</h2>
                    </div>
                    <div className={styles.input}>
                      <h3>Expiration Date</h3>
                      <div className={styles.inputGroup}>
                        <div className={`${styles.input} ${styles.inputMonth}`}>
                          <input placeholder=" " />
                          <h2>Month</h2>
                        </div>
                        <div className={`${styles.input} ${styles.inputMonth}`}>
                          <input placeholder=" " />
                          <h2>Year</h2>
                        </div>
                        <div className={`${styles.input} ${styles.inputMonth}`}>
                          <input placeholder=" " />
                          <h2>CVV</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.continue}
                    onClick={() => {
                      book();
                    }}
                  >
                    Book This Adventure
                  </button>
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
