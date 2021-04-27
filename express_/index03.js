// using express, ejs  + body-parser
const express = require('express')
const app = express()
const eng = require('ejs-locals')
app.engine('ejs', eng)
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public')) // add static path

const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extend: false }))

app.get('/', (req, res, next) => {
  // res.send('test')
  // res.render('index')
  console.log('one user login our world')
  next()
})
app.get('/search', (req, res) => {
  res.render('search')
})
app.post('/searchList', (req,res)=>{
  console.log(req.body)  // will show the input name:value , req.body.name ...
  res.redirect('search') // 轉址回到search, 不然如果是 res.render('/search') 網址列會還是searchList
})

app.post('/searchAJAX', (req,res)=>{
  res.send(' hello world')
  //res.redirect('search') 
})

const port = process.env.PORT || 3000
app.listen(port)
