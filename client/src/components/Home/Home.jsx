import React from "react";
import styles from "./Home.module.css";
import Dogs from "../Dogs/Dogs";
import Pagination from "../Pagination/Pagination";
import { fetchDogs } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { AiFillHome } from "react-icons/ai";

const Home = () => {
  //const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  //const [dogsPerPage, setDogsPerPage] = useState(8);
  let dispatch = useDispatch();
  let dogs = useSelector((state) => state.dogs);

  //console.log(dogs);

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  function refreshPage() {
    window.location.reload(false);
  }

  if (dogs.msg) {
    return (
      <div>
        <h2>DOG NOT FOUND</h2>
        <Link to="/home">
          <button onClick={refreshPage}>Return home</button>
        </Link>
      </div>
    );
  } else {
    //Get current dogs:
    const indexOfLastDog = currentPage * dogsPerPage; //8
    //console.log(indexOfLastDog);
    const indexOfFirstDog = indexOfLastDog - dogsPerPage; //0
    //console.log(indexOfFirstDog);
    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog); //8 objetos
    //console.log(currentDogs);

    //Change Page
    let paginate = (number) => setCurrentPage(number);

    return (
      <div>
        <ul className={styles.ul1}>
          <li>
            <AiFillHome className={styles.home2} onClick={refreshPage} />
          </li>
          
            
         

          <li className={styles.li}>
            <SearchBar />
          </li>
          <li className={styles.li}>
            <Link to="/dog">
              <button className={styles.btn}>Create a new dog!</button>
            </Link>
          </li>
        </ul>
        <ul className={styles.menuUl}>
          <li className={styles.li}>
            <Filters />
          </li>
        </ul>

        <Pagination
          dogsPerPage={dogsPerPage}
          totalDogs={dogs.length}
          paginate={paginate}
        />
        <Dogs dogs={currentDogs} loading={dogs.length} />
        <Pagination
          dogsPerPage={dogsPerPage}
          totalDogs={dogs.length}
          paginate={paginate}
        />
      </div>
    );
  }
};

export default Home;
