import React from "react";
import styles from "./CarCard.module.css";
import Link from "next/link";

function CarCard({ carData }) {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    price,
    description,
    image,
    category,
  } = carData;
  return (
    <Link href={`/cars/${id}`} className={styles.cardContainer}>
      <img src={image} alt={name} className={styles.cardImage} />
      <span className={styles.cardTitle}>
        {name}-{model}
      </span>
      <span className={styles.cardYear}>
        {year}-{distance}km
      </span>
      <div className={styles.cardFooter}>
        <span className={styles.price}>${price}</span>
        <span>{location}</span>
      </div>
    </Link>
  );
}

export default CarCard;
