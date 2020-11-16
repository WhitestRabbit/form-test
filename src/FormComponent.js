import React from "react";

const FormComponent = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={props.handleChange}
      />
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={props.handleChange}
      />
      <br />
      <textarea value={"Hello there"} onChange={props.handleChange} />
      <br />
      <label>
        <input
          type="checkbox"
          checked={props.isFriendly}
          name="isFriendly"
          onChange={props.handleChange}
        />{" "}
        Is Friendly?
      </label>
      <br />
      <label>
        <input
          type="radio"
          checked={props.gender === "Male"}
          name="gender"
          value="Male"
          onChange={props.handleChange}
        />{" "}
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          checked={props.gender === "Female"}
          name="gender"
          value="Female"
          onChange={props.handleChange}
        />{" "}
        Female
      </label>
      <br />
      <select
        value={props.favColor}
        onChange={props.handleChange}
        name="favColor"
      >
        <option value="">-- Please select a color --</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Salmon">Salmon</option>
      </select>
      <h1>
        {props.firstName} {props.lastName}
      </h1>
      <h2>
        {props.gender} {props.favColor} {props.isFriendly ? "Friend" : "Foe"}
      </h2>
      <button>Submit Form</button>
    </form>
  );
};

export default FormComponent;
