const express = require('express')
const router = express.Router()

router.get('/edit-profile', (req, res) => {
  res.send('<h1>Edit Profile</h1>')
})
router.get('/profile', (req, res) => {
  res.send('<h1>Profile</h1>')
})

module.exports = router
