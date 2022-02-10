/* eslint-disable array-callback-return */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../redux/actions/actions";
import s from './Temperaments.module.css'

const Temperaments = ({onClick}) => {

    const state = useSelector( state => state.temperaments);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getTemperaments());
        
    }, [dispatch]);

 
  return (
    <div>
      <label htmlFor="temperaments"> </label>
      <select name="temperaments" onChange={onClick} className={s.select}>
      <option value="choose" hidden>
            {" "}
            Temperaments:{" "}
          </option>
          {
              state.map( t => <option value={t} key={t}> {t} </option>)
          }
      </select>
    </div>
  );
};
export default Temperaments;
