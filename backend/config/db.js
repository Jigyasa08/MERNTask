const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//Function to connect to the Database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.ATLAS_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongodb connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
