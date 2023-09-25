import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import styles from "./upcomingTrips.module.css";
import { Title } from "../Title";
import moment from "moment";
import axios from "axios";
import { toast } from "react-toastify";
import { Reveal } from "../Reveal";

const images = [
  "../assets/images/peru/23.jpeg",
  "../assets/images/peru/10.jpg",
  "../assets/images/pickleball.jpg",
  "../assets/images/Peru1.jpg",
];

export const Payment = ({ clientSecret,book }) => {
  const stripe = useStripe();
  const elements = useElements();

  const book2 = async () => {
    const cardElement = elements?.getElement("card");

    try {
      if (!stripe || !cardElement) return null;

      const { data } = await axios.post(
        `${process.env.WEBAPP_URL}api/create-payment-intent`,
        { amount: 89 }
      );
      console.log("dataaa", data);
      const clientSecret = data.clientSecret;

      await stripe?.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
        billing_details: { name: "Valeska Silva", email: "ve@gmail.com" },
      });
    } catch (error) {
      console.log(error);
    }
  };



  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const {paymentIntent,error}= await stripe.confirmPayment({
      elements,
      redirect: "if_required"
    });

console.log(paymentIntent)
    if(paymentIntent?.status=="succeeded"){
      console.log('kkk')
book(paymentIntent.id)

    }
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if(error){
    if (error?.type === "card_error" || error?.type === "validation_error") {
 
      toast.error(error.message);
    } else {
      toast.error("An unexpected error occurred.");
      
    }
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };


  return (
    <>
      <Title small={true} text={`How would you like to pay?`} left={true} />
      <Reveal>
      <h5>Total Price: $100.00</h5>
      </Reveal>
      <div className={`${styles.container} ${styles.margin}`}>
        <Title small={true} text={"Pay with credit card"} left={true} />
        <Reveal>
        <h5>Add your credit card information below to make a payment.</h5>
        </Reveal>
        <div>
          <Reveal width="100%">
          <form id="payment-form" onSubmit={handleSubmit} className={styles.payment}>
            <LinkAuthenticationElement
              id="link-authentication-element"
              onChange={(e) => setEmail(e.target.value)}
            />
            <PaymentElement
              id="payment-element"
              options={paymentElementOptions}
            />
         
            {/* Show any error or success messages */}
            {/* {message && <div id="payment-message">{message}</div>} */}
          </form>
          </Reveal>
        </div>
        <div className={styles.buttonContainer}>
          <Reveal>
          <button
           disabled={isLoading || !stripe || !elements}
            className={styles.continue}
            onClick={handleSubmit}
          >
            Book This Adventure
          </button>
          </Reveal>
        </div>
      </div>
    </>
  );
};
