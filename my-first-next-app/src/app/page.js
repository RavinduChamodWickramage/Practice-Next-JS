import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.home}>
          <div className={styles.home__container}>
            <div className={styles.home__content}>
              <h1 className={styles.home__title}>
                Welcome to My First Next JS Website
              </h1>
              <p className={styles.home__description}>
                This is the beginning of something awesome! Explore and
                discover.
              </p>
              <button className={styles.home__cta}>Learn More</button>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
          Author: Ravindu Wickramage
          <a href="mailto:ravinduchamod1@gmail.com">ravinduchamod1@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}
