const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  email: {
    type: String,
    unique:true,
    required:true,
    lowercase:true
  },

  password: {
    type:String
  }
});

UserSchema.pre("save", async function hashPassword(next){
  if(!this.isModified("password")) next();

  this.password = await bcrypt.hash(this.password,8);
});

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.password);
  },

  generateToker(){
    return jwt.sign({ foo : 'bar' }, "PROUD2SAVEBUCETINHAS", { algorithm: 'RS256' } ,{
      expiresIn:86400
    });
  }
}

mongoose.model("User",UserSchema);