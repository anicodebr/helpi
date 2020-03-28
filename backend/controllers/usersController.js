const router = require("express").Router();
const mongoose = require("mongoose");
const authMiddleware = require("../middleware/authenticate");

const User = mongoose.model("User");

router.post("/registrar", async (req,res) => {
  const { email, username } = req.body;

  try {
    if (await User.findOne({email})) {
      return res.status(400).json({ error: "User exists" });
    }

    const user = await User.create(req.body);

    return res.json({ user });
  }catch (err) {
    return res.status(400).json({ error: "User reg fail" });
  }
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
    }

    return res.json({
      user,
      token: user.generateToken()
    });
  } catch (err) {
    return res.status(400).json({ error: "User auth fail" });
  }
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
