import React, { Component } from "react";

import List from "../components/List";

const initialState = {
  input: "",
  todos: [
    { id: Math.random() * 1000, name: "Go to the gym", isDone: false },
    { id: Math.random() * 1000, name: "Learn React", isDone: false }
  ]
};

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleChange() {}

  handleClick() {}

  render() {
    return (
      <div>
        <div className="container py-4">
          <div className="row mb-4">
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

          <List todos={this.state.todos} />
        </div>
      </div>
    );
  }
}
