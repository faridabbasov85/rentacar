import React from 'react'
import styles from './Register.module.css'
import logo from "../photo/logo.png"
import { useNavigate } from 'react-router-dom'
const Register = () => {

  const navigation = useNavigate()
  return (
    <div className={styles.Register}>
    <div className={styles.Left}>
      <img src={logo} alt="" />
    </div>
    <div className={styles.Right}>
      <p>SIGN UP</p>
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
        <a onClick={() => navigation("/login")} href="">
          Don't have an account? <span>Sing in</span>
        </a>
      </form>
    </div>
  </div>
  )
}

export default Register