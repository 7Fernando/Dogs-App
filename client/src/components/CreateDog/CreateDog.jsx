import React, { useState } from "react";
import s from "./CreateDog.module.css";
// import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createDog } from "../../redux/actions/actions";
import Temperaments from "../Temperaments/Temperaments";
// import { AiFillHome } from "react-icons/ai";
import HomeIcon from "../../assets/homeIcon.png";

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
    if (input2.life_span && input2.life_span < 7) {
      errors2.life_span = "7 years is the minimum life span of a dog";
    }
    if (input2.life_span && input2.life_span > 30) {
      errors2.life_span =
        "Unfortunately, 30 years is the maximum life span of a dog";
    }

    if (input2.height_min > input2.height_max) {
      errors2.height_min = "Height Min must be less than Height Max";
    }

    if (input2.weight_min > input2.weight_max) {
      errors2.weight_min = "Weight Min must be less than Weight Max";
    }
    // console.log(errors2);
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

  function refreshPage() {
    window.location.reload(false);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    // console.log(input);
    // console.log(e);
    const validation =
      input.temperament.length > 0 &&
      input.name !== "" &&
      input.height_min !== "" &&
      input.height_max !== "" &&
      input.weight_min !== "" &&
      input.weight_max !== "" &&
      input.life_span !== "";
      
    
    if (validation) {
      dispatch(createDog(input));
      alert("Dog created!")
      // Swal.fire({
      //   title: "Dog created!",
      //   // text: 'Do you want to continue',
      //   icon: "success",
      //   confirmButtonText: "GREAT!",
      //   timer: 4000,
      //   timerProgressBar: true,
      // });

      // e.target.reset();

      setTimeout(() => {
        refreshPage();
      }, 3000);
    } else{
      // console.log(input.name)
      // Swal.fire({
      //   title: "You must fill all the fields!",
      //   // text: 'Do you want to continue',
      //   icon: "info",
      //   confirmButtonText: "GREAT!",
      // });
      alert("You must fill all the fields!")
      // console.log(input.name)
    }
    }

  function deleteTemperament(e) {
    // console.log(e);
    setInput({
      ...input,
      temperament: input.temperament.filter((temperament) => temperament !== e),
    });
  }
  //form action="The action attribute specifies where to send the form-data when a form is submitted.">
  return (
    <div className={s.container}>
      
      <Link to="/home" className={s.home}>
        {/* <AiFillHome className={s.home} /> */}
        <img src={HomeIcon} alt="Home-Icon" className={s.imgHomes} />
      </Link>
      <form id="form" onSubmit={handleOnSubmit} className={s.form}>
        <div className={s.inputs33}>
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
            // required
          />
          {errors.name && <p className={s.msg}>{errors.name}</p>}
        </div>

        <div className={s.name}>
          <label htmlFor="height_min">Min height: </label>
          <input
            type="number"
            name="height_min"
            onChange={handleInput}
            className={s.input}
            placeholder="11 cm"
            // required
          />
          {errors.height_min && <p className={s.msg}>{errors.height_min}</p>}
        </div>

        <div className={s.name}>
          <label htmlFor="height_max">Max height: </label>
          <input
            type="number"
            name="height_max"
            onChange={handleInput}
            className={s.input}
            placeholder="90 cm"
            //required
          />
          {errors.height_max && <p className={s.msg}>{errors.height_max}</p>}
        </div>

        <div className={s.name}>
          <label htmlFor="weight_min">Min weight: </label>
          <input
            type="number"
            name="weight_min"
            onChange={handleInput}
            className={s.input}
            placeholder="5 kgs"
            //required
          />
          {errors.weight_min && <p className={s.msg}>{errors.weight_min}</p>}
        </div>

        <div className={s.name}>
          <label htmlFor="weight_max">Max weight: </label>
          <input
            type="number"
            name="weight_max"
            onChange={handleInput}
            className={s.input}
            placeholder="150 kgs"
            //required
          />
          {errors.weight_max && <p className={s.msg}>{errors.weight_max}</p>}
        </div>
        <div className={s.name}>
          <label htmlFor="life_span">Life span: </label>
          <input
            type="number"
            name="life_span"
            placeholder="15 years"
            onChange={handleInput}
            className={s.input}
            //required
          />
          {errors.life_span && <p className={s.msg}>{errors.life_span}</p>}
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
          {errors.weight_min && <p className={s.msg2}>optional</p>}
        </div>
        <div>
        <button type="submit" className={s.subbtn}>
          Create!
        </button>
        </div>
   
      </div>
     


      <div className={s.form2} >
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
                    onClick={() => deleteTemperament(e)}
                  >
                    X
                  </button>{" "}
                  <div>
                    <p>
                      <span className={s.t}>{e}</span>
                    </p>
                  </div>
                </div>
              </span>
            );
          })}
        </div>
     
      </div>


      </form>

    </div>
  );
};
export default CreateDog;
