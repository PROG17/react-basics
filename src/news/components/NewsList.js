import React from "react";

import NewsListItem from "./NewsListItem";

export default props => {
  return (
    <div className="container">
      {props.stories.map(story => (
        <NewsListItem story={story} key={story.slug} />
      ))}
      <button
        className="btn btn-primary btn-block"
        onClick={props.handleLoadMore}
      >
        LOAD MORE
      </button>
    </div>
  );
};
