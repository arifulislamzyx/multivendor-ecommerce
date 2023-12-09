"use client";
import React from "react";
import Checkout from "@/Components/payment/checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.Secret_Pulicable_key);
console.log(stripePromise);

const page = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <h1>this is payment pagae</h1>
      </Elements>
    </div>
  );
};

export default page;
