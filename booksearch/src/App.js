import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom'
import ButtonAppBar from './components/buttonAppBar/ButtonAppBar'
import Jumbotron from './components/jumbotron/Jumbotron'
import SearchBox from './components/searchBox/SearchBox'
import axios from 'axios'
import Results from './components/results/Results'

class App extends Component {
  state = {
    searchTerm: '',
    books: []
  }
  handleClick = (search) => {
    axios.get('/api/books/' + search, (req, res) => {

    })
  }
  handleChange = (e) => {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ButtonAppBar />
          <Jumbotron />
          <SearchBox handleChange={this.handleChange} handleClick={this.handleClick} searchTerm={this.state.searchTerm}/>
          <Results books={this.state.books} />          
          {/* <Route path='' Component={} />
					<Route path='' Component={} /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
