import React from "react";
import styles from "./Footer.module.css";
import logo from "../../pages/photo/logo.png";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {

  const navigation = useNavigate()

  const goHome = () =>{
    navigation('/')
  }

  const goServices = () =>{
    navigation('/services')
  }
  return (
    <div className={styles.Container}>
      <div className={styles.OneFoot}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img onClick={goHome} src={logo} alt="logo" />
          </div>
          <p>Günlük və saatlıq avtomobil icarəsi üçün xidmətinizdəyik</p>
        </div>

        <div className={styles.company}>
          <h4>Şirkət</h4>
          <a href="">Şirkət haqqında</a>
          <a onClick={goServices} href="">Xidmətlər</a>
          <a href="">İcarə şərtləri</a>
        </div>
        <div className={styles.support}>
          <h4>Dəstək</h4>
          <a href="">Məlumat mərkəzi</a>
          <a href="">Sual-cavab</a>
          <a href="">Əlaqə</a>
        </div>
      </div>
      <div className={styles.TwoText}>
        <div className={styles.about}>
          <span>
            © 111 Rent A Car, 2025. Created by{" "}
            <a href="https://www.instagram.com/faridabbasof/" target="_blank">
              Farid Abbasov
            </a>
          </span>
        </div>

        <div className={styles.icon}>
          <a className={styles.inst} href="">
            <FaInstagram />
          </a>
          <a className={styles.mail} href="">
            <IoMdMail />
          </a>
          <a className={styles.facebook} href="">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
