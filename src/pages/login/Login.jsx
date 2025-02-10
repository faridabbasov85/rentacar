import React from "react";
import styles from "./Login.module.css";
import logo from "../photo/logo.png";
const Login = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.Left}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.Right}>
        <p>SIGN IN</p>
        <form action="">
          <input placeholder="Email" name="email" required type="email" />
          <input
            placeholder="Password"
            required
            minLength="6"
            type="password"
            name="password"
          />
          <button type="submit">Login</button>
          <a href="">
            Don't have an account? <span>Sing up</span>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
