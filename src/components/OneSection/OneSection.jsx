import React from 'react'
import styles from './OneSection.module.css'
import image from '../../pages/photo/Lx570.jpg'
const OneSection = () => {
  return (
    <div className={styles.Contain}>
       <img src={image} alt="" />
    </div>
  )
}

export default OneSection