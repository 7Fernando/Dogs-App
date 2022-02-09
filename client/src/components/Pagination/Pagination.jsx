import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./Styles.module.css";

const Pagination = ({ dogsPerPage, totalDogs, paginate }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paginate]);

  return (
    <nav>
      <ul className={s.ul}>
        {pageNumbers.map((number) => (
          <div className={s.cont} key={number}>
          <button  className={s.btn}>
            <li className={s.li}>
              {/* <a onClick={()=>paginate(number)}href='#'>{number}</a> */}
              <Link to="/home" onClick={() => paginate(number)} className={s.link}>
                {number}
              </Link>
            </li>
          </button>
          </div>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
