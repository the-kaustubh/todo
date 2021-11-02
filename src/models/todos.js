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
  subTodo: {
    type: Schema.ObjectId,
    default: null
  },
  links: [{
    type: Array,
    required: true
  }],
  deadline: {
    type: Date
  },
  status: {
    type: String,
    enum: [
      'Pending',
      'In Progress',
      'Done',
      'Postponed',
      'Cancelled',
      'Deleted'
    ],
    default: 'Pending'
  },
  user: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = model('todos', TodoSchema)
