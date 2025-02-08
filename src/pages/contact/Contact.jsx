import React from 'react';
import styles from './Contact.module.css'
const Contact = () => {
  const phoneNumber = "+994705706868";
  const whatsappNumber = "+994705706868";
  const email = "faridra-sp102@code.edu.az";

  return (
    <div className={styles.contactlinks}>
      {/* Telefon nömrəsi */}
      <a href={`tel:${phoneNumber}`} className={styles.contactlink}>
        {phoneNumber}
      </a>

      {/* WhatsApp linki */}
      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className={styles.contactlink}>
        WhatsApp ilə əlaqə
      </a>

      {/* E-mail */}
      <a href={`mailto:${email}`} className={styles.contactlink}>
        E-mail ilə əlaqə
      </a>
    </div>
  );
};

export default Contact;
