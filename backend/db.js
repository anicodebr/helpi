const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


mongoose.connect(
  "mongodb+srv://gui:guilherme@tst01-w31rl.mongodb.net/test?retryWrites=true&w=majority"
);


require("./models/users");

app.use(bodyParser.json());


app.use("/api", require("./controllers/usersController"));

app.listen(3111);
