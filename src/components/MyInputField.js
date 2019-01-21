import React from "react";

class MyInputField extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: "" };

    // Bind 'this' to this class instance when running
    // handleChange method
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  }

  handleClick = event => {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  };

  render() {
    console.log("I am in .render()");
    return (
      <div>
        <h1>Hello {this.state.input || "World!"}</h1>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Save</button>
      </div>
    );
  }
}

export default MyInputField;
