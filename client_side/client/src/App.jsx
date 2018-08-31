import React, { Component } from "react";

import Features from "./components/Features.jsx";

import "./stylesheets/main.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Features/>
      </div >
    );
  }
}

export default App;
