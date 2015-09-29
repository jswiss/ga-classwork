
$(document).ready(function(){
  // get All my tasks as soon as the doc is ready
  getTasks();

  // Create a ToDo
  $('#new-todo').on('keypress', function(event){
    if (event.which === 13) {
      createItem();
    }  
  })

  // EVENT DELEGATION !
  $('#todo-list').on('change', '.toggle', changeTaskStatus);
  $('#todo-list').on('click', '.destroy', destroyItem);
}) 

function getTasks(){
  // ajax request to the DB to receive all the tasks
  request('GET', '/items', null ).done(function(response){
    console.log(response)
    // iterate through the array of tasks given by the response
    $.each(response, function(index, task){
      appendNewItem(task);
    })
  })
}

function appendNewItem(data){
  // add this task as an <li> to the existing <ul>
  // data = {details: 'the dog', done: true/false}
  $('<li class="'+ (data.done == 't' ? "completed" : "") + '">'+
    '<input class="toggle" type="checkbox" data-id="'+ data.id +'" '+ (data.done == 't' ? 'checked="checked"' : "") + '>'+
    '<label>'+ data.item +'</label>'+
    '<button class="destroy" data-id="'+ data.id +'"></button>'+
  '</li>').prependTo("#todo-list")
}

function createItem(){
  data = {item: $('#new-todo').val() };
  $.post('/items', data, function(response){
    console.log(response);
    appendNewItem(response);
    $('#new-todo').val('');
  })
}

function changeTaskStatus(){
  // save $(this) because it will change when we are inside the .done() of the Ajax request
  var $this = $(this);
  taskId = $(this).data('id');
  isDone = $(this).is(':checked');
  $.ajax({
    method: 'PUT', 
    url: '/items/' + taskId,
    data: {done: isDone},
    dataType: 'json'
  }).done(function(response){
    console.log(response);
    $this.parent().toggleClass('completed');
  })
}

function destroyItem(){
  // save $(this) because it will change when we are inside the .done() of the Ajax request
  $this = $(this);
  taskId = $this.data('id');
  request('DELETE', 'items/' + taskId, null).done(function(response){
    $this.parent().remove();
  })
}

function request(method, url, data){
  return $.ajax({
    method: method,
    url: url,
    dataType: 'json',
    data: data
  })
}