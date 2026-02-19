import React from "react";
import carsData from "@/data/carsData";
import CarCard from "@/components/CarCard";
import styles from "./CarList.module.css";

function CarList() {
  return (
    <div className={styles.carListContainer}>
      {carsData.map((car) => (
        <CarCard key={car.id} carData={car} />
      ))}
    </div>
  );
}

export default CarList;
