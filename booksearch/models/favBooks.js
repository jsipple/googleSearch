const mongoose = require('mongoose')

const Schema = mongoose.Schema

let favBooksSchema = new Schema({
 title: {
  type: String,
  unique: true
 },
 author: { 
  type: String,
 },
 desc: {
  type: String,
 } 

})


let Books = mongoose.model('articles', favBooksSchema)
