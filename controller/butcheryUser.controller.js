const { butcheryUserDB } = require("./../models/butcheryUser.models");
const bcrypt = require("bcrypt");

// GET
const getButcheryUser = async (req, res) => {
  try {
    const allButcheryUser = await butcheryUserDB.find();

    if (!allButcheryUser.length) {
      return res.status(404).json({
        status: "warning",
        msg: "No All butchery user found",
        innerData: allButcheryUser,
      });
    }
    res.status(200).json({
      status: "success",
      msg: "All butchery user are found",
      innerData: allButcheryUser,
    });

    // let empty = await butcheryUserDB.deleteMany({});
    // if (!empty) {
    //   return res
    //     .status(404)
    //     .json({ msg: "Couldn't delete products", innerData: empty });
    // }
    // res.send({ msg: "collection is cleared", innerData: empty });
  } catch (error) {
    console.error("Error in getButcheryUser: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// CREATE

const butcheryUserSignUp = async (req, res) => {
  try {
    const { firstname, lastname, username, password, role } = req.body;

    const user = await butcheryUserDB.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username  already exists" });
    }

    // HASH PASSWORD HERE

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new butcheryUserDB({
      firstname,
      lastname,
      username,
      password: hashedPassword,
      role,
    });

    if (newUser) {
      res.status(201).json({
        status: "successfuly",
        msg: "user addat database",
        innerdata: newUser,
      });
      await newUser.save();
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error in butcheryUserSignUp: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const butcheryUserLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await butcheryUserDB.findOne({ username });
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
    console.log("Error in butcheryUserLogin controller", error.massage);
    res.status(500).json({ error: "Interval Server Error" });
  }
};

const butcheryUserLogout = (req, res) => {
  try {
    res.status(200).json({ massage: "Logged out successfully" });
  } catch (error) {
    console.log("Error in butcheryUserLogout controller", error.massage);
    res.status(500).json({ error: "Interval Server Error" });
  }
};

module.exports = {
  getButcheryUser,
  butcheryUserSignUp,
  butcheryUserLogin,
  butcheryUserLogout,
};
