"use client";
import React, { useEffect, useState } from "react";

const DynamicClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="p-5 m-5 bg-red-400 text-white font-bold text-xl-center text-center">
      <h2>Dynamic Clock</h2>
      <p>Current Time: {time}</p>
    </div>
  );
};

export default DynamicClock;
