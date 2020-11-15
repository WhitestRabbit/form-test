import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        <textarea value={"Hello there"} onChange={this.handleChange} />
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.isFriendly}
            name="isFriendly"
            onChange={this.handleChange}
          />{" "}
          Is Friendly?
        </label>
        <br />
        <label>
          <input
            type="radio"
            checked={this.state.gender === "Male"}
            name="gender"
            value="Male"
            onChange={this.handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            checked={this.state.gender === "Female"}
            name="gender"
            value="Female"
            onChange={this.handleChange}
          />{" "}
          Female
        </label>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>
          {this.state.gender} {this.state.isFriendly ? "Friend" : "Foe"}
        </h2>
      </form>
    );
  }
}

export default App;
