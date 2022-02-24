import React from "react";
import s from "./Filters.module.css";

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
        <div className={s.container}>
          <li className={s.li} >
            {/* <label htmlFor="Order">Order by name: </label> */}
           
            <select onChange={(e) => order(e)} className={s.select}>
              <option value="choose" hidden className={s.option} >
                {" "}
                Order by name{" "}
              </option>
              
              <option defaultValue value="asc"  className={s.option}> A - Z </option> 
              
              <option value="des" className={s.option}> Z - A </option>
            </select>
            
            <br /> <br />
          </li>
        </div>

        <div className={s.container}>
          <li className={s.li}>
            {/* <label htmlFor=""> Order by weigth: </label> */}
            <select onChange={(e) => weight(e)} className={s.select}>
              <option value="choose" hidden>
                Order by weight{" "}
              </option>
              <option value="wmin"> Min weight </option>
              <option value="wmax"> Max weight </option>
            </select>
            <br /> <br />
          </li>
        </div>

        <div className={s.container}>
          <li className={s.li}>
            {/* <label htmlFor=""> Filter by origin: </label> */}
            <select onChange={(e) => origin(e)} className={s.select}>
              <option value="choose" hidden>
                {" "}
                Filter by origin:{" "}
              </option>
              <option value="Dogs_from_DB"> Dogs created </option>
              <option value="Dogs_from_API"> Dogs from API </option>
            </select>
            <br /> <br />
          </li>
        </div>

        <div className={s.container}>
          <li className={s.li}>
            <Temperaments onClick={temperament} />
          </li>
        </div>
      </ul>
    </div>
  );
  // } else return <h2>Cargando...</h2>;
};
export default Filters;
