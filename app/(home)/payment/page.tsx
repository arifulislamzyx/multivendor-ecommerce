"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.Secret_Pulicable_key as string);
console.log(stripePromise);

const page:React.FC = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <h1>this is payment pagae</h1>
      </Elements>
    </div>
  );
};

export default page;
