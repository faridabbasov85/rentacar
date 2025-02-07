import React, { useState } from "react";
import styles from "./Faq.module.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.Faq}>
      <div className={styles.Contain}>
        <div className={styles.Head}>
          <h1>Sual Cavab</h1>
          <p>
            Bu səhifədə siz şirkətimizə ən çox verilən sualları və cavablarını görə bilərsiniz.
          </p>
        </div>
        <div className={styles.Foot}>
          <div className={styles.question}>
            <button className={styles.questionBtn} onClick={() => toggleQuestion(1)}>
              Avtomobil icarə götürmək üçün nə qədər müddət sürücülük vəsiqəsinə sahib olmalıyam?
              <span>{activeIndex === 1 ? "−" : "+"}</span>
            </button>
            {activeIndex === 1 && (
              <div className={styles.answer}>
                <p>Şirkətimizdən icarə avtomobil götürmək üçün sürücülük vəsiqənizin verilmə tarixindən ən az 2 il keçməlidir.</p>
              </div>
            )}
          </div>

          <div className={styles.question}>
            <button className={styles.questionBtn} onClick={() => toggleQuestion(2)}>
              Avtomobil icarə götürmək üçün yaş həddi varmı?
              <span>{activeIndex === 2 ? "−" : "+"}</span>
            </button>
            {activeIndex === 2 && (
              <div className={styles.answer}>
                <p>Bəli var. Avtomobil icarə götürmək üçün yaş həddi 24 olaraq təyin olunmuşdur.</p>
              </div>
            )}
          </div>

          <div className={styles.question}>
            <button className={styles.questionBtn} onClick={() => toggleQuestion(3)}>
              Avtomobil icarə götürmək üçün minimum depozit məbləği nə qədərdir?
              <span>{activeIndex === 3 ? "−" : "+"}</span>
            </button>
            {activeIndex === 3 && (
              <div className={styles.answer}>
                <p>Hazırda şirkətimizdə 0 Depozit kompaniyası olduğu üçün avtomobilləri depozitsiz icarəyə götürə bilərsiniz.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
