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
    required: false
  },
  country: {
    type: String,
    required: false
  },
  lang: {
    type: String,
    required: false
  },
  theme: {
    type: String,
    required: false
  },
  verified: {
    type: Boolean,
    default: false
  },
  resetPwdToken: {
    type: String,
    default: ''
  },
  displayPicture: {
    type: String,
  },
  preferredNotificationMode: {
    type: String,
    enum: [
      'mail',
      'sms',
      'both',
      'none'
    ],
    default: 'none'
  }
}, { timestamps: true })

module.exports = model('users', UserSchema)
