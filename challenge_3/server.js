const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, (err) => {
  if (!err) {
    console.log("app listening on port: " + PORT);
  }
});

app.get("/", (req, res) => {
  //   res.sendFile(__dirname + "/public/index.html");
});
