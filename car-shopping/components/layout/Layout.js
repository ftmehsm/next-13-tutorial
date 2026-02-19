import React from "react";
import styles from "./Layout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const backHandler = () => {
    if (router.pathname === "/cars" || router.pathname === "/cars/category/[category]") {
      router.push("/");
    } else {
      router.push("/cars");
    }
  };
  return (
    <>
      <header className={styles.header}>
        <button type="button" className={styles.backButton} onClick={backHandler}>Back</button>
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
