import React, { Component } from "react";

// Import component
// import MyInputField from "./components/MyInputField";

// import TodoList from "./containers/TodoList";

import NewsContainer from "./news/containers/NewsContainer";

class App extends Component {
  render() {
    return (
      <div>
        {/* Use component to render it here */}
        {/* <TodoList /> */}
        <NewsContainer />
      </div>
    );
  }
}

export default App;
