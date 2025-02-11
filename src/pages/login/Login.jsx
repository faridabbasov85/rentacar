import React from "react";
import styles from "./Login.module.css";
import logo from "../photo/logo.png";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
const Login = () => {
  const navigation = useNavigate()
  return (
    <div className={styles.Login}>
      <div className={styles.Left}>
        <img onClick={() => navigation("/")} src={logo} alt="" />
      </div>
      <div className={styles.Right}>
        <div className={styles.back}>
        <RiArrowGoBackLine onClick={() => navigation("/")} /> 
        </div>
        <p>SIGN IN</p>
        <form action="">
          <input className={styles.input} placeholder="Email" name="email" required type="email" />
          <input
            placeholder="Password"
            required
            minLength="6"
            type="password"
            name="password"
            className={styles.input}
          />
          <button className={styles.Button} type="submit">Login</button>
          <a onClick={() => navigation("/register")} href="">
            Don't have an account? <span>Sing up</span>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
