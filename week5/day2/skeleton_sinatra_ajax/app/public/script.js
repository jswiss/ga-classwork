$(document).ready(function(){
  console.log('hello');

  //display all tasks on the page!
  getTasks();

  $('#new-todo').on('keypress', function(e) {
  	if (event.which === 13) {
  		createItem()
  	}
  })

  $('#todo-list').on('change', '.toggle', changeTaskStatus);

}); 

function getTasks() {
	//ajax request to the DB to receive all the tasks
	//request, location, data-not always needed
	request('GET', '/items', null).done(function(response) {
		//iterate through the array of tasks given by the response
		$.each(response, function(index, task) {
			appendNewItem(task);
		})
  	})
}

function appendNewItem(data) {
	//add this task as an <li> to the existing <ul>
	//data = {details: 'the dog', done: true/false}
  $('<li class="'+ (data.done == 't' ? "completed" : "") + '">'+
  '<input class="toggle" type="checkbox" data-id="'+ data.id +'" '+ (data.done == 't' ? 'checked="checked"' : "") + '>'+
  '<label>'+ data.item +'</label>'+
  '<button class="destroy" data-id="'+ data.id +'"></button>'+'</li>').prependTo("#todo-list")
}

function createItem() {
	data = { item: $('#new-todo').val() }
	$.post('/items', data, function(response) {
		appendNewItem(response);
		$('#new-todo').val('');
	})
}

function changeTaskStatus() {
	var $this = $(this);
	taskId = $(this).data('id');
	isDone = $(this).is(':checked');
	$.ajax({
		method: 'PUT',
		url: '/items/' + taskId,
		data: {done: isDone},
		dataType: 'json'
	}).done(function(response) {
		console.log(response);  //a good reflex to have. Always do a .done and console.log when possible
		$this.parent().toggleClass('completed');
	})
}

//pass method, url, data to ajax. Easy!
function request(method, url, data) {
	return $.ajax({
		method: method,
		url: url,
		dataType: 'json',
		data: data
	})
}