const { Schema, model } = require('mongoose')

const TodoSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Todo should have a title']
  },
  body: {
    type: String,
    required: [true, 'Todo should have a body']
  },
  subTodo: {
    type: Schema.ObjectId,
    default: null
  },
  links: [{
    type: Array,
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
    required: [true, 'User is null']
  }
}, { timestamps: true })

module.exports = model('todos', TodoSchema)
