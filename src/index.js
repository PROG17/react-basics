import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// class Klocka extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { date: new Date() };
//     console.log(".constructor ...");
//   }

//   componentDidMount() {
//     console.log(".componentDidMount ...");
//     this.timerIdentifier = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerIdentifier);
//   }

//   tick() {
//     console.log(".tick ...");
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     console.log(".render ...");
//     return (
//       <div className="container py-4 text-center">
//         <h3>Klockan är {this.state.date.toLocaleTimeString()}</h3>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Klocka />, document.getElementById("root"));
