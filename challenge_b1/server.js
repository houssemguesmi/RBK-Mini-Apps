const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.static("client/dist"));

app.get("/", (req, res) => {});

app.listen(PORT, (err) => {
  if (!err) {
    console.log("Server Listening on port: ", PORT);
  }
});
