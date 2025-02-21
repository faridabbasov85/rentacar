import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Reservation.module.css";

const Reservation = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const { data } = await axios.get("http://localhost:5500/reservation");
        setReservations(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reservations:", error);
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  // Rezervasiyanı təsdiqləyən funksiya
  const handleConfirm = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/reservation/${id}`);
      setReservations(reservations.filter((reservation) => reservation._id !== id));
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/reservation/${id}`);
      setReservations(reservations.filter((reservation) => reservation._id !== id));
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  if (loading) return <div className={styles.loading}>Yüklənir...</div>;

  if (!reservations.length) return <div className={styles.error}>Heç bir rezervasiya yoxdur!</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Rezervasiya Məlumatları</h1>
      <div className={styles.cardContainer}>
        {reservations.map((reservation) => (
          <div className={styles.card} key={reservation._id}>
            <div className={styles.cardHeader}>
              <h2>{reservation.name} {reservation.surname}</h2>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.item}>
                <strong>Mobil Nömrə:</strong> {reservation.phoneNumber}
              </div>
              <div className={styles.item}>
                <strong>Yaş:</strong> {reservation.age}
              </div>
              <div className={styles.item}>
                <strong>Gün Sayı:</strong> {reservation.days}
              </div>
              <div className={styles.item}>
                <strong>Götürmə Tarixi:</strong> {reservation.date}
              </div>
            </div>
            <div className={styles.cardFooter}>
              <button
                className={styles.confirmButton}
                onClick={() => handleConfirm(reservation._id)}
                disabled={reservation.confirmed}
              >
                Təsdiqlə
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(reservation._id)}
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservation;
