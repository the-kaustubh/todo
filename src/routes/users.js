const express = require('express')

const router = express.Router()

router.use((req, res, next) => {
  console.log("Hit middlwr")
  next()
})

router.get('/profile', (req, res) => {
  console.log("Hit profile")
  res.json({msg: "Profile Hit"})
})

router.post('/register', (req, res) => {
  res.json({msg: "Register Hit"})
})

router.post('/update')

router.post('/forgotPassword')

router.post('/resetPassword')

router.delete('/delete')

module.exports = router
