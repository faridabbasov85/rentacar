import React from "react";
import styles from "./Footer.module.css";
import logo from "../../pages/photo/logo.png";
const Footer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.OneFoot}>

        <div className={styles.logo}>
          <div>
            <img src={logo} alt="" />
          </div>
          <p>Günlük və saatlıq avtomobil icarəsi üçün xidmətinizdəyik</p>
        </div>

        <div>
            <h6></h6>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
