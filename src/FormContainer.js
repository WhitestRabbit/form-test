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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? setState({
          [name]: checked
        })
      : setState({
          [name]: value
        });
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
