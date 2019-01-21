import React from "react";

import ListItem from "./ListItem";

export default props => (
  <ul className="list-group">
    {props.todos.map(item => (
      <ListItem item={item} key={item.id} />
    ))}
  </ul>
);
