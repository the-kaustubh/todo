require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/users.js')
const todoRouter = require('./routes/todos.js')
const authRouter = require('./routes/auth.js')
const app = express()

const PORT = process.env.PORT || 3000

mongoose.connect("mongodb://localhost/ts")

const db = mongoose.connection
db.on('open', () => { console.log("DB connected") })
db.on('error', (e) => { console.log(e) })

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/todos', todoRouter)

app.get('/', async (req, res) => {
  res.json({ msg: 'hello' })
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})

module.exports = app
