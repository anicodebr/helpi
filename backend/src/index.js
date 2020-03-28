const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

require('dotenv').config(); 

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/ping', (request, response) => {
  return response.send('pong');
});

app.use("/api", require("./routes/user"))

app.listen(process.env.PORT, () => {
  console.log('Listen on Port: ' + process.env.PORT)
});