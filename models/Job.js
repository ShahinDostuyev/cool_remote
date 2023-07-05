const { default: mongoose, Schema } = require("mongoose");

const JobSchema = new Schema(
  {
    title: String,
    summary: String,
    description: String,
    minSalary: Number,
    maxSalary: Number,
    locations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Location" }],
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", JobSchema);

module.exports = {
  Job,
};
