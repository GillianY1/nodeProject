var express = require('express')
var app = express()
var engine = require('ejs-locals')
var bodyParser = require('body-parser')

var admin = require('firebase-admin')
var serviceAccount = require('./todolist-4f243-firebase-adminsdk-fga6d-4605b974ae.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todolist-4f243-default-rtdb.firebaseio.com/"
})

const fireData = admin.database()
console.log(fireData)

app.engine('ejs', engine)
app.set('views', './views')
app.set('view engine', 'ejs')
//增加靜態檔案的路徑
app.use(express.static('public'))

// 增加 body 解析
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 路由
app.get('/', function (req, res) {
  res.render('index')
    
})

// 監聽 port
var port = process.env.PORT || 3000
app.listen(port)
