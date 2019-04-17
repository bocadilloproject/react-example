import React, { Component } from "react";
import logo from "./logo.svg";
import bocadillo_logo from "./bocadillo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bocadillo_logo} className="App-logo" alt="bocadillo logo" />
          <img src={logo} className="App-logo" alt="react logo" />
          <p>Hello from Bocadillo and React!</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://github.com/bocadilloproject/bocadillo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Bocadillo
          </a>
          <br />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
