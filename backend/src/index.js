const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");

require("./models/users");
require('dotenv').config(); 

const app = express();

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (request, response) => {
  return response.send('TEST 01');
});

app.use("/api", require("./controllers/usersController"));

app.listen(process.env.PORT, () => {
  console.log('Listen on Port: ' + process.env.PORT)
});