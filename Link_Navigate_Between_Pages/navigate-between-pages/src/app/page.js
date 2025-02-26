
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href={"/"} className={styles.link}>
            Home Page
          </Link>
        </li>
        <li>
          <Link href={"/newuser"} className={styles.link}>
            Login Page
          </Link>
        </li>
        <li>
          <Link href={"/signup"} className={styles.link}>
            Register Page
          </Link>
        </li>
        <li>
          <Link href={"/about"} className={styles.link}>
            About Us
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className={styles.link}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link href={"/products"} className={styles.link}>
            Products
          </Link>
        </li>
        <li>
          <Link href={"/products/groceries"} className={styles.link}>
            Groceries
          </Link>
        </li>
        <li>
          <Link href={"/services"} className={styles.link}>
            Services
          </Link>
        </li>
      </ul>

      <Link
        href="https://ravinduwickramageportfolio.web.app/"
        target="_blank"
        className={styles.specialLink}
      >
        Ravindu Wickramage Portfolio
      </Link>
    </>
  );
}
