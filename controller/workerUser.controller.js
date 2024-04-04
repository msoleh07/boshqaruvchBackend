const { workerDB } = require("../models/worker.modles");
const bcrypt = require("bcrypt");
const { goshtxonaDB, shashlikxonaDB } = require("../models/prices.models");
const { butcheryUserDB } = require("../models/butcheryUser.models");

const getWorkerUser = async (req, res) => {
  try {
    const allWorkerUser = await workerDB.find();
    if (!allWorkerUser.length) {
      return res.status(404).json({
        status: "warning",
        msg: "No All worker user found",
        innerData: allWorkerUser,
      });
    }
    res.status(200).json({
      status: "success",
      msg: "All Worker user are found",
      innerData: allWorkerUser,
    });

    // let empty = await workerDB.deleteMany({});
    // if (!empty) {
    //   return res
    //     .status(404)
    //     .json({ msg: "Couldn't delete products", innerData: empty });
    // }
    // res.send({ msg: "collection is cleared", innerData: empty });
  } catch (error) {
    console.error("Error in getWorkerUser: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const workerUserSignUp = async (req, res) => {
  try {
    const { firstname, lastname, username, password, role } = req.body;

    const user = await workerDB.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username  already exists" });
    }

    // HASH PASSWORD HERE

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new workerDB({
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

const workerUserLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await workerDB.findOne({ username });
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
    console.log("Error in workerUserLogin controller", error.massage);
    res.status(500).json({ error: "Interval Server Error" });
  }
};

const workerAddData = async (req, res) => {
  try {
    let { username, value, addMan } = req.body;
    let { addMincedMeat, addMeat } = value;

    const findUser = await workerDB.findOne({ username });
    const findAddMan = await butcheryUserDB.findOne({ username: addMan });

    if (!findUser) {
      return res.status(404).json({
        msg: "Not found user data",
        status: "Warning",
        innerData: findUser,
      });
    }

    if (!findAddMan) {
      return res.status(404).json({
        msg: "Not found user data",
        status: "Warning",
        innerData: findAddMan,
      });
    }

    const today = new Date();
    const data = await shashlikxonaDB.findOne();
    const meatDataG = await goshtxonaDB.findOne();

    if (addMincedMeat) {
      if (findUser.addMincedMeat.find((tod) => tod.addetTime === today)) {
        let quantity = findUser.addMincedMeat.find(
          (q) => q.quantity === addMincedMeat
        );
        let quantityG = findAddMan.addMincedMeat.find(
          (q) => q.quantity === addMincedMeat
        );
        if (quantity || quantityG) {
          return res.status(409).json({
            msg: "Data already exists",
            status: "Warning",
            innerData: findUser,
          });
        }
      }

      const { mincedMeat } = data; // Get data from "data"
      const totalMoney = mincedMeat * addMincedMeat; // Calculate totalMoney
      const totalMoneyG = meatDataG.mincedMeat * addMincedMeat; // Calculate totalMoney

      // Push data to addMincedMeat array
      findUser.addMincedMeat.push({
        quantity: addMincedMeat,
        addetTime: today,
        totalMoney: totalMoney,
      });

      findAddMan.addMincedMeat.push({
        quantity: addMincedMeat,
        addetTime: today,
        totalMoney: totalMoneyG,
      });

      // Push data to userStories array
      findAddMan.userStories.push({
        addetTime: today,
        addMincedMeat: {
          quantity: addMincedMeat,
          addetTime: today,
          totalMoney: totalMoneyG,
        },
      });
    }

    if (addMeat) {
      if (findUser.addMeat.find((tod) => tod.addetTime === today)) {
        let quantity = findUser.addMeat.find((q) => q.quantity === addMeat);
        let quantityG = findAddMan.addMeat.find((q) => q.quantity === addMeat);
        if (quantity || quantityG) {
          return res.status(409).json({
            msg: "Data already exists",
            status: "Warning",
            innerData: findUser,
          });
        }
      }

      const { meat } = data; // Get data from "data"
      const totalMoney = meat * addMeat; // Calculate totalMoney
      const totalMoneyG = meatDataG.meat * addMeat;

      // Push data to addMeat array
      findUser.addMeat.push({
        quantity: addMeat,
        addetTime: today,
        totalMoney: totalMoney,
      });

      // Push data to userStories array
      findUser.userStories.push({
        addetTime: today,
        addMeat: {
          quantity: addMeat,
          addetTime: today,
          totalMoney: totalMoney,
        },
      });

      findAddMan.addMeat.push({
        quantity: addMeat,
        addetTime: today,
        totalMoney: totalMoneyG,
      });

      // Push data to userStories array
      findAddMan.userStories.push({
        addetTime: today,
        addMeat: {
          quantity: addMeat,
          addetTime: today,
          totalMoney: totalMoneyG,
        },
      });
    }

    await findUser.save();
    await findAddMan.save();
    res.status(200).json({
      msg: "Data successfully saved",
      status: "successfully",
      innerData: findUser,
    });
  } catch (error) {
    console.log("Error in workerAddData controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getWorkerUser,
  workerUserSignUp,
  workerUserLogin,
  workerAddData,
};
