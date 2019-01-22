import React, { Component } from "react";

import axios from "axios";

import NewsList from "../components/NewsList";

const initialState = { stories: [] };

const baseURL =
  "https://beta.stockzoom.com/api/v1/unistream/stories/?page_size=20";

export default class NewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  componentDidMount() {
    this.fetch();
  }

  fetch(url = baseURL) {
    const onSuccess = ({ data }) => {
      this.setState({
        ...this.state,
        next: data.next,
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

  handleLoadMore = () => {
    this.fetch(this.state.next);
  };

  render() {
    return (
      <NewsList
        stories={this.state.stories}
        handleLoadMore={this.handleLoadMore}
      />
    );
  }
}
