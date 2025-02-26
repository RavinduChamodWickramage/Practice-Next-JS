import styles from "./dashboard.module.css";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.row}>Dashboard Header</h1>
        {children}
        <h1 className={styles.row}>Dashboard Footer</h1>
      </div>
    </>
  );
}
