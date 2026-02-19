import React from "react";
import carsData from "@/data/carsData";
import CarCard from "@/components/CarCard";
import styles from "./CarList.module.css";

function CarList({ cars }) {
  const list = cars ?? carsData;
  return (
    <div className={styles.carListContainer}>
      {list.map((car) => (
        <CarCard key={car.id} carData={car} />
      ))}
    </div>
  );
}

export default CarList;
