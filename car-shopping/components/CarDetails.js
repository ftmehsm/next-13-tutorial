import styles from "./CarDetails.module.css";

function CarDetails(props) {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    image,
    price,
    description,
  } = props;

  return (
    <div className={styles.container}>
      <img src={image} alt={`${name} ${model}`} className={styles.image} />
      <h3 className={styles.header}>
        {name} {model}
      </h3>
      <div className={styles.details}>
        <div>
          <p>Company</p>
          <span>{name}</span>
        </div>
        <div>
          <p>Model</p>
          <span>{model}</span>
        </div>
        <div>
          <p>First registration</p>
          <span>{year}</span>
        </div>
        <div>
          <p>kms driven</p>
          <span>{distance}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <p>Location</p>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.descriptionTitle}>Extra Information</p>
        <p className={styles.descriptionText}>{description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <p>Price:</p>
          <span>${price}</span>
        </div>
      </div>
      <button type="button" className={styles.button}>
        Buy
      </button>
    </div>
  );
}

export default CarDetails;
