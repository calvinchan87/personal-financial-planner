var express = require("express");
var router = express.Router();

const data = require("./testdata.json");

router.get("/", function(req, res, next) {
  // res.header("Content-Type",'application/json');
  // res.send(JSON.stringify(data));
  // console.log("fetched data: ", data)
  res.send(data)
  // res.send("P.S. The Test API is working properly");
});

module.exports = router;