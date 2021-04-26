const express = require('express')
const app = express()

const eng = require('ejs-locals')

app.engine('ejs', eng)
app.set('views', './views') // ejs template 放在views folder下
app.set('view engine', 'ejs') // 使用 ejs這個engine 來跑

app.use(express.static('public'))

app.get('/', function (req, res, next) {
  res.render('index',{
    'title':'hello kitty house',
    'boss':"pink kitty ",
    'code':"<h1> The Green Light </h1>"
  })
})
app.get('/main', function (req, res, next) {
  res.render('welcome',{
    'title':'hello kitty house',
    'boss':"pink kitty ",
    'code':"<h1> The Green Light </h1>"
  })
})
app.get('/user', function (req, res, next) {
  res.render('user',{
    'title':'hello kitty house',
    'boss':"pink kitty ",
    'code':"<h1> The Green Light </h1>"
  })
})


/*
app.use(function (req, res, next) {
  res.status(404).send('抱歉這網頁不存在')
  next()
})
app.use(function (error, req, res, next) {
  // console.error(error.stack)
  res.status(500).send('程式錯誤,請洽工程師') // test ,ex: app.use((req,res)=>{kk()})
  next()
})
*/

const port = process.env.PORT || 3000
app.listen(port)
