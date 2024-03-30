const { goshtxonaDB, shashlikxonaDB } = require("../models/prices.models");

// get

const getShashlikPrices = async (req, res) => {
  try {
    const allShashlikPrices = await shashlikxonaDB.find();
    if (!allShashlikPrices.length) {
      return res.status(404).json({
        status: "warning",
        msg: "No shashlik prices found",
        innerData: allShashlikPrices,
      });
    }
    res.status(200).json({
      status: "success",
      msg: "All shashlik prices are found",
      innerData: allShashlikPrices,
    });

    // let empty = await workerDB.deleteMany({});
    // if (!empty) {
    //   return res
    //     .status(404)
    //     .json({ msg: "Couldn't delete products", innerData: empty });
    // }
    // res.send({ msg: "collection is cleared", innerData: empty });
  } catch (error) {
    console.error("Error in getShashlikPrices: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getGoshtxonaPrices = async (req, res) => {
  try {
    const allGoshtPrices = await goshtxonaDB.find();
    if (!allGoshtPrices.length) {
      return res.status(404).json({
        status: "warning",
        msg: "No shashlik prices found",
        innerData: allGoshtPrices,
      });
    }
    res.status(200).json({
      status: "success",
      msg: "All shashlik prices are found",
      innerData: allGoshtPrices,
    });

    // let empty = await workerDB.deleteMany({});
    // if (!empty) {
    //   return res
    //     .status(404)
    //     .json({ msg: "Couldn't delete products", innerData: empty });
    // }
    // res.send({ msg: "collection is cleared", innerData: empty });
  } catch (error) {
    console.error("Error in getGoshtxonaPrices: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// create price

const createShashlikxonaPrice = async (req, res) => {
  try {
    let { mincedMeat, meat } = req.body;

    const shashlikxonaData = {
      mincedMeat,
      meat,
    };

    const shashlikxona = await shashlikxonaDB.create(shashlikxonaData);
    await shashlikxona.save();
    res.status(201).json({
      status: "success",
      msg: "Create prices",
      innerData: shashlikxona,
    }); // 201 - Muvaffaqiyatli yaratildi
  } catch (error) {
    console.error("Error in createShashlikxonaPrice: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Goshtxona ma'lumotlarini yaratish funksiyasi
const createGoshtxonaPrice = async (req, res) => {
  try {
    let { mincedMeat, meat, meatKG } = req.body;
    const goshtxonaData = {
      mincedMeat,
      meat,
      meatKG,
    };
    const goshtxona = await goshtxonaDB.create(goshtxonaData);

    res
      .status(201)
      .json({ status: "success", msg: "Create prices", innerData: goshtxona });
  } catch (error) {
    console.error("Error in createGoshtxonaPrice: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

//update prices

const updateShashlikxonaPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { mincedMeat, meat } = req.body;
    const findUser = await shashlikxonaDB.findByIdAndUpdate(
      id,
      {
        meat,
        mincedMeat,
      },
      { new: true }
    );
    if (!findUser) {
      return res
        .status(404)
        .json({ msg: false, status: "warning", innerData: findUser });
    }

    res.status(200).json({
      status: "success",
      msg: "Shashlikxona prices update",
      innerData: findUser,
    });
  } catch (error) {
    console.error("Error in updateShashlikxonaPrice: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateGoshtxonaPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { meat, mincedMeat, meatKG } = req.body;
    const findUser = await goshtxonaDB.findByIdAndUpdate(
      id,
      {
        meat,
        mincedMeat,
        meatKG,
      },
      { new: true }
    );
    if (!findUser) {
      return res
        .status(404)
        .json({ msg: false, status: "warning", innerData: findUser });
    }

    res.status(200).json({
      status: "success",
      msg: "Goshtxona prices update",
      innerData: findUser,
    });
  } catch (error) {
    console.error("Error in updateGoshtxonaPrice: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getGoshtxonaPrices,
  getShashlikPrices,
  createGoshtxonaPrice,
  createShashlikxonaPrice,
  updateGoshtxonaPrice,
  updateShashlikxonaPrice,
};
