import React, { Component } from "react";

import axios from "axios";

const initialState = { stories: [] };

export default class NewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  componentDidMount() {
    const url = "https://beta.stockzoom.com/api/v1/unistream/stories/";

    const onSuccess = ({ data }) => {
      console.log(data);
      this.setState({ stories: [...this.state.stories, ...data.results] });
    };

    const onError = () => {
      console.log("Error");
    };

    axios
      .get(url)
      .then(onSuccess)
      .catch(onError);
  }

  render() {
    console.log("state", this.state);
    return (
      <div>
        <ul>
          {this.state.stories.map(story => (
            <li>{story.heading}</li>
          ))}
        </ul>
      </div>
    );
  }
}
