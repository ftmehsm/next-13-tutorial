import React from "react";
import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import { categories } from "@/data/carsData";
import CarList from "@/components/CarList";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  if (!category) return null;

  const isValidCategory = categories.includes(category);
  const cars = isValidCategory
    ? carsData.filter((car) => car.category === category)
    : [];

  return (
    <>
      <h1 style={{ margin: "20px", fontSize: "1.5rem" }}>
        {isValidCategory ? capitalize(category) : "Category not found"}
      </h1>
      {isValidCategory ? (
        <CarList cars={cars} />
      ) : (
        <p style={{ margin: "20px" }}>No cars in this category.</p>
      )}
    </>
  );
}
