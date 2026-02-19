import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <button type="button" className={styles.seeAllCarsButton}>
        <Link href="/cars">see all Cars</Link>
      </button>
      
    </div>
  );
}
