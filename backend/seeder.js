const mongoose = require("mongoose");
const db = require("./data/db");
const Data = require("./models/Data");
const connectDB = require("./config/db");

//Calling the function to connect to the Database
connectDB();

//Function to insert data into the cloud after clearing all pre-existing data
const importData = async () => {
  try {
    await Data.deleteMany();
    await Data.insertMany(db);
    console.log("Data imported");
    process.exit();
  } catch (err) {
    console.log(`Error ${err}`);
    process.exit(1);
  }
};

//Function to destroy existing data
const destroyData = async () => {
  try {
    await Data.deleteMany();
    console.log("Data destroyed");
    process.exit();
  } catch (err) {
    console.log(`Error ${err}`);
    process.exit(1);
  }
};

//In Node.js if 2nd arguement is "-d" then destroy function is called else import function is called
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
