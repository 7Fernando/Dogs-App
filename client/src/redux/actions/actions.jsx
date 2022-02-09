import axios from "axios";

export const fetchDogs = () => async (dispatch) => {
  const response = await fetch("http://localhost:3001/dogs");
  const json = await response.json();
  return dispatch({ type: "fetchDogs", payload: json });
};

export const getTemperaments = () => async (dispatch) => {
  const response = await fetch("http://localhost:3001/temperament");
  const json = await response.json();
  return dispatch({ type: "getTemperaments", payload: json });
};

export const createDog = (data) => async (dispatch) => {
  const dog = await axios
    .post("http://localhost:3001/dog", data)
    .then((r) => r.data);
  return dispatch({ type: "createDog", payload: dog });
};

export const orderByName = (order) => {
  return {
    type: "orderByName",
    payload: order,
  };
};

export const orderByWeight = (weight) => {
  return {
    type: "orderByWeight",
    payload: weight,
  };
};

export const orderByOrigin = (origin) => {
  return {
    type: "orderByOrigin",
    payload: origin,
  };
};

export const filterByTemperament = (temperament) => {
  return {
    type: "filterByTemperament",
    payload: temperament,
  };
};

export const findByID = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/dogs/${id}`);
  const json = await response.json();
  return dispatch({ type: "findByID", payload: json });
};

export const searchADog = (name)  =>async (dispatch) =>{
  const response = await fetch((`http://localhost:3001/dogs?name=${name}`));
  const json = await response.json();
  return dispatch({type: 'searchADog', payload: json})
}
