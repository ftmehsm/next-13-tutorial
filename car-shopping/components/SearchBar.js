import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const router = useRouter();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please enter minimum and maximum price!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <input
          type="number"
          min={0}
          placeholder="Enter min price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className={styles.input}
        />
        <input
          type="number"
          min={0}
          placeholder="Enter max price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className={styles.input}
        />
      </div>
      <button type="button" onClick={searchHandler} className={styles.button}>
        Search
      </button>
    </div>
  );
}
