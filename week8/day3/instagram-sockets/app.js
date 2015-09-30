var express    = require('express');
var app        = express();
var server  = require('http').createServer(app);
var morgan     = require('morgan');
var port       = process.env.PORT || 3000;
var instagram  = require('instagram-node-lib');
var bodyParser = require('body-parser');
var io         = require('socket.io')(server);

//logging middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', './views');

instagram.set('client_id', process.env.INSTAGRAM_CLIENT_ID);
instagram.set('client_secret', process.env.INSTAGRAM_CLIENT_SECRET);

instagram.set('callback_url', 'https://52bee6d9.ngrok.io/callback');
instagram.set('maxSockets', 50);

var tags = ['tbt', 'me', 'summer', 'love'];

for (var i = 0; i < tags.length; i++) {
	instagram.subscriptions.subscribe({
	object:    'tag',
	object_id: tags[i]
	});
};

instagram.subscriptions.subscribe({
	object:    'tag',
	object_id: tags[i]
})

//routing
app.get('/callback', function(req, res){
  instagram.subscriptions.handshake(req, res); 
});

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/callback', function(req, res) {
	// console.log(req.body);
	var notification = req.body;

	io.sockets.emit('instagram', notification);
})


server.listen(port, function() {
	console.log('something something dark side on port %s', port);
});

