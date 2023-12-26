"use client";

import CheckoutForm from "./ChekoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../src/Hooks/useCart";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NsT1YLPZwWYMV1RrKWdFrO9tNMEdqojFKmeELW5xQkdHSHGfxHTzhImcylAsbsHOkQlOR2CnF2hw3dpNFmVRJbk00VUZTXep6"
);
console.log("key", process.env.Stripe_PK_Key_For_Validation);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="p-5 bg-slate-300 w-full items-center">
      <h2 className="text-3xl text-white text-center mb-2">
        Pay With Secutrity
      </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
