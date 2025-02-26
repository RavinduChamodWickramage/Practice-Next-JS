import Image from "next/image";
import styles from "./page.module.css";
import Button from "./(components)/Button";

export default function Home() {
  return (
    <>
      <div>
        <h1>Server & Client Components</h1>
        <Button />
      </div>
    </>
  );
}
