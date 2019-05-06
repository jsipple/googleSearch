const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080 ;
const app = express();
const mongoose = require('mongoose')
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/books";


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

app.post('/api/favorites', req, res => {
  let title = req.body.title;
  let author = req.body.authors;
  let desc = req.body.desc
  Books.create( {title, author, desc}).then(results => {
    res.json(results)
  })
})

app.get('/api/fav', (req, res) => {
  Books.find({})
    .then(data => {
      res.json(data)
    })
})

app.delete('/api/delete/:id', (req,res) => {
  Article.deleteOne({title: req.params.id}).catch(err => console.log(err))
})

// mongoose.Promise = global.Promise
mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, function(error) {
 if (error) {
  console.log(error)
  throw error
 }
})
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const apiKey = 'AIzaSyCMzb2LstmY2crEcxy3rWOtl9VOovK3yO4'
// example of a call this would look only if public download
// GET https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=yourAPIKey

// below looks for one book


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
