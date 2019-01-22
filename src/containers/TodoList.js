import React, { Component } from "react";

import List from "../components/List";

const initialState = {
  input: "",
  todos: []
};

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSave = event => {
    event.preventDefault();
    this.doSave();
  };

  handleSubmit = event => {
    event.preventDefault();
    this.doSave();

    console.log(".handleSubmit triggered()...");
  };

  doSave() {
    // Check that input contains at least 2 chars
    if (this.state.input.length > 1) {
      // Create new object and copy contents into it
      // Use the ...spread operator to copy existing todos
      const newState = {
        input: "",
        todos: [
          ...this.state.todos,
          {
            id: Math.random() * 1000,
            name: this.state.input,
            isDone: false
          }
        ]
      };
      this.setState(newState);
    }
  }

  renderClearButton() {
    // Show clear button if list has items
    if (this.state.todos.length) {
      return (
        <button
          onClick={this.handleClearTodos}
          className="btn btn-block btn-outline-danger"
        >
          Clear
        </button>
      );
    }
    // Return null if nothing is to be rendered
    return null;
  }

  handleClearTodos = () => {
    // Reset list
    this.setState(initialState);
  };

  handleToggleDone = item => {
    // Add code laterz
    const todos = this.state.todos.map(todo => {
      if (todo.id === item.id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    this.setState({ ...this.state, todos });
  };

  handleDelete = item => {
    const todos = this.state.todos.filter(todo => todo.id !== item.id);
    this.setState({ ...this.state, todos });
  };

  renderEmptyMessage() {
    // Show message if list is empty
    if (!this.state.todos.length) {
      return (
        <p className="text-muted text-center">
          <small>There are no TODOs at the moment.</small>
        </p>
      );
    }
    // Return null if nothing is to be rendered
    return null;
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container py-4">
          <div className="row mb-4">
            <div className="col-md-8">
              <form className="form-group" onSubmit={this.handleSubmit}>
                <input
                  placeholder="Please enter something to do..."
                  className="form-control"
                  type="text"
                  value={this.state.input}
                  onChange={this.handleChange}
                />
              </form>
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-primary btn-block"
                onClick={this.handleSave}
              >
                Save
              </button>
            </div>
          </div>

          <List
            todos={this.state.todos}
            handleToggleDone={this.handleToggleDone}
            handleDelete={this.handleDelete}
          />
          {this.renderClearButton()}
          {this.renderEmptyMessage()}
        </div>
      </div>
    );
  }
}
