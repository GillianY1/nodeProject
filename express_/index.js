let express = require('express')
let app = express()


//middle ware
let login = function(req,res,next){

}

app.get('/',login,function(req,res){

})

app.get('/profile/:name/:serial',function(req,res,next)){
    console.log(req.params)
    res.send(`YOut name: ${req.params.name}`)
}

app.use()
