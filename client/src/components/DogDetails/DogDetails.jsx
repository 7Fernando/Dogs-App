import React from "react";
import s from "./DogDetails.module.css";
// import { AiFillHome } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findByID } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/homeIcon.png";
import dogGif from '../../assets/dogGif.gif'

const DogDetails = () => {
  const { idRaza } = useParams();
  const dispatch = useDispatch();
  const dogs = useSelector((s) => s.idDog); 

  useEffect(() => {
    dispatch(findByID(idRaza));
    window.scrollTo(0, 0);
  }, [dispatch, idRaza]);
 
  if (dogs.length === 0) {
    return (
      <>
        <h2> Loading...</h2>
        <img src={dogGif} alt="gif" />
      </>
    )
  }


  return dogs?.map((e, i) => (
    <div key={e.id} className={s.container}>
       <Link to="/home" className={s.home}>
          {/* <AiFillHome className={s.home} /> */}
          <img src={HomeIcon} alt="Home Icon" className={s.imgHomes} />
        </Link>
      <div className={s.card}>
       
        <h1 className={s.name}>{e.name}</h1>
        <img src={e.image} alt="Debería haber una foto/" className={s.img} />

        <div>
          <h3 className={s.w}>
            {" "}
            Weight: {e.weight_min} - {e.weight_max} kgs
          </h3>
          {/* className={`${s.w}``${s.h}`} */}
          <h4 className={s.w}>
            {" "}
            Height: {e.height_min} - {e.height_max} cms
          </h4>
        </div>
        <div >
          {Array.isArray(e.temperament) ? (
            e.temperament.map((e) => (
              <p key={e} className={s.temperaments}>
                {" "}
                <span className={s.temperaments2}>{e}</span>{" "}
              </p>
            ))
          ) : (
            <span className={s.temperaments2}>Without temperament</span>
          )}
        </div>

        <h4 className={s.lspan}>Life span {e.life_span}</h4>
      </div>
    </div>
  ))
          
};

export default DogDetails;
