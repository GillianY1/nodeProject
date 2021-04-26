const express = require('express')
const app = express()

const login = function (req, res, next) {
  console.log('pass by middleware')
  const _url = req.url
  if (_url == '/') {
    next()
  }else {
    res.send('您的登入訊息有誤')
  }
}

//add images
app.use(express.static('public'))


// apply middleware to all steps
//app.use(login)

// add middleware login after the path /
app.get('/',login, function (req, res, next) {
  res.send('<html><head></head><body><img src="/images/cat2.jpg"></body></html>')
  next() // go to next follow
})

app.get('/profile/:name/search', function (req, res, next) {
  console.log(req.params)
  console.log(req.query)
  const limit = req.query.limit
  res.send(`your name: ${req.params.name}; you want to get ${limit}`)
  // http://127.0.0.1:3000/profile/gillian/search?limit=30
  next()
})

// TEST FOR error500
/* app.use(function(req,res){
  kk()
})
*/
app.use(function (req, res, next) {
  res.status(404).send('抱歉這網頁不存在')
   next()
})
app.use(function (error, req, res, next) {
  // console.error(error.stack)
  res.status(500).send('程式錯誤,請洽工程師') // test ,ex: app.use((req,res)=>{kk()})
  next()
})

// app.set('port',....)  >> process.env.PORT
const port = process.env.PORT || 3000
app.listen(port)
