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

    function onSuccess({ data }) {
      console.log(data);
    }

    function onError() {
      console.log("Error");
    }

    axios
      .get(url)
      .then(onSuccess)
      .catch(onError);
  }

  render() {
    return <div>Hello NewsContainer!</div>;
  }
}
