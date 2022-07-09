// Code EyesOnMe Component Here
import React, { useState } from "react";
function EyesOnMe() {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
    console.log("Good!");
  };
  const handleBlur = () => {
    setIsFocused(false);
    console.log("Hey! Eyes on me!");
  };
  return (
    <div className="eyes-on-me">
      <button onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
