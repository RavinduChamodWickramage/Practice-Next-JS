import Link from "next/link";
import React from "react";
import styles from "./groceries.module.css";

async function page() {
  const groceries = [
    { id: 1, name: "apple", price: 1.0 },
    { id: 2, name: "banana", price: 2.0 },
    { id: 3, name: "orange", price: 3.0 },
  ];

  return (
    <>
      <h1>Groceries Page</h1>

      <ul>
        {groceries.map((item) => (
          <li key={item.id}>
            <Link href={`/products/groceries/${item.name}`} className={styles.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default page;
