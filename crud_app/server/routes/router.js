const express= require('express');
const route =express.Router();//this method allows us to create different router in spererate file
const service = require('../services/render')
const controller = require('../controller/controller')

// route.get('/', function (req, res) {
//     res.render('index');
//  });

//  route.get('/add-user', function (req, res) {
//     res.render('add_user');
//  });
//  route.get('/update-user', function (req, res) {
//     res.render('update_user');
//  });

route.get('/',service.homeRoutes);

 route.get('/add-user', service.add_user);

 route.get('/update-user', service.update_user);


 //API
 route.post('/api/users',controller.create);
 route.get('/api/users',controller.find);
 route.put('/api/users/:id',controller.update);
 route.delete('/api/users/:id',controller.delete);




 module.exports = route;