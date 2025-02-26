"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Button from "./(components)/Button";
import Input from "./(components)/Input";
import Output from "./(components)/Output";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleShowClick = () => {
    setOutputText(inputText);
  };

  return (
    <>
      <h1>Event Handling, Creating Functions & Managing States</h1>
      <div className={styles.column}>
        <Input value={inputText} onChange={handleInputChange} />
        <Button onClick={handleShowClick} />
        <Output text={outputText} />
      </div>
    </>
  );
}
