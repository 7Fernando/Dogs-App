import React, { useState } from "react";
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

    if (!input2.height_min ) {
      errors2.height_min = "Min height is required";
    }
    if (input2.height_min && input2.height_min < 11 ) {
      errors2.height_min = "Min height must be greater than 10";
    }
    if (!input2.height_max) {
      errors2.height_max = "Max height is required";
    }
    if (input2.height_max && input2.height_max > 90  ) {
      errors2.height_max = "Max height must be less than 90";
    }
   


    if (!input2.weight_min ) {
      errors2.weight_min = "Min weight is required";
    }
    if (input2.weight_min && input2.weight_min < 1 ) {
      errors2.weight_min = "Min weight must be greater than 0";
    }
    if (!input2.weight_max) {
      errors2.weight_max = "Max weight is required";
    }
    if (input2.weight_max && input2.weight_max > 150  ) {
      errors2.weight_max = "Max weight must be less than 150";
    }
  

    if (!input2.life_span) {
      errors2.life_span = "Life span is required";
    }
    if(input2.life_span && input2.life_span < 8 ) {
      errors2.life_span = 'Must be greater than 7 and less than 30';
    }
    if( input2.life_span && input2.life_span > 30 ) {
      errors2.life_span = 'Must be greater than 7 and less than 30';
    }
    
    if( input2.height_min > input2.height_max ) {
      errors2.height_min = 'Height Min must be less than Height Max';
    }
   
    if(input2.weight_min > input2.weight_max) {
      errors2.weight_min = 'Weight Min must be less than Weight Max';
    }
   console.log(errors2)
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
    
    
    dispatch(createDog(input));
    console.log(input);
    
  }

  //form action="The action attribute specifies where to send the form-data when a form is submitted.">
  return (
    <div>
      <form id="form" onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" onChange={handleInput} />
        <br />

        <label htmlFor="height_min">Min height: </label>
        <input type="number" name="height_min" onChange={handleInput} />
        <span>cms</span>
        <br />

        <label htmlFor="height_max">Max height: </label>
        <input type="number" name="height_max" onChange={handleInput} />
        <span>cms</span>
        <br />

        <label htmlFor="weight_min">Min weight: </label>
        <input type="number" name="weight_min" onChange={handleInput} />
        <span>kgs</span>
        <br />

        <label htmlFor="weight_max">Max weight: </label>
        <input type="number" name="weight_max" onChange={handleInput} />
        <span>kgs</span>
        <br />

        <label htmlFor="life_span">Life span: </label>
        <input
          type="number"
          name="life_span"
          placeholder="12-15"
          onChange={handleInput}
        />
        <span>years</span>
        <br />

        <label htmlFor="temperament">Choose temperaments: </label>
        <Temperaments name="temperament" onClick={handleInputTemps} />

        <label htmlFor="image">Image: </label>

        <input type="file" name="image" />

        <input
          type="text"
          name="image"
          placeholder="image url / link"
          onChange={handleInput}
        />

        <button type="submit" >Create!</button>
      </form>
    </div>
  );
};
export default CreateDog;
