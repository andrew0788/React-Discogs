const mongoose = require('mongoose');


const recordSchema = new mongoose.Schema({
  masterID: {type: Number, unique: true},
  masterURL: String,
  title: String,
  artist: String,
  genres: [String],
  year: Number,
  coverArt: String,
})

module.exports = mongoose.model('Record', recordSchema)
