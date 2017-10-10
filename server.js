const express = require('express')
const {twig} = require('twig')
const app = express()

app.set('view engine', 'twig')

const homeController = require('./Controller/home.Controller')

app.get('/', homeController.index)

app.use('/assets', express.static(__dirname + '/static/assets',{
	maxAge: 86400000
}))
app.listen(8000, function(err) {
	console.log('server is running on port 8000')
}) 