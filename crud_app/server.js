var express = require('express');
var dotenv = require('dotenv');
const morgan = require('morgan');
var bodyParser = require('body-parser')
var path = require('path')

const connectDB = require('./server/database/connection')


var app = express();//innalize app variable as express aplication

dotenv.config({path:'config.env'});

const Port = process.env.PORT || 8080;

//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse requests to body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//set View engine
app.set('view engine', 'ejs');

//load assests
app.use('/css', express.static(path.resolve(__dirname,"assets/css")));
app.use('/img', express.static(path.resolve(__dirname,"assets/img")));
app.use('/js', express.static(path.resolve(__dirname,"assets/js")));



// app.get('/', function (req, res) {
//     res.render('index');
//  });

//  app.get('/add-user', function (req, res) {
//     res.render('add_user');
//  });
//  app.get('/update-user', function (req, res) {
//     res.render('update_user');
//  });

//load routs
app.use('/',require('./server/routes/router'));

app.listen(Port,()=>{
    
    
    console.log("app listening at http://localhost:"+Port);

 });
