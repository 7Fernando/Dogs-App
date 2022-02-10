import React, { useState } from "react";
import s from "./CreateDog.module.css";
import { useDispatch } from "react-redux";
import { createDog } from "../../redux/actions/actions";
import Temperaments from "../Temperaments/Temperaments";

const CreateDog = () => {
  const [input, setInput] = useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    image: "",
    temperament: [],
  });

  const [errors, setErrors] = useState({});
  //const [disable, setDisable] = useState(true);

  function validate(input2) {
    let errors2 = {};

    if (!input2.name) {
      errors2.name = "Name is required";
    }

    if (!input2.height_min) {
      errors2.height_min = "Min height is required";
    }
    if (input2.height_min && input2.height_min < 11) {
      errors2.height_min = "Min height must be greater than 10";
    }
    if (!input2.height_max) {
      errors2.height_max = "Max height is required";
    }
    if (input2.height_max && input2.height_max > 90) {
      errors2.height_max = "Max height must be less than 90";
    }

    if (!input2.weight_min) {
      errors2.weight_min = "Min weight is required";
    }
    if (input2.weight_min && input2.weight_min < 1) {
      errors2.weight_min = "Min weight must be greater than 0";
    }
    if (!input2.weight_max) {
      errors2.weight_max = "Max weight is required";
    }
    if (input2.weight_max && input2.weight_max > 150) {
      errors2.weight_max = "Max weight must be less than 150";
    }

    if (!input2.life_span) {
      errors2.life_span = "Life span is required";
    }
    if (input2.life_span && input2.life_span < 8) {
      errors2.life_span = "Must be greater than 7 and less than 30";
    }
    if (input2.life_span && input2.life_span > 30) {
      errors2.life_span = "Must be greater than 7 and less than 30";
    }

    if (input2.height_min > input2.height_max) {
      errors2.height_min = "Height Min must be less than Height Max";
    }

    if (input2.weight_min > input2.weight_max) {
      errors2.weight_min = "Weight Min must be less than Weight Max";
    }
    console.log(errors2);
    return errors2;
  }

  function handleInput(e) {
    e.preventDefault();
    setInput((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));

    let obj = validate({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(obj);
  }

  function handleInputTemps(e) {
    e.preventDefault();
    setInput((input) => ({
      ...input,
      temperament: [...input.temperament, e.target.value],
    }));
  }
  //console.log(input.temperament);
  const dispatch = useDispatch();

  function handleOnSubmit(e) {
    e.preventDefault();
    // console.log(input);
    console.log(e);
    const y =
      input.temperament.length > 0 &&
      input.name !== "" &&
      input.height_min !== "" &&
      input.height_max !== "" &&
      input.weight_min !== "" &&
      input.weight_max !== "" &&
      input.life_span !== "";
    if (y) {
      dispatch(createDog(input));
    } else console.log("Debes llenar todos los campos");
    console.log(input);
  }
  function handleDeleteTemperament(e) {
    setInput({
      ...input,
      temperament: input.temperament.filter((temperament) => temperament !== e),
    });
  }
  //form action="The action attribute specifies where to send the form-data when a form is submitted.">
  return (
    <div className={s.container}>
      <form id="form" onSubmit={handleOnSubmit} className={s.form}>
        <div className={s.name}>
          <label htmlFor="name" className={s.label}>
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            onChange={handleInput}
            className={s.input}
            placeholder="Paco"
          />
        </div>

        <div className={s.name}>
          <label htmlFor="height_min">Min height: </label>
          <input
            type="number"
            name="height_min"
            onChange={handleInput}
            className={s.input}
            placeholder="11 cm"
          />
        </div>

        <div className={s.name}>
          <label htmlFor="height_max">Max height: </label>
          <input
            type="number"
            name="height_max"
            onChange={handleInput}
            className={s.input}
            placeholder="90 cm"
          />
        </div>

        <div className={s.name}>
          <label htmlFor="weight_min">Min weight: </label>
          <input
            type="number"
            name="weight_min"
            onChange={handleInput}
            className={s.input}
            placeholder="5 kgs"
          />
        </div>

        <div className={s.name}>
          <label htmlFor="weight_max">Max weight: </label>
          <input
            type="number"
            name="weight_max"
            onChange={handleInput}
            className={s.input}
            placeholder="150 kgs"
          />
        </div>
        <div className={s.name}>
          <label htmlFor="life_span">Life span: </label>
          <input
            type="number"
            name="life_span"
            placeholder="15 years"
            onChange={handleInput}
            className={s.input}
          />
        </div>

        <div className={s.name}>
          <label htmlFor="image">Image: </label>

          <input
            type="text"
            name="image"
            placeholder="image url"
            onChange={handleInput}
            className={s.input}
          />
        </div>
        <button type="submit" className={s.subbtn}>Create!</button>
      </form>
      <form className={s.form2} onSubmit={handleOnSubmit}>
        <div className={s.name2}>
          <Temperaments name="temperament" onClick={handleInputTemps} />
        </div>
        <div className={s.divTyBtn}>
          {input.temperament.map((e) => {
            return (
              <span key={e}>
                
                <div className={s.byt}>
                  <button
                    className={s.btn}
                    onClick={() => handleDeleteTemperament(e)}
                  >
                    X
                  </button>{" "}
                  <div>
                    <p  >
                      <p className={s.t}>{e}</p>
                    </p>
                  </div>
                 
               </div>
                {/*onClick={() => handleDeleteTemperament(e)} */}
              </span>
            );
          })}
        </div>
      </form>
    </div>
  );
};
export default CreateDog;
