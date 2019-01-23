import React, { Component } from "react";

import axios from "axios";

import NewsList from "../components/NewsList";

const initialState = { stories: [] };

export const baseURL =
  "https://beta.stockzoom.com/api/v1/unistream/stories/?page_size=20";

export default class NewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    console.log("In .constructor()...");
  }

  componentDidMount() {
    console.log("In .componentDidMount()...");
    this.fetch();
  }

  fetch(url = baseURL) {
    const onSuccess = ({ data }) => {
      const stories = [...this.state.stories, ...data.results];
      this.setState({
        ...this.state,
        next: data.next,
        stories
      });
      return stories;
    };

    const onError = () => {
      console.log("Error");
    };

    axios
      .get(url)
      .then(onSuccess)
      .then(stories => {
        const newStories = stories.map(story => {
          story.isRead = false;
          return story;
        });
        this.setState({ stories: newStories });
      })
      .catch(onError);
  }

  handleHideStory = story => {
    const stories = this.state.stories.map(s => {
      if (s.slug === story.slug) {
        s.isRead = true;
      }
      return s;
    });

    this.setState({ stories });
  };

  handleLoadMore = () => {
    this.fetch(this.state.next);
  };

  render() {
    console.log("stories in NewsContainer:", this.state.stories);
    return (
      <NewsList
        stories={this.state.stories}
        handleLoadMore={this.handleLoadMore}
        handleHideStory={this.handleHideStory}
      />
    );
  }
}
