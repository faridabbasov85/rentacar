import React from "react";
import styles from "./Header.module.css";
import img from "../../pages/photo/logo.png";
import Drawer from "react-modern-drawer";
import { BiMenuAltRight } from "react-icons/bi";
import "react-modern-drawer/dist/index.css";
import { useNavigate } from "react-router-dom";
const Header = () => {

  const navigation = useNavigate()

  const goHome = () => {
    navigation("/")
  }

  const goServices = () => {
    navigation("/services")
  }

  const goRules = () => {
    navigation("/rules")
  }
  
  const goAbout = () => {
    navigation("/aboutus")
  }
  const goFaq = () => {
    navigation("/faq")
  }

  const goContact = () => {
    navigation("/contact")
  }

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className={styles.Contain}>
      <div className={styles.navLogo}>
        <img onClick={goHome} src={img} alt="" />
      </div>
      <div className={styles.navbar}>
        <ul>
          <a href="">Avto Park</a>
          <a onClick={goServices} href="">Xidmətlər</a>
          <a onClick={goRules} href="">İcarə şərtləri</a>
          <a onClick={goFaq} href="">Sual-cavab</a>
          <a onClick={goAbout} href="">Haqqımızda</a>
          <a onClick={goContact} href="">Əlaqə</a>
        </ul>
      </div>
      <div className={styles.navCall}>
        <div className={styles.call}>
          <span>Avtomobil lazımdır?</span>
          <h5>
            <a href="">+994 70 570 68 68</a>
          </h5>
        </div>
      <div className={styles.menu}>
        <button onClick={toggleDrawer}>
          <BiMenuAltRight size={35} />
        </button>
        <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
          <div className={styles.menuBar}>
            <ul>
              <a href="">Avto Park</a>
              <a onClick={goServices} href="">Xidmətlər</a>
              <a onClick={goRules} href="">İcarə şərtləri</a>
              <a onClick={goFaq} href="">Sual-cavab</a>
              <a onClick={goAbout} href="">Haqqımızda</a>
              <a onClick={goContact} href="">Əlaqə</a>
            </ul>
          </div>
        </Drawer>
      </div>
      </div>
    </div>
  );
};

export default Header;