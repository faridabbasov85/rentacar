import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./Cars.module.css";
import Header from "../../components/Header/Header";
import axios from "axios";
import { FaManatSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Cars = () => {
  const [minYear, setMinYear] = useState(1905);
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 8;
  const [brand, setBrand] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuelType, setFuelType] = useState("");
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("date");

  const handleMinYearChange = (e) => {
    setMinYear(e.target.value);
  };

  const handleMaxYearChange = (e) => {
    setMaxYear(e.target.value || new Date().getFullYear());
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleTransmissionChange = (e) => {
    setTransmission(e.target.value);
  };

  const handleFuelTypeChange = (e) => {
    setFuelType(e.target.value);
  };

  const handleAddBrand = (newBrand) => {
    setCars([...cars, { brand: newBrand }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters();
  };

  const applyFilters = () => {
    const filtered = cars
      .filter((car) => {
        return (
          car.brand.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
          (brand ? car.brand === brand : true) &&
          (transmission ? car.transmission === transmission : true) &&
          (fuelType ? car.fuelType === fuelType : true) &&
          car.year >= minYear &&
          car.year <= maxYear
        );
      })
      .sort((a, b) => {
        if (sortOrder === "asc") return a.pricePerDay - b.pricePerDay;
        if (sortOrder === "desc") return b.pricePerDay - a.pricePerDay;
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

    setFilteredCars(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (loading) return;

    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5500/product");
        setCars(response.data);
        setFilteredCars(response.data);
      } catch (error) {
        console.error("Xəta baş verdi:", error.message);
      }
    };
    fetchCars();
  }, [loading]);

  useEffect(() => {
    if (loading) return;

    if (user) {
      axios
        .get(`http://localhost:5500/wishlist/${user.id}`)
        .then((response) => {
          setFavorites(response.data);
        })
        .catch((error) => console.error("Favoritlər gətirilə bilmədi:", error));
    }
  }, [user, loading]);

  useEffect(() => {
    applyFilters();
  }, [
    searchTerm,
    brand,
    transmission,
    fuelType,
    minYear,
    maxYear,
    sortOrder,
    cars,
  ]);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleFavorite = async (id) => {
    if (!user) {
      navigate("/login");
      return;
    }

    const liked = favorites.some((item) => item.carId === id);
    let updatedFavorites = [...favorites];

    if (liked) {
      const _id = favorites.filter((item) => item.carId === id)[0]._id;

      try {
        await axios.delete("http://localhost:5500/wishlist", {
          data: { _id },
        });

        updatedFavorites = updatedFavorites.filter((i) => i.carId !== id);
      } catch (error) {
        console.error("Favoritdən silinmədi:", error);
      }
    } else {
      try {
        const res = await axios.post("http://localhost:5500/wishlist", {
          userId: user.id,
          carId: id,
        });

        updatedFavorites = [...updatedFavorites, res.data];
      } catch (error) {
        console.error("Favoritə əlavə edilmədi:", error);
      }
    }

    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Avto Park</h1>
        </div>
        <div className={styles.contain}>
          <div className={styles.filter}>
            <form onSubmit={handleSubmit}>
              <label>Marka:</label>
              <select>
                <option value="">Bütün markalar</option>
                {[...new Set(cars.map((car) => car.brand))].map(
                  (brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  )
                )}
              </select>
              <label>Buraxılış ili:</label>
              <div className={styles.yearRange}>
                <input
                  type="number"
                  min="1905"
                  max={maxYear}
                  onChange={handleMinYearChange}
                  placeholder="İl, min"
                />
                <span> - </span>
                <input
                  type="number"
                  min={minYear}
                  max={new Date().getFullYear()}
                  onChange={handleMaxYearChange}
                  placeholder="maks"
                />
              </div>
              <label className={styles.transmission}>Transmissiya:</label>
              <select value={transmission} onChange={handleTransmissionChange}>
                <option value="">Transmissiya</option>
                <option value="Avtomat">Avtomat</option>
                <option value="Mexanika">Mexanika</option>
              </select>
              <label className={styles.fuel}>Yanacaq növü:</label>
              <select value={fuelType} onChange={handleFuelTypeChange}>
                <option value="">Yanacaq Növü</option>
                <option value="Benzin">Benzin</option>
                <option value="Dizel">Dizel</option>
                <option value="Hibrid">Hibrid</option>
              </select>
              <button type="submit">Göstər</button>
            </form>
          </div>
          <div className={styles.FilterSortSection}>
            <input
              type="text"
              placeholder="Markaya görə axtar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
            >
              <option value="date">Tarixə görə</option>
              <option value="asc">Əvvəlcə ucuz</option>
              <option value="desc">Əvvəlcə bahalı</option>
            </select>
          </div>
          <div className={styles.cars}>
            <div className={styles.car}>
              {currentCars.map((car) => (
                <div key={car._id} className={styles.card}>
                  <div className={styles.cardTop}>
                    <img src={car.image} alt={car.model} />
                    {favorites && (
                      <FaHeart
                        className={`${styles.heartIcon} ${
                          favorites.some((i) => i.carId === car._id)
                            ? styles.filledHeart
                            : ""
                        }`}
                        onClick={() => toggleFavorite(car._id)}
                      />
                    )}
                  </div>
                  <div className={styles.cardBottom}>
                    <div className={styles.left}>
                      <h3>
                        {car.brand} {car.model}
                      </h3>
                    </div>
                    <div className={styles.right}>
                      <p>{car.year}</p>
                    </div>
                  </div>
                  <div className={styles.detailsRow}>
                    <div className={styles.left}>
                      <p>{car.capacity} nəfərlik</p>
                    </div>
                    <div className={styles.left}>
                      <p>100km / {car.fuelConsumption}L</p>
                    </div>
                    <div className={styles.right}>
                      <p>{car.fuelType}</p>
                    </div>
                    <div className={styles.right}>
                      <p>{car.transmission}</p>
                    </div>
                  </div>
                  <div className={styles.bottomRow}>
                    <div className={styles.left}>
                      <p>
                        {car.pricePerDay} <FaManatSign /> / günlük
                      </p>
                    </div>
                    <div className={styles.right}>
                      <button onClick={() => navigate(`/cars/${car._id}`)}>
                        Ətraflı
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.pagination}>
              <span>Toplam avtomobil: {filteredCars.length}</span>
              <ul>
                {Array(Math.ceil(filteredCars.length / carsPerPage))
                  .fill()
                  .map((_, index) => (
                    <li key={index}>
                      <button onClick={() => paginate(index + 1)}>
                        {index + 1}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
