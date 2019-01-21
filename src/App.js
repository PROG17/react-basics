import React, { Component } from "react";

// Import component
// import MyInputField from "./components/MyInputField";

import TodoList from "./containers/TodoList";

class App extends Component {
  render() {
    return (
      <div>
        {/* Use component to render it here */}
        <TodoList />
      </div>
    );
  }
}

export default App;
