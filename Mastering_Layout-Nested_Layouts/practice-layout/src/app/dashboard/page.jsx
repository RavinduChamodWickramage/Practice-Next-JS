import React from "react";
import styles from "./dashboard.module.css";
import Link from "next/link";

function page() {
  return (
    <>
      <div className={styles.dashboard}>
        <h1>Profile Page</h1>
        <ul>
          <li>
            <Link href="/dashboard/adminDashboard" className={styles.link}>
              Admin Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/customerDashboard" className={styles.link}>
              Customer Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default page;
