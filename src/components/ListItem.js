import React from "react";

const renderStyledNameText = item => {
  return item.isDone ? <del>{item.name}</del> : item.name;
};

export default props => {
  const { item } = props;
  console.log(props);
  return (
    <li className="list-group-item">
      {renderStyledNameText(item)}{" "}
      <button
        className="float-right label btn btn-sm btn-outline-success"
        onClick={event => props.handleToggleDone(item)}
      >
        DONE
      </button>
      <button
        className="float-right label btn btn-sm btn-outline-danger mr-2"
        onClick={event => props.handleDelete(item)}
      >
        DELETE
      </button>
    </li>
  );
};
