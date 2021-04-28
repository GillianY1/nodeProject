const express = require('express')
const app = express()

app.get('/user/edit-profile', (req, res) => {
  res.send('<h1>Edit Profile</h1>')
})
app.get('/user/profile', (req, res) => {
  res.send('<h1>Profile</h1>')
})
app.listen(3000)
