import CheckoutForm from "./ChekoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../../src/Hooks/useCart";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.Stripe_PK_Key_For_Validation);
console.log("key", stripePromise);

const Payment: React.FC = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div className="p-5 bg-slate-300 w-full h-96 my-auto items-center">
      <h2 className="text-3xl text-white text-center mb-2 my-auto">
        Pay With Security
      </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
