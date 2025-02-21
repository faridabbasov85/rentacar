import React, { useEffect, useState } from "react";
import styles from "./Wishlist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getWishs, deleteWishs } from "../../redux/thunks/wish/wish";
import { FaManatSign } from "react-icons/fa6";
import Header from "../../components/Header/Header";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const Wishlist = () => {
  const [sortOrder, setSortOrder] = useState("date");
  const [favorites, setFavorites] = useState([]);

  const dispatch = useDispatch();
  const { user, loading } = useAuth();

  useEffect(() => {
    dispatch(getWishs());
  }, []);

  const wish = useSelector((state) => state.products.wishlist);

  useEffect(() => {
    if (loading) return;

    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:5500/wishlist/${user.id}`
      );

      if (!data) return;

      const carsId = data.map((fav) => fav.carId);

      const cars = await Promise.all(
        carsId.map(async (carId) => {
          const { data } = await axios.get(
            `http://localhost:5500/product/${carId}`
          );
          return data;
        })
      );

      const finalCars = cars.map((car) => car[0]);
      setFavorites(finalCars);
    };

    fetchData();
  }, [user, loading]);

  useEffect(() => {
    if (favorites) {
      const sortedFavorites = [...favorites].sort((a, b) => {
        if (sortOrder === "asc") {
          return a.pricePerDay - b.pricePerDay;
        }
        if (sortOrder === "desc") {
          return b.pricePerDay - a.pricePerDay;
        }
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setFavorites(sortedFavorites);
    }
  }, [sortOrder]); 

  const deleteItem = (_id) => {
    dispatch(deleteWishs(_id));
  };

  return (
    <div>
      <Header />
      <div className={styles.contain}>
        <div className={styles.title}>
          <h1>Seçilmiş Elanlar</h1>
        </div>

        <div className={styles.filter}>
          <span>Toplam avtomobil: {favorites.length}</span>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value="date">Tarixə görə</option>
            <option value="asc">Əvvəlcə ucuz</option>
            <option value="desc">Əvvəlcə bahalı</option>
          </select>
        </div>

        <div className={styles.Container}>
          {favorites &&
            favorites.map((item) => (
              <div key={item._id} className={styles.card}>
                <div className={styles.cardTop}>
                  <img src={item.image} alt={item.model} />
                </div>
                <div className={styles.cardBottom}>
                  <div className={styles.left}>
                    <h3>
                      {item.brand} {item.model}
                    </h3>
                  </div>
                  <div className={styles.right}>
                    <p>{item.year}</p>
                  </div>
                </div>
                <div className={styles.detailsRow}>
                  <div className={styles.left}>
                    <p>{item.capacity} nəfərlik</p>
                  </div>
                  <div className={styles.left}>
                    <p>100km / {item.fuelConsumption}L</p>
                  </div>
                  <div className={styles.right}>
                    <p>{item.fuelType}</p>
                  </div>
                  <div className={styles.right}>
                    <p>{item.transmission}</p>
                  </div>
                </div>
                <div className={styles.bottomRow}>
                  <div className={styles.left}>
                    <p>
                      {item.pricePerDay} <FaManatSign /> / günlük
                    </p>
                  </div>
                  <div className={styles.right}>
                    <FaTrash size={20} onClick={() => deleteItem(item._id)} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;