import React, { Component } from "react";

import TimeAgo from "react-timeago";
import { Collapse } from "reactstrap";

export default class NewsListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { collapse: false };
  }

  toggleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    const { story } = this.props;

    function renderImage() {
      if (story.image) {
        return (
          <img src={story.image} className="card-img-top" alt={story.heading} />
        );
      }
      return null;
    }

    return (
      <div className="card mb-3" onClick={this.toggleCollapse}>
        {renderImage()}
        <div className="card-body p-3">
          <p>{story.heading}</p>
          <p className="mb-0 text-muted">
            <small>
              {story.provider.name} &middot;{" "}
              <TimeAgo date={story.published_at} />
            </small>
          </p>
          <Collapse isOpen={this.state.collapse}>
            <p className="mt-2">
              <small>{story.summary || story.body}</small>
            </p>
          </Collapse>
        </div>
      </div>
    );
  }
}
