import React, { Component } from "react";

import axios from "axios";

import NewsList from "../components/NewsList";

const initialState = { stories: [] };

export default class NewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  componentDidMount() {
    const url =
      "https://beta.stockzoom.com/api/v1/unistream/stories/?page_size=40";

    const onSuccess = ({ data }) => {
      this.setState({
        ...this.state,
        stories: [...this.state.stories, ...data.results]
      });
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
    return (
      <div>
        <NewsList stories={this.state.stories} />
      </div>
    );
  }
}
