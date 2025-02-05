import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import  styles from './TwoSection.module.css'
const TwoSection = () => {
  return (
    <div className={styles.Contain}>
      <div className={styles.text}>
        <h2>Seçilmiş avtomobilər</h2>
        <a href="">
          Hamısını göstər <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default TwoSection;
