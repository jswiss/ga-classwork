console.log('wheee!');

var socket = io('https://52bee6d9.ngrok.io');
var photoIds = [];

socket.on('connect', function() {
	console.log('the system is on the line');
});

socket.on('instagram', function(object) {
	console.log(object);
	$.ajax({
		url: 'https://api.instagram.com/v1/tags/' + object[0].object_id + '/media/recent?client_id=585d2b5190d346828c0e5b2e6c093c3c',
		dataType: 'jsonp'
	})

	.done(function(response) {
		console.log(response);
		if(photoIds.indexOf(response.data[0].id) === -1) {
		$('#photo-container').prepend('<li><img src="' + response.data[0].images.standard_resolution.url + '"></li>');
		photoIds.push(response.data[0].id);
			}else {
				console.log('duplicate');
			}
	})
});


