const Data = require("../models/Data");
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

//Get API function
const getData = (req, res) => {
  Data.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error:", err));
};

//Post API function
let postCount = 0;
const postData = (req, res) => {
  postCount++;
  console.log("postCount", postCount);

  //Function to delete all data
  Data.deleteMany()
    .then(function () {
      console.log("Data deleted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });

  const { id, name, age, gender } = req.body;
  const newData = new Data({
    id,
    name,
    age,
    gender,
  });

  //Posting new data
  newData
    .save()
    .then(() =>
      res.json({
        message: "New Data has been posted & old data has been destroyed",
        postCount,
      })
    )
    .catch((err) => res.status(400).json(err));
};

//Edit API function
let editCount = 0;
const editData = (req, res) => {
  Data.findById(req.params.id)
    .then((data) => {
      data.id = req.body.id;
      data.name = req.body.name;
      data.age = req.body.age;
      data.gender = req.body.gender;
      editCount++;
      console.log("editCount", editCount);
      data
        .save()
        .then(() => res.json({ message: "Data has been updated", editCount }))
        .catch((err) => res.status(400).json("Error:", err));
    })
    .catch((err) => res.status(400).json("Error:", err));
};

module.exports = { getData, postData, editData };
