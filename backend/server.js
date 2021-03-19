const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes/data");

app.use(cors());
app.use(express.json());

app.use("/api/", router);

//Calling the function to connect to the Database
connectDB();

//This App runs on port 5000
app.listen(5000, () => {
  console.log("Server is up and running");
});
