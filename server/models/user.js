const mongoose = require("mongoose");
const { Schema, model } = mongoose;

mongoose.connect(
  "mongodb+srv://sharmakshitij250:admin@cluster0.nfzuvjm.mongodb.net/?retryWrites=true&w=majority", 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
);

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;