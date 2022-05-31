const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const policySchema = new Schema(
  {
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("policy", policySchema);
