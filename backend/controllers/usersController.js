const router = require("express").Router();
const mongoose = require("mongoose");
const authMiddleware = require("../middleware/authenticate");

const User = mongoose.model("User");

router.post("/registrar", async (req,res) => {
  const { email, name, pass} = req.body;

  if(email && name && pass){
    if (await User.findOne({email})) {
      return res.status(400).json({ error: "User exists" });
    }
    await User.create(req.body);
    return res.status(200).json({msg: "Success!"});
  }
  
  return res.status(400).json(null);
});

router.post("/auth", async (req, res) => {
  const { email, pass } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json(null);
  }

  if (!(await user.compareHash(pass))) {
    return res.status(401).json({ error: "Pass invalid" });
  }else{
    let token = user.generateToken(user._id);
    return res.status(200).json({
      id: user._id,
      email: user.email,
      token: token 
    })
  }

  // return res.json({
  //   user,
  //   token: user.generateToken()
  // });

});

router.use(authMiddleware);

router.get("/me", async (req, res) => {
  try {
    const { userId } = req;

    const user = await User.findById(userId);

    return res.json({ user });
  } catch (err) {
    return res.status(400).json({ error: "Can't get user info" });
  }
});

module.exports = router;
