import Link from "next/link";
import styles from "../styles/Home.module.css";
import { categories } from "@/data/carsData";
import CarList from "@/components/CarList";
import SearchBar from "@/components/SearchBar";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Browse by category</h2>
        <ul className={styles.categoryList}>
          {categories.map((cat) => (
            <li key={cat}>
              <Link href={`/cars/category/${cat}`} className={styles.categoryLink}>
                {capitalize(cat)}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <button type="button" className={styles.seeAllCarsButton}>
        <Link href="/cars">See all cars</Link>
      </button>
      <SearchBar />
      <CarList />
    </div>
  );
}
