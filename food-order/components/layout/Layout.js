import React from "react";
import styles from "./Layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">Food order project</Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <span>Food order — Next 13</span>
      </footer>
    </>
  );
}
