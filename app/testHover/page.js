"use client";
import { useState } from "react";

const page = () => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };
  return (
    <div>
      <h3 onMouseLeave={toggleHover} onMouseEnter={toggleHover}>
        Here you can Hover
      </h3>
      {hover && (
        <div className="grid grid-cols-3">
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
          <h2>After you hover you seee this text</h2>
        </div>
      )}
    </div>
  );
};

export default page;
