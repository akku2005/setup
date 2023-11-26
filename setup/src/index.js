require("dotenv").config('./env');
const express = require('express')
const app = express();

const {connectDB} = require('./db/mongodb.index.js');
const PORT = process.env.PORT

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });

    app.on('error', (err) => {
      console.log('Error:', err);
      throw err;
    });
  })
  .catch((err) => {
    console.log('MongoDB connection failed:', err);
  });