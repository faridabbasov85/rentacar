import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.Contain}>
        <div className={styles.navLogo}>

        </div>
        <div className={styles.navbar}>
            <ul>
                <a href="">Avto Park</a>
                <a href="">Xidmətlər</a>
                <a href="">İcarə şərtləri</a>
                <a href="">Sual-cavab</a>
                <a href="">Haqqımızda</a>
                <a href="">Əlaqə</a>
            </ul>
        </div>
        <div className={styles.navCall}>
            <div>
            </div>
            <div>
                <span>Avtomobil lazımdır?</span>
                <h5><a href="">+994 70 570 68 68</a></h5>
            </div>
        </div>
    </div>
  )
}

export default Header