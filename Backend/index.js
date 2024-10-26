
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/signup', () => {
 
})

mongoose.connect("mongodb://localhost:27017/MYBLOG").then(() => {
  app.listen(5000, () => {
    console.log(`app is running on 5000`);
  });
});

