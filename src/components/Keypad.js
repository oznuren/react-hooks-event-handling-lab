// Code Keypad Component Here
import React from "react";
function Keypad() {
  const inputHandler = () => {
    console.log("Entering password...");
  };
  return (
    <div className="keypad">
      <input type="password" onChange={inputHandler} />
    </div>
  );
}

export default Keypad;
