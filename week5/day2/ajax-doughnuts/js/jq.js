$(document).ready(function (){
	$('new-doughnut').on('submit', addDoughnut);
	$('body').on('click', '.delete', function(e) {
		console.log($(this).data('id'));
		
		var element = $(this);

		$.ajax({
			url: endpoint + '/' + element.data('id'),
			method: 'delete',
		})
		.done(function(response) {
			console.log('success');
			console.log(response);
			element.parent().remove();
		})
		.fail(function(err) {
			console.log('error');
			console.log(err);
		})
	})
	getDoughnuts();
});

console.log('api working yo');

var endpoint = 'http://api.doughnuts.ga/doughnuts'

function addDoughnut(e) {    
	e.preventDefault();  

	var doughnut = {
	style: $('#doughnut-style').val(),         
	flavor: $('#doughnut-flavour').val()
	};

	$.post(endpoint, doughnut)
	.done(function(response){
		append.Doughnut(response);
		$('#doughnut-flavour').empty();
	})
}


function getDoughnuts() {
	$.ajax({
		//type in stuff
		url: endpoint
	})

	.done(function(response) {
		$.each(response, function(index, doughnut) {
			appendDoughnut(doughnut)
		})
	});
}

function appendDoughnut(doughnut) {     $('ul#doughnuts').prepend('<li>' + doughnut.flavor + '- <em>' + doughnut.style +'<a href="#" class="delete" #data-id=' + doughnut.id + '>  delete</a></em></li>') }
