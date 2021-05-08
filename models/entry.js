const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = mongoose.Schema({
  text: String,
  imageUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Entry', entrySchema);