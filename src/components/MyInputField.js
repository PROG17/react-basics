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
      <div className="container py-4">
        <div className="row">
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-4">
            <button
              className="btn btn-primary btn-block"
              onClick={this.handleClick}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyInputField;
