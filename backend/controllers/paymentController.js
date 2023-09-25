import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const checkout=async(req, res, next)=> {



  const { amount } = req.body;


  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "USD",
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    // console.log(error)
    return res.status(500).json({ error: 'Internal server error' });
   
  }
}

export const schedulePayment=async(req, res)=> {


    const { paymentIntentId,amount,payment_method } = req.body;

    console.log(paymentIntentId)
  
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(amount) * 100,
            currency: "USD",
            payment_method
            
          });
  
          
      res.status(200).json({ status: paymentIntent.status });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Unable to schedule payment' });
    }
  }