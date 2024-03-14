const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const serverless = require('serverless-http');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public/'));

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

const projectsRouter = require('./routes/projects');
app.use('/.netlify/api', projectsRouter);

app.use('/api/projects', projectsRouter);

module.exports.handler = serverless(app);
