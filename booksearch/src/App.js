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
  handleClick = (e) => {
    e.preventDefault()
    // move the key to a different file with a gitignore on it
    // running on change for some reason
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchTerm + '+intitle:&key=AIzaSyCMzb2LstmY2crEcxy3rWOtl9VOovK3yO4', (req, res) => {
      console.log(res)
    })
    .then(response => {
      console.log(response.data.items)
      this.setState({
        books: response.data.items
      })
    })
  }
  handleChange = (e) => {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }
  favorite = (e) => {
    axios.post('/api/favorites', {
      book: this.state.books[e.target.id]
    })
  }
  getFavorites = (e) => {
    axios.get('/api/favs', (req,res) => {
      this.setState({
        book: req.body
      })
    })
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>           
          <ButtonAppBar />
          <Jumbotron />
          <Route exact path='/' 
          render={(props) => <SearchBox {...props}
           handleChange={this.handleChange}
          handleClick={this.handleClick}
          searchTerm={this.state.searchTerm}
          />}
          />
          <Results favorite={this.favorite} books={this.state.books} />          
        </BrowserRouter>
    