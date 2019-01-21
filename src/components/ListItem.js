import React from "react";

const renderStyledNameText = item => {
  return item.isDone ? <del>{item.name}</del> : item.name;
};

export default props => (
  <li className="list-group-item">
    {renderStyledNameText(props.item)}{" "}
    <button
      className="float-right label btn btn-sm btn-outline-success"
      onClick={event => props.handleToggleDone(props.item)}
    >
      DONE
    </button>
    <button
      className="float-right label btn btn-sm btn-outline-danger mr-2"
      onClick={event => props.handleDelete(props.item)}
    >
      DELETE
    </button>
  </li>
);
