const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

mongoose.connect('mongodb://localhost:27017/azusa', { useNewUrlParser: true }, err => {
  if (err) {
    console.error(err)
  } else {
    console.log('Connection success!')
  }
})

const Schema = mongoose.Schema

let checkCodeSchema = new Schema({
  token: String,
  code: String
})

let userSchema = new Schema({
  id: String,
  username: String,
  password: String,
  avatar: {
    type: String,
    default: ''
  },
  token: {
    type: String,
    default: ''
  }
})

let recordSchema = new Schema({
  title: String,
  type: String,
  detail: String,
  create_time: {
    type: String,
    default: Date.now
  },
  image: Array,
  view: 0,
  creater: String,
  avatar: String,
  id: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
})

exports.CheckCode = mongoose.model('Checkcode', checkCodeSchema)
exports.User = mongoose.model('User', userSchema)
exports.Record = mongoose.model('Record', recordSchema)
