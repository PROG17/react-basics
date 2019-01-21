import React from "react";

export default props => (
  <ul className="list-group">
    {props.todos.map(item => (
      <li className="list-group-item" key={item.id}>
        {item.name}
      </li>
    ))}
  </ul>
);
