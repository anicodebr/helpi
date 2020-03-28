const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  // cpf:{
  //   type: String
  // }

  email: {
    type: String,
    unique:true,
    required:true,
    lowercase:true
  },

  entregador:{
    type: Boolean,
    default: false
  },

  comprador:{
    type:Boolean,
    default: false
  },

  ativo:{
    type:Boolean,
    default: false
  },
  
  secret: {
    type: String,
  },

  pass: {
    type:String
  }
});

UserSchema.pre("save", async function hashPassword(next){
  if(!this.isModified("pass")) next();

  this.pass = await bcrypt.hash(this.pass,8);
});

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.pass);
  },

  generateToken(id){
    return jwt.sign({ id: id }, process.env.SECRET,{
      expiresIn:86400
    });
  }
}

mongoose.model("User",UserSchema);