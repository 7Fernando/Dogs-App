import React from "react";
import s from "./Filters.module.css";
//import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { orderByName } from "../../redux/actions/actions";
import { orderByWeight } from "../../redux/actions/actions";
import { orderByOrigin } from "../../redux/actions/actions";
import Temperaments from "../Temperaments/Temperaments";
import { filterByTemperament } from "../../redux/actions/actions";

const Filters = () => {
  const dispatch = useDispatch();
  //let dogsOrigin = useSelector((state) => state.origin);
  // console.log('j2', dogsOrigin)
  function order(e) {
    e.preventDefault();
    //console.log(e.target.value);
    dispatch(orderByName(e.target.value));
  }

  function weight(e) {
    e.preventDefault();
    // console.log(e.target.value);
    dispatch(orderByWeight(e.target.value));
  }

  function origin(e) {
    e.preventDefault();
    // console.log(e.target.value);
    dispatch(orderByOrigin(e.target.value));
  }

  function temperament(e) {
    // console.log(e.target.value);
    dispatch(filterByTemperament(e.target.value));
    console.log(e.target.value);
  }

  return (
    <div>
      <ul className={s.menuUl}>
        <li className={s.li}>
          <label htmlFor="Order">Order by name: </label>
          <select onChange={(e) => order(e)}>
            <option value="choose" hidden>
              {" "}
              Choose order{" "}
            </option>
            <option defaultValue value="asc">
              {" "}
              A - Z{" "}
            </option>
            <option value="des"> Z - A </option>
          </select>
          <br /> <br />
        </li>
        <li className={s.li}>
          <label htmlFor=""> Order by weigth: </label>
          <select onChange={(e) => weight(e)}>
            <option value="choose" hidden>
              Choose weight{" "}
            </option>
            <option value="wmin"> Min weight </option>
            <option value="wmax"> Max weight </option>
          </select>
          <br /> <br />
        </li>
        <li className={s.li}>
        <label htmlFor=""> Filter by origin: </label>
        <select onChange={(e) => origin(e)}>
          <option value="choose" hidden>
            {" "}
            Choose origin{" "}
          </option>
          <option value="Dogs_from_DB"> Dogs created </option>
          <option value="Dogs_from_API"> Dogs from API </option>
        </select>
        <br /> <br />
        </li>
        <li className={s.li}>
        <label>
          {" "}
          Filter by temperaments: <Temperaments onClick={temperament} />{" "}
        </label>
        {/*<label htmlFor="">Filter by temperament: </label>
        <br />

       {temperaments.map((t, i) => {
          return (
            <React.Fragment key={t + "m"}>
              <label htmlFor={t} key={t + "n"}>
                {" "}
                {t + " "}
                <input type="checkbox" name={t} key={t} />
              </label>
            </React.Fragment>
          );
        })} */}
        </li>
      </ul>
    </div>
  );
  // } else return <h2>Cargando...</h2>;
};
export default Filters;
