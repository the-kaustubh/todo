const { Schema, model }  = require('mongoose')

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
  },
  displayPicture: {
    type: String,
  },
}, { timestamps: true })

module.exports = model('users', UserSchema)
