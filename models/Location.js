const { default: mongoose,Schema } = require("mongoose");

const LocationSchema = new Schema({
  name: String,
  icon: String,
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
});

const Location = mongoose.model("Location", LocationSchema);

module.exports = {
  Location,
};
