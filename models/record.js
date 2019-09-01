const mongoose = require('mongoose');


const recordSchema = new mongoose.Schema({
  masterID: {type: Number, unique: true},
  title: String,
  artist: String,
  tracks: [String],
  year: Number,

})

module.exports = mongoose.model('Record', recordSchema)
