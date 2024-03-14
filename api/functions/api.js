const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const serverless = require('serverless-http');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/dist/'));

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    dbName: 'projects'
  });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const projectsRouter = require('../routes/projects');
app.use('/', projectsRouter);


// Add a middleware function to disconnect from MongoDB after handling the request
app.use((req, res, next) => {
  mongoose.disconnect();
  next();
});

module.exports.handler = serverless(app);
