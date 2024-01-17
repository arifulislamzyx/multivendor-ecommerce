import React from "react";

const NavHelmet: React.FC = () => {
  return (
    <div className="flex justify-between max-w-[1150px] mx-auto">
      <div>
        <h4>FREE Express Shipping On Orders $99+</h4>
      </div>
      <div className="flex">
        <p>USD</p>
        <p>Eng</p>
        <p>Our Stores</p>
        <p>Track Your Order</p>
        <p>Help</p>
        <p>Wishlist</p>
      </div>
    </div>
  );
};

export default NavHelmet;
