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
        <div className="feature-container">
          <h2>MyMedicalBot - Coding Challenge</h2>
          <Features className="feature-item"/>
        </div>
      </div >
    );
  }
}

export default App;
