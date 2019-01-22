import React, { Component } from "react";

// Import component
// import MyInputField from "./components/MyInputField";

// import TodoList from "./containers/TodoList";

import NewsContainer from "./news/containers/NewsContainer";

import TopNav from "./shared/components/TopNav";

class App extends Component {
  render() {
    return (
      <div>
        {/* Use component to render it here */}
        {/* <TodoList /> */}
        <TopNav />

        <div className="container py-4">
          <NewsContainer />
        </div>
      </div>
    );
  }
}

export default App;
