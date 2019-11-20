const mongoose = require('mongoose');


const trackSchema = new mongoose.Schema({
  position: String,
  title: String,
  duration: String,

})

const recordSchema = new mongoose.Schema({
  masterID: {type: Number, unique: true},
  masterURL: String,
  title: String,
  artist: String,
  genres: [String],
  year: Number,
  coverArt: String,
  tracklist: [{type: mongoose.Schema.Types.ObjectId, ref: trackSchema}]
})

module.exports = mongoose.model('Record', recordSchema)
