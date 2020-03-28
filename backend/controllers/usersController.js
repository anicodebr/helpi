const router = require("express").Router();
const mongoose = require("mongoose");
// const authMiddleware = require("../middleware/authenticate");

const User = mongoose.model("User");

router.post("/registrar", async (req,res) => {
  const { email, name, pass} = req.body;

  if(email && name && pass){
    if (await User.findOne({email})) {
      return res.status(400).json({ error: "User exists" });
    }
    console.log(req.body)
    const user = await User.create(req.body);
    console.log(user)
    return res.json({ user });
  }
  
  return res.status(401).json({error: "Missing Parameters"});

});

router.post("/authenticar", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (!(await user.compareHash(password))) {
      return res.status(400).json({ error: "Pass invalid" });
    }else{
      return res.status(200).json({user})
    }

    // return res.json({
    //   user,
    //   token: user.generateToken()
    // });
  } catch (err) {
    return res.status(400).json({ error: "User auth fail" });
  }
});

// router.use(authMiddleware);

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
