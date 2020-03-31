const bodyParser = require("body-parser");
const app = require('express')();
const socket = require('http').createServer(app);
const io = require('socket.io')(socket);
const cors = require('cors');
require('dotenv').config(); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Rotas do sistema
app.use("/api", require("./routes/user"))
app.use("/api/report", require("./routes/report"))

// let connectedUsers = {};

// io.on('connection', function(socket){
//   console.log('conectado')
//   // var handshakeData = socket.request;
//   // console.log("middleware:", handshakeData._query['name']);
//   // connectedUsers[]
//   socket.on('chat message', function(msg){
//     console.log(msg)
//     io.emit('chat message', msg);
//   });
// });

var connectedUsers = {};

io.on('connection',function(socket){
  
  /*Register connected user*/
    socket.on('register',function(username){
        socket.username = username;
        console.log(`${username} connected!`)
        connectedUsers[username] = socket;
    });

    socket.on('private_chat',function(data){
      const to = data.to,
              message = data.message;      
      if(connectedUsers.hasOwnProperty(to)){
          connectedUsers[to].emit('private_chat',{
              //The sender's username
              username : socket.username,
  
              //Message sent to receiver
              message : message
          });
      }
    });

    socket.on('disconnect', function(){
      console.log(`${socket.username} desconnected`)
    })
});

app.listen(process.env.PORT, () => {
  console.log('Backend na porta ' + process.env.PORT)
  socket.listen(3002,() => {
    console.log('Socket na porta 3002')
  })
});