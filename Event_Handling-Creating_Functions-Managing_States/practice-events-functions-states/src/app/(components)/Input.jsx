"use client";
import React from "react";

function Input({ value, onChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
