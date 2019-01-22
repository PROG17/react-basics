import React from "react";

export default props => {
  return (
    <ul className="list-group">
      {props.stories.map(story => (
        <li className="list-group-item" key={story.slug}>
          {story.heading}
        </li>
      ))}
    </ul>
  );
};
