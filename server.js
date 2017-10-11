const express = require('express')
const {twig} = require('twig')
const app = express()

app.set('view engine', 'twig')

const homeController = require('./Controller/home.Controller')
const menuController = require('./Controller/menu.Controller')
const restaurantsController = require('./Controller/restaurants.Controller')
const trickController = require('./Controller/trick.Controller')
const newsController = require('./Controller/news.Controller')

app.get('/', homeController.index)
app.get('/home', homeController.index)
app.get('/menu', menuController.index)
app.get('/restaurants', restaurantsController.index)
app.get('/trick', trickController.index)
app.get('/news', newsController.index)



app.use('/assets', express.static(__dirname + '/static/assets',{
	maxAge: 86400000
}))
app.listen(8000, function(err) {
	console.log('server is running on port 8000')
}) 