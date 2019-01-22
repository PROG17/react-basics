import React from "react";

export default props => {
  const { story } = props;
  return (
    <li className="list-group-item" key={story.slug}>
      {story.heading}
    </li>
  );
};
