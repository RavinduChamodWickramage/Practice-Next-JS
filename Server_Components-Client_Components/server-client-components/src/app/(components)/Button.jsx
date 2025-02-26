"use client";

import React from "react";

function Button() {
  const setAlert = () => {
    alert("Button Clicked");
  };

  return (
    <>
      <button onClick={setAlert}>Click Me</button>
    </>
  );
}

export default Button;
