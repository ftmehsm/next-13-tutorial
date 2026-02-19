import { useRouter } from "next/router";
import CarList from "@/components/CarList";
import carsData from "@/data/carsData";

export default function FilteredCars() {
  const router = useRouter();
  const { slug } = router.query;

  const [min, max] = slug || [];

  const filteredData =
    slug?.length === 2
      ? carsData.filter(
          (item) => item.price >= Number(min) && item.price <= Number(max)
        )
      : [];

  if (!router.isReady) return null;

  return (
    <div style={{ padding: "20px" }}>
      {slug?.length !== 2 || !min || !max ? (
        <h3>Invalid filter. Use min and max price.</h3>
      ) : !filteredData.length ? (
        <h3>No cars found in this price range.</h3>
      ) : (
        <CarList cars={filteredData} />
      )}
    </div>
  );
}
