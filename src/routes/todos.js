const express = require('express')
const Todos = require('../models/todos')
const authUser = require('../middleware/authUser')

const router = express.Router()

router.get('/all', authUser, async (req, res) => {
  try {
    const todos = await Todos.find({ user: req.body.username })
    res.json({ todos })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
})

router.get('/:id', (req, res) => {

})

router.post('/add', (req, res) => {
})

router.post('/done')

router.post('/update')

router.post('/addlink')

router.post('/rework')

router.delete('/delete')

module.exports = router
