import React from "react";
import s from './SearchBar.module.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchADog } from "../../redux/actions/actions";
// import {FiSearch}  from "react-icons/fi";
import Lupa from '../../assets/Lupa.png';
// import { Link } from "react-router-dom";

const SearchBar = () => {
  const [inputSearch, setInputSearch] = useState("");
  const dispatch = useDispatch();

  function searchDog(e) {
    
    setInputSearch(e.target.value);
  } 
  function search(e) {
    console.log(e)
    dispatch(searchADog(inputSearch));
  }
  return (
    <div>
      
    <div className={s.container}>
   
      {/* <label htmlFor="search"  className={s.label}>Search dog:</label> */}
      <input type="text" placeholder=" Search by name..." onChange={searchDog} className={s.inputSearch} name="search" />
      {/* <input type="submit" value={"   "} onClick={search} className={s.inputSend}/> */}
      
      {/* <FiSearch className={s.icon} type="submit" onClick={search}/> */}
      
      <img src={Lupa} alt="Home-Icon" className={s.imgLupa} type="submit" onClick={search} />
 
    </div>
    </div>
  );
};
export default SearchBar;
