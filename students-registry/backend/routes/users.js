const router = require("express").Router();
let User = require("../models/user");

router.route("/").get((req, res) => {
  User.find() // mongoose command
    .then((users) => res.json(users))
    .catch((error) => res.status(400).json("Error:" + error));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("Userr added!"))
    .catch((error) => res.status(400).json("Error:" + error));
});

module.exports = router;
