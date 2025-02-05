import React from "react";
import styles from "./FourSection.module.css";
const FourSection = () => {
  return (
    <div className={styles.Container} >
      <div className={styles.image}>
        <img src="https://cdn.worldvectorlogo.com/logos/bmw-7.svg" alt="Bmw" />
      </div>
      <div className={styles.image}>
        <img
          src="https://cdn.worldvectorlogo.com/logos/logo-porsche2.svg"
          alt="Porsche"
        />
      </div>
      <div className={styles.image}>
        <img
          src="https://cdn.worldvectorlogo.com/logos/mercedes-benz-9.svg"
          alt="Mercedes"
        />
      </div>
      <div className={styles.image}>
        <img
          src="https://kralrent.az/frontend/img/brands/3334-lexus.webp"
          alt="Lexus"
        />
      </div>
      <div className={styles.image}>
        <img
          src="https://cdn.worldvectorlogo.com/logos/land-rover-2.svg"
          alt="Land Rover"
        />
      </div>
      <div className={styles.image}>
        <img src="https://cdn.worldvectorlogo.com/logos/kia-4.svg" alt="Kia" />
      </div>
    </div>
  );
};

export default FourSection;
