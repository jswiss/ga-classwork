var express 		= require('express'); //requires express
var app     		= express(); //sets variable app to equal calling express
var port    		= process.env.PORT || 3000;
var bodyParser  = require('body-parser'); //more middleware

var router  		= express.Router(); // gives us access to Router object
var videoRouter = express.Router();


var movies = [
		{"id": 1, "title": 'jaws'},
		{"id": 2, "title": 'Le Grand LEbowski'}
		];

//using templating engines with node
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Middleware logging functionality
app.use(function(req, res, next) { //next causes the browser to hang
	console.log('You made a ' + req.method + 'request to ' + req.url + ' from ' + req.ip);
	console.log('%s request to %s from %s', req.method, req.url, req.ip);
	next() //let's middleware continue through our system
})

router.get('/', function(req, res){
	res.send("Welcome");
})

router.get('/about', function(req, res) {
	res.send("this is the about page");
})

router.get('/contact', function(req, res) {
	res.send('contact');
})

//INDEX
videoRouter.get('/', function(req, res) {
	// res.render('index', { header: 'index!' })
	res.json(movies);
})


//SHOW
videoRouter.get('/:id', function(req, res) {
	console.log(req.params);
	res.render('show', { header: 'show!' })
})

//NEW
videoRouter.get('/new', function(req, res) {

})

//CREATE
videoRouter.post('/', function(req, res) {
	console.log(req.body);
	videos.push(req.body);
})

//EDIT
videoRouter.get('/:id/edit', function(req, res) {

})

//UPDATE
videoRouter.put('/:id', function(req, res) {

})

//DELETE
videoRouter.delete('/:id', function(req, res) {

})


app.use('/useful-info', router);
app.use('/videos', videoRouter);

 //middleware-sits between request and express server
//whenever someone goes to slash, use the routes we defined using our router

app.listen(port, function(){
	console.log("Server started on ", + port);
});
