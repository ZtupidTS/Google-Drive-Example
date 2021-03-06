const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storedSheets = new Schema({
  username: {
    type: String,
    required: true
  },
  subscriptionId: {
    type: String,
    required: true
  },
  sheetId: String,
  tabName: String,
  columnCount: Number
})

module.exports = StoredSheet = mongoose.model('storedsheets', storedSheets)