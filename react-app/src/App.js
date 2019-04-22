import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import bocadillo_logo from "./bocadillo.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.updateBocadilloMessage = this.updateBocadilloMessage.bind(this);
    this.state = { bocadilloMessage: "fetching..." };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img
              src={bocadillo_logo}
              className="App-logo"
              alt="bocadillo logo"
            />
            <img src={logo} className="App-logo" alt="react logo" />
          </div>
          <p>Hello from Bocadillo and React!</p>
          <p>A message from the Bocadillo server: </p>
          <p className="italic">"{this.state.bocadilloMessage}"</p>
          <button className="App-button" onClick={this.updateBocadilloMessage}>
            Update Message
          </button>
          <p>
            Edit <code>react-app/src/App.js</code> or <code>server/app.py</code> and
            save to reload.
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
  componentDidMount() {
    this.updateBocadilloMessage();
  }
  async updateBocadilloMessage() {
    const bocadilloResponse = await axios.get("/api/message");
    this.setState({ bocadilloMessage: bocadilloResponse.data.message });
  }
}

export default App;
