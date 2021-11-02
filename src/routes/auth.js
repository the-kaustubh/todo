const express = require('express')

const router = express.Router()

router.post('/login')

router.post('/register', (req, res) => {
  res.json({msg: "Register Hit"})
})

module.exports = router
