const { Schema, model } = require('mongoose')

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  links: [{
    type: Array,
    required: true
  }],
  deadline: {
    type: Date
  },
  status: {
    type: Number,
    enum: ['Pending', 'In Progress', 'Done', 'Postponed', 'Cancelled', 'Deleted'],
    default: 'Pending'
  },
  user: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = model('todos', TodoSchema)
