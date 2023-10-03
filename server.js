process.env.NODE_ENV = process.env.NODE_ENV  || 'development';
const express = require('./app/config/express');

const app = express();

app.listen(2021);

module.exports = app;

console.log("Server is running .......");