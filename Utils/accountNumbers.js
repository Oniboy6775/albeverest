const User = require("../Models/usersModel");
const axios = require("axios");
const generateAcc = async ({ userName, email }) => {
  const {
    MONNIFY_API_URL,
    MONNIFY_API_KEY,
    MONNIFY_API_CONTRACT_CODE,
    MONNIFY_API_SECRET,
  } = process.env;
  try {
    const response = await axios.post(
      `${MONNIFY_API_URL}/api/v1/auth/login`,
      {},
      {
        headers: {
          Authorization: `Basic ${btoa(
            MONNIFY_API_KEY + ":" + MONNIFY_API_SECRET
          )}`,
        },
      }
    );
    const {
      responseBody: { accessToken },
    } = response.data;
    const accountDetails = await axios.post(
      `${MONNIFY_API_URL}/api/v2/bank-transfer/reserved-accounts`,
      {
        accountReference: email,
        accountName: userName,
        currencyCode: "NGN",
        contractCode: MONNIFY_API_CONTRACT_CODE,
        customerEmail: email,
        customerName: userName,
        getAllAvailableBanks: true,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log("generating account number for the new user");
    const accountList = accountDetails.data.responseBody.accounts;

    let userToUpdate = await User.findOne({ email, userName });

    await User.updateOne(
      { _id: userToUpdate._id },
      {
        $push: { accountNumbers: accountList },
      }
    );
    console.log(" account number generated for the new user");
  } catch (error) {
    console.log(error);
  }
};
module.exports = generateAcc;
