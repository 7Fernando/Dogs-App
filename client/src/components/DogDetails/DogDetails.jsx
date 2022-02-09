import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findByID } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

const DogDetails = () => {
  const { idRaza } = useParams();
  const dispatch = useDispatch();
  const dogs = useSelector((s) => s.dogs);

  useEffect(() => {
    dispatch(findByID(idRaza));
    //console.log(idRaza);
  }, [dispatch,idRaza]);
  //let {name} =dogs[0]

  return dogs?.map((e, i) => (
    <div key={e.id}>
      <Link to='/home'><button>Return home</button></Link>
      <h1>{e.name}</h1>
      <h2>{e.temperament + " "}</h2>
      <h3>{e.weight_min}</h3>
      <h3>{e.weight_max}</h3>
      <h3>{e.height_min}</h3>
      <h3>{e.height_max}</h3>
      <h3>{e.life_span}</h3>
      <img src={e.image} alt="Debería haber una foto/" />
    </div>
  ));
};

export default DogDetails;
