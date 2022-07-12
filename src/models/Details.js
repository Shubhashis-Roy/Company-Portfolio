const mongoose = require("mongoose");
const Details = mongoose.Schema({
  brandName : String,
  brandIconUrl : String,
  links: [
      {
          label : String,
          Url : String,
      },
  ],
})

module.exports = mongoose.model("details", Details)