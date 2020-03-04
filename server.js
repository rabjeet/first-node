// var express = require('express'),
// app = express(),
// port = process.env.PORT || 3001;
// var routes = require('./app/routes/index.js');

// app.use("/api", routes)
// app.listen(port)
// console.log('app start' + port)
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({extended:false})
)
var User = require('./app/routes/Users')
app.use('/api', User)
app.listen(port,function(){
    console.log('server is running' + port)
})