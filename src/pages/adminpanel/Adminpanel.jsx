import React, { useEffect } from "react";
import { useFormik } from "formik";
import styles from "./Adminpanel.module.css";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  postProducts,
  deleteProducts,
} from "../../redux/thunks/products/thunk";
const Adminpanel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const products = useSelector((state) => state.products.products);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      dispatch(postProducts(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  const deleteItem = (id) => {
    dispatch(deleteProducts(id));
  };
  return (
    <div className={styles.Container}>
      <Header />
      <div className={styles.Contain}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="image">Maşının şəkili</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          <label htmlFor="brand">Marka</label>
          <input
            id="brand"
            name="brand"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.brand}
          />
          <label htmlFor="model">Model</label>
          <input
            id="model"
            name="model"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.model}
          />
          <label htmlFor="year">İli</label>
          <input
            id="year"
            name="year"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.year}
          />
          <label htmlFor="color">Rəngi</label>
          <input
            id="color"
            name="color"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.color}
          />
          <label htmlFor="engine">Mühərrik</label>
          <input
            id="engine"
            name="engine"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.engine}
          />
          <label htmlFor="capacity">Neçə nəfərlik olduğu</label>
          <input
            id="capacity"
            name="capacity"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.capacity}
          />
          <label htmlFor="fuelConsumption">Yanacaq sərfiyyatı</label>
          <input
            id="fuelConsumption"
            name="fuelConsumption"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.fuelConsumption}
          />
          <label htmlFor="fuelType">Yanacaq növü</label>
          <input
            id="fuelType"
            name="fuelType"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fuelType}
          />
          <label htmlFor="transmission">Sürətlər qutusu</label>
          <input
            id="transmission"
            name="transmission"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.transmission}
          />
          <label htmlFor="pricePerDay">Günlük icarə qiyməti</label>
          <input
            id="pricePerDay"
            name="pricePerDay"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.pricePerDay}
          />
          <button type="submit">Submit</button>
        </form>
        <table>
          <tr>
            <th>Maşının şəkili</th>
            <th>Marka</th>
            <th>Model</th>
            <th>Günlük icarə qiyməti</th>
            <th>Sil</th>
          </tr>
          {products &&
            products.map((car) => (
              <tr>
                <td>
                  <img src={car.image} />
                </td>
                <td>
                  <span>{car.brand}</span>
                </td>
                <td>
                  <p>{car.model}</p>
                </td>
                <td>
                  <p>{car.pricePerDay}Manat</p>
                </td>
                <td>
                  <button onClick={() => deleteItem(car._id)}>Sil</button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};
export default Adminpanel;
