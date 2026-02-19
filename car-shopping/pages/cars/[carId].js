import React from "react";
import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import CarDetails from "@/components/CarDetails";

export default function CarDetailPage() {
  const router = useRouter();
  const { carId } = router.query;
  const car = carsData.find((c) => String(c.id) === carId);

  if (!car) {
    return (
      <>
        <div>Car not found</div>
      </>
    );
  }

  return (
    <div>
      <CarDetails {...car} />
    </div>
  );
}
