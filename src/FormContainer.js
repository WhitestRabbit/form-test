import React, { useState } from "react";
import FormComponent from "./FormComponent";
import "./styles.css";

const FormContainer = (props) => {
  //useState takes the state that we already had as a parameter. It returns an array of two values (thus the destructuring we do here): firstly a snapshot of the current state we passed in, and secondly a function that allows us to change the state
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    isFriendly: false,
    gender: "",
    favColor: ""
  });
  //it is vital to remember that the function returned by useState, that we easily named as setState, does not work exactly like the setState we learned from class component logic. This function essentially overwrites the entire state of the component with the object we pass in the function and can lead to problems when other properties of the state are missing. Therefore, whenever we call it here, it is smart to include the previous snapshot of the state with spread syntax, and then the updated property.
  //In order to overcome the need to spread, we can define different states, maybe even one for each initial state property by using useState every time, by passing in the current state property, returning the snapshot of the current state property and the function that alters it!
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? setState({ ...state, [name]: checked })
      : setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    // submit form results to a database, API etc.
  };

  let content = (
    <FormComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      {...state}
    />
  );

  return content;
};

export default FormContainer;
