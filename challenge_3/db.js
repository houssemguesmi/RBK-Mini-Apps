const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({ name: String, password: String });
mongoose.connect("mongodb://localhost:27017/challenge3", {
  useNewUrlParser: true,
});
var MyModel = mongoose.model("users", schema);

exports.saveInfos = (dataToSave) => {
  var challenge3 = new MyModel(dataToSave);
  challenge3.save(challenge3, (err) => {
    if (!err) {
      console.log("save");
    }
  });
};
