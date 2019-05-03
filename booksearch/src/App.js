import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'
import ButtonAppBar from './components/buttonAppBar/ButtonAppBar'
import Jumbotron from './components/jumbotron/Jumbotron'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ButtonAppBar />
          <Jumbotron />
					{/* <Route path='' Component={} />
					<Route path='' Component={} /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
