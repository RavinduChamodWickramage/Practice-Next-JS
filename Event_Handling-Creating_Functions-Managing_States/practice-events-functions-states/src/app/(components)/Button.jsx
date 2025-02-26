"use client";

import React from "react";

function Button({ onClick }) {
  return (
    <>
      <button onClick={onClick}>Show</button>
    </>
  );
}

export default Button;
