const jwt = require('jsonwebtoken')
const User = require('../models/users')

async function authUser(req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.json({ msg: 'Unauthorized' })
  let usr

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) throw new Error('Invalid User')
      usr = user
    })

    const userPresent = await User.findOne({
      username: usr.username
    })

    if (userPresent == null) {
      return res.json({ msg: 'Unauthorized' })
    }

    req.user = userPresent
    next()
  } catch (e) {
    res.json({ msg: e.message })
  }
}

module.exports = authUser
