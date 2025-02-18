import React, { useEffect, useState } from "react";
import styles from "./Wishlist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getWishs} from "../../redux/thunks/wish/wish";
import { FaManatSign } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Header from '../../components/Header/Header'
import axios from "axios";

const Wishlist = () => {
  const [sortOrder, setSortOrder] = useState("date");
  const [favorites, setFavorites] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishs());
  }, []);

  const wish = useSelector((state) => state.products.wishlist);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5500/wishlist/${user.id}`)
        .then((response) => {
          setFavorites(response.data);
        })
        .catch((error) => console.error("Favoritlər gətirilə bilmədi:", error));
    }
  }, [user]);
  
  const filteredWishlist = wish.filter((item) =>
    favorites.some((fav) => fav.carId === item._id)
  );

    const toggleFavorite = (id) => {
      setFavorites((prev) => {
        const updatedFavorites = { ...prev, [id]: !prev[id] };
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // LocalStorage-a yaz
        return updatedFavorites;
      });
    };


  return (
    <div>
      <Header/>
      <div className={styles.contain}>
        <div className={styles.title}>
          <h1>Seçilmiş Elanlar</h1>
        </div>

        <div className={styles.filter}>
          <span>Toplam avtomobil:</span>
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value="date">Tarixə görə</option>
            <option value="asc">Əvvəlcə ucuz</option>
            <option value="desc">Əvvəlcə bahalı</option>
          </select>
        </div>

        <div>
          {wish &&
            wish.map((item) => (
              <div key={item._id} className={styles.card}>
                <div className={styles.cardTop}>
                  <img src={item.image} alt={item.model} />
                  <FaHeart
                    className={`${styles.heartIcon} ${
                      favorites[item._id] ? styles.filledHeart : ""
                    }`}
                    onClick={() => toggleFavorite(item._id)}
                  />
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
                    <a href={`details/${item._id}`}>Ətraflı</a>
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
