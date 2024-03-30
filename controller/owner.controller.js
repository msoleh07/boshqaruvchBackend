const { ownerDB } = require("../models/owner.modles");
const bcrypt = require("bcrypt");

// GET
const getOwnData = async (req, res) => {
  try {
    const allOwn = await ownerDB.find();

    if (!allOwn.length) {
      return res.status(404).json({
        status: "warning",
        msg: "No all owner user found",
        innerData: allOwn,
      });
    }
    res.status(200).json({
      status: "success",
      msg: "All owner user are found",
      innerData: allOwn,
    });

    // let empty = await ownerDB.deleteMany({});
    // if (!empty) {
    //   return res
    //     .status(404)
    //     .json({ msg: "Couldn't delete products", innerData: empty });
    // }
    // res.send({ msg: "collection is cleared", innerData: empty });
  } catch (error) {
    console.error("Error in getOwnData: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// CREATE

const ownSignUp = async (req, res) => {
  try {
    const { firstname, lastname, username, password, role } = req.body;

    const user = await ownerDB.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username  already exists" });
    }

    // HASH PASSWORD HERE

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new ownerDB({
      firstname,
      lastname,
      username,
      password: hashedPassword,
      role,
    });

    if (newUser) {
      //Generate JWT token hareawait newUser.save();
      res.status(201).json({
        status: "successfuly",
        msg: "Owner addat database",
        innerdata: newUser,
      });
      await newUser.save();
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error in ownSignUp: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const ownLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await ownerDB.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    res.status(200).json({
      status: "successfuly",
      msg: "done",
      innerdata: user,
    });
  } catch (error) {
    console.log("Error in ownLogin controller", error.massage);
    res.status(500).json({ error: "Interval Server Error" });
  }
};

const ownLogout = (req, res) => {
  try {
    res.status(200).json({ massage: "Logged out successfully" });
  } catch (error) {
    console.log("Error in ownLogout controller", error.massage);
    res.status(500).json({ error: "Interval Server Error" });
  }
};

module.exports = {
  getOwnData,
  ownSignUp,
  ownLogin,
  ownLogout,
};
