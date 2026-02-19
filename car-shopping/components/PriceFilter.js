import styles from "./PriceFilter.module.css";

export default function PriceFilter({ minPrice, maxPrice, onMinChange, onMaxChange }) {
  return (
    <section className={styles.filterSection}>
      <h3 className={styles.filterTitle}>Filter by price</h3>
      <div className={styles.priceFilter}>
        <label className={styles.filterLabel}>
          Min price
          <input
            type="number"
            min={0}
            step={1000}
            placeholder="Min"
            value={minPrice}
            onChange={(e) => onMinChange(e.target.value)}
            className={styles.filterInput}
          />
        </label>
        <label className={styles.filterLabel}>
          Max price
          <input
            type="number"
            min={0}
            step={1000}
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => onMaxChange(e.target.value)}
            className={styles.filterInput}
          />
        </label>
      </div>
    </section>
  );
}
