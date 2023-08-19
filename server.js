// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;

// Initialize all route with a callback function
app.listen(port, () => {
    console.log(`Server Running on: localhost:${port}`);
});

// Callback function to complete GET '/all'
app.get('/all', getData)
function getData(req,res){
  res.send(projectData)
  console.log(projectData)
} 

// Post Route
  app.post('/add', addPost);
  function addPost(req, res){
    newEntry = {
       date: req.body.date,
       temp: req.body.temp,
       content: req.body.content
     }
  
projectData.entry = newEntry;
res.send(projectData);
console.log(projectData);
    }