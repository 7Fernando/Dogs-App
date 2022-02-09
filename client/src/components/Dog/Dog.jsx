import React from "react";
import s from "./Dog.module.css";

import { Link } from "react-router-dom";

const Dog = ({ id, name, temperament, weight_min, weight_max, image }) => {
  if (temperament === null) temperament = "Without temperament";
  //console.log(temperament);
  /*temperament.forEach((e,i) => <h2 className={s.temperaments}>{e[i] + ","}</h2>) */
  return (
    <Link to={`/dogs/${id}`} className={s.link}>
      <div className={s.container}>
        <div className={s.card}>
          <h1 className={s.h1}>{name}</h1>
          <img src={image} alt="Debería haber una foto/" className={s.img} />

          <div>
            <h3 className={s.w}>
              Weight: {weight_min} - {weight_max} kgs
            </h3>
          </div>
          <div className={s.tc}>
            {Array.isArray(temperament) ? (
              temperament.map((e) => (
                <p key={e} className={s.temperaments}>
                  {" "}
                  <span className={s.temperaments2}>{e}</span>{" "}
                </p>
              ))
            ) : (
              <span className={s.temperaments2}>Without temperament</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Dog;
