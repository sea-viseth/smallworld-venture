const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    employer_position: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    employerId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const COMPANY = mongoose.model("companies", companySchema);
module.exports = COMPANY;
