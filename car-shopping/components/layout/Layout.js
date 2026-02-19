import React from "react";
import styles from "./Layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">car shopping project</Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <Link
          href="https://github.com/ftmehsm/next-13-tutorial/tree/main/car-shopping"
          target="_blank"
        >
          this is practice project by ftmehsm
        </Link>
      </footer>
    </>
  );
}
