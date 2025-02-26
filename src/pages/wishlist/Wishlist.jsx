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
    if (!user) return;

    const fetchData = async () => {
      const { data: favoritedIDS } = await axios.get(
        `https://rentacar-r44c.vercel.app/wishlist/${user.id}`
      );

      if (!favoritedIDS) return;

      const carsId = favoritedIDS.map((fav) => fav.carId);

      const cars = await Promise.all(
        carsId.map(async (carId,i) => {
          const { data } = await axios.get(
            `https://rentacar-r44c.vercel.app/product/${carId}`
          );
          return {...data[0],favoriteID: favoritedIDS[i]._id};
        })
      );

      const filteredFinalCars = cars.filter((car) => car != undefined);
      setFavorites(filteredFinalCars);
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

  const handleDelete = async (id) => {
    await axios
      .delete(`https://rentacar-r44c.vercel.app/wishlist/${id}`)
      .then((response) => {
        setFavorites((prev) => prev.filter((wish) => wish.favoriteID !== id));
      })
      .catch((error) => {
        console.error("Silmə xətası:", error);
      });
  };

  return (
    <div className={styles.Main}>
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
          {!loading && !user && <p>Please Sign in.</p>}

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
                    <FaTrash size={20} onClick={() => handleDelete(item.favoriteID)} />
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
