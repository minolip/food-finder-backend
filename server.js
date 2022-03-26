const app = require('./app');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello Minoli Server is working!'
  });
});