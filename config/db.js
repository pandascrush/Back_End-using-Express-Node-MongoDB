const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("db is connected successfully");
  });
};

module.exports = {dbConnection}
