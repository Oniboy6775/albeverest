const mongoose = require("mongoose");
const cabletvModel = require("./Models/cabletvModel");
const dataModel = require("./Models/dataModel");
const services = require("./Models/services");
const costPriceModel = require("./Models/costPriceModel");

const { GOTV, DSTV, STARTIME } = require("./API_DATA/cabletv");
const {
  MTN_SME,
  GLO,
  AIRTEL,
  NMOBILE,
  SERVICES,
} = require("./API_DATA/newData");
require("dotenv").config();
const costPrices = [
  { network: "MTN", costPrice: 256 },
  { network: "MTN-CG", costPrice: 255 },
  { network: "GLO", costPrice: 225 },
  { network: "AIRTEL", costPrice: 276 },
  { network: "9MOBILE", costPrice: 120 },
  { network: "MTN-COUPON", costPrice: 205 },
];
const populate = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected");
    // await costPriceModel.deleteMany({});
    // await costPriceModel.create(costPrices);
    // await dataModel.create(MTN_SME);
    // await dataModel.updateMany(
    //   { plan: "500.0MB" },
    //   { $set: { volumeRatio: 0.5 } }
    // );

    // await dataModel.deleteMany({});
    // await dataModel.create(MTN_SME);
    // await dataModel.create(AIRTEL);
    // await dataModel.create(GLO);
    // await dataModel.create(NMOBILE);
    // await cabletvModel.create(GOTV);
    // await cabletvModel.create(DSTV);
    // await cabletvModel.create(STARTIME);
    // await services.create(SERVICES);

    console.log("Success!!");
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

populate();
