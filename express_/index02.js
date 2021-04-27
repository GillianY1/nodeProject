const express = require('express')
const app = express()
const eng = require('ejs-locals')
app.engine('ejs', eng)
app.set('views', './views') // ejs template 放在views folder下
app.set('view engine', 'ejs') // 使用 ejs這個engine 來跑

app.get('/', (req, res, next) => {
  // res.send('test')
  // res.render('index')
})

const port = process.env.PORT || 3000
app.listen(port)
