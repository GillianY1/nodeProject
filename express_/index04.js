const express = require('express')
const app = express()

const user = require('./routers/user')
app.use('/user', user)

app.listen(3000)
