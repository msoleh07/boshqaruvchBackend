const { goshtxonaDB } = require("../models/prices.models");
const { butcheryUserDB } = require("./../models/butcheryUser.models");
const bcrypt = require("bcrypt");

// GET
const getButcheryUser = async (req, res) => {
  try {
    // Barcha butchery foydalanuvchilarni topish
    const allButcheryUser = await butcheryUserDB.find();

    // Agar foydalanuvchilar topilmagan bo'lsa, 404 xatolikni qaytarib beramiz
    if (!allButcheryUser.length) {
      return res.status(404).json({
        status: "warning",
        msg: "No All butchery user found",
        innerData: allButcheryUser,
      });
    }

    // Barcha butchery foydalanuvchilarni muvaffaqiyatli topib, 200 status kodi bilan javob qaytarib beramiz
    res.status(200).json({
      status: "success",
      msg: "All butchery user are found",
      innerData: allButcheryUser,
    });

    // butcheryUserDB ma'lumotlar bazasini o'chirish (kerak bo'lsa)
    // let empty = await butcheryUserDB.deleteMany({});
    // if (!empty) {
    //   return res
    //     .status(404)
    //     .json({ msg: "Couldn't delete products", innerData: empty });
    // }
    // res.send({ msg: "collection is cleared", innerData: empty });
  } catch (error) {
    // Xatolikni nazorat qilish
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

const addMeatKG = async (req, res) => {
  try {
    let { username, value } = req.body;
    let { meatKG } = value;

    const findUser = await butcheryUserDB.findOne({ username });

    if (!findUser) {
      return res.status(404).json({
        msg: "Not found user data",
        status: "Warning",
        innerData: findUser,
      });
    }

    const today = new Date();
    const meatKGdata = await goshtxonaDB.findOne();

    if (meatKG) {
      let quantity = findUser.addMeatKg.find((q) => q.quantity === meatKG);

      if (quantity) {
        return res.status(409).json({
          msg: "Data already exists",
          status: "Warning",
          innerData: findUser,
        });
      }

      const totalMoney = meatKGdata.meatKG * meatKG; // Calculate totalMoney

      // unshift data to meatKG array
      findUser.addMeatKg.unshift({
        quantity: meatKG,
        addetTime: today,
        totalMoney: totalMoney,
      });

      // unshift data to userStories array
      findUser.userStories.unshift({
        addetTime: today,
        addMeatKg: {
          quantity: meatKG,
          addetTime: today,
          totalMoney: totalMoney,
        },
      });
    }

    await findUser.save();

    res.status(200).json({
      msg: "Data successfully saved",
      status: "successfully",
      innerData: findUser,
    });
  } catch (error) {
    console.log("Error in addMeatKG controller", error.massage);
    res.status(500).json({ error: "Interval Server Error" });
  }
};

module.exports = {
  getButcheryUser,
  butcheryUserSignUp,
  butcheryUserLogin,
  addMeatKG,
};
