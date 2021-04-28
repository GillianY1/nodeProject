// sample : express , getting the path the users enter and show on web page
let express = require('express')
let app = express()

//middle ware
let login = function(req,res,next){
}

app.get('/',login,function(req,res){
})

app.get('/profile/:name/:serial',function(req,res,next)){
    console.log(req.params)
    res.send(`Your name: ${req.params.name}`)
}


