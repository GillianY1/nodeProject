const express = require('express')
const app = express()

const user = require('./routers/user')
app.use('/user', user) // use the express router
app.listen(3000)
