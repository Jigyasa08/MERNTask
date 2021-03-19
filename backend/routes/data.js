const express = require("express");
const router = express.Router();

const {
  getData,
  postData,
  editData,
} = require("../controllers/data-controller");

//Provide routes to API's
router.get("/data", getData);
router.post("/data", postData);
router.post("/data/:id", editData);

module.exports = router;
