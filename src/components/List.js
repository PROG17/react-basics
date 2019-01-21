import React from "react";

import ListItem from "./ListItem";

export default props => (
  <ul className="list-group mb-4">
    {props.todos.map(item => (
      <ListItem
        item={item}
        key={item.id}
        handleToggleDone={props.handleToggleDone}
        handleDelete={props.handleDelete}
      />
    ))}
  </ul>
);
