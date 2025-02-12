import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios"; 
import styles from './TwoSection.module.css';
import { FaManatSign } from "react-icons/fa6";
const TwoSection = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5500/product");
        setCars(response.data); 
      } catch (error) {
        console.error("Xəta baş verdi:", error.message);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className={styles.Contain}>
      <div className={styles.text}>
        <h2>Seçilmiş avtomobillər</h2>
        <a href="">
          Hamısını göstər <FaArrowRight />
        </a>
      </div>

      <div className={styles.cardsContainer}>
        {cars.map((car) => (
          <div key={car._id} className={styles.card}>
            <div className={styles.cardTop}>
              <img src={car.image} alt={car.model} />
            </div>
            <div className={styles.cardBottom}>
              <div className={styles.left}>
                <h3>{car.brand} {car.model}</h3>
              </div>
              <div className={styles.right}>
                <p>{car.year}</p>
              </div>
            </div>
            <div className={styles.detailsRow}>
              <div className={styles.left}>
                <p>{car.capacity} nəfərlik</p>
              </div>
              <div className={styles.left}>
                <p>{car.fuelConsumption}</p>
              </div>
              <div className={styles.right}>
                <p>{car.fuelType}</p>
              </div>
              <div className={styles.right}>
                <p>{car.transmission}</p>
              </div>
            </div>
            <div className={styles.bottomRow}>
              <div className={styles.left}>
                <p>{car.pricePerDay} <FaManatSign /> / günlük</p>
              </div>
              <div className={styles.right}>
                <a href={`details/${car._id}`}>Ətraflı</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwoSection;
