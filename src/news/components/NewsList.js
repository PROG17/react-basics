import React from "react";

import NewsListItem from "./NewsListItem";

export default props => {
  return (
    <ul className="list-group">
      {props.stories.map(story => (
        <NewsListItem story={story} key={story.slug} />
      ))}
    </ul>
  );
};
