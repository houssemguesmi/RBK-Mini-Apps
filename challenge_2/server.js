const express = require("express");
const app = express();
const helper = require("./helper/helperFunctions.js");

var fs = require("fs");

const port = 3000;

app.use(express.static("client"));

app.use(express.urlencoded({ extended: true }));

app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", (req, res) => {});

app.get("/test", (req, res) => {
  fs.readFile("./samples/csv_report.csv", (err, data) => {
    if (!err) {
      res.send(data);
    }
  });
});

app.post("/download", () => {});
app.get("/download", (req, res) => {
  fs.readFile("./samples/csv_report.csv", (err, data) => {
    if (!err) {
      res.redirect("/download");
    }
  });
});

app.post("/test", (req, res) => {
  let data = req.body;
  let arrayOfData = helper.keyValueRetrival(data);
  let stringToAdd = helper.arrayToString(
    arrayOfData.variables,
    arrayOfData.length
  );
  fs.appendFile("./samples/csv_report.csv", stringToAdd, "UTF-8", (err) => {
    if (!err) {
      res.send(stringToAdd);
    }
  });
});

app.listen(3000, function () {
  console.log("App is Listening on Port " + port);
});
