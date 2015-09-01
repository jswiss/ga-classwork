myApp = {};

myApp.count = 0;
myApp.colours = ['red', 'orange', 'green', 'blue', 'purple', 'pink', 'yellow']

myApp.disco = function(event){
  var listItems = $('li');
  for (var i=0; i<myApp.colours.length; i++) {
    var index = (myApp.count + i) % myApp.colours.length;
    //can't call jQuery onto a DOM element, needs to be called on an array
    var listItem = listItems[i];
    $(listItem).css('background-color', myApp.colours[index]);
  }
  myApp.count++;
};

myApp.initialize = function(){
  //When you click on this button (disco-button), this function will be called
  $('button#disco-button').on('click', myApp.disco);
};

//Wait for the html page to load before you set event listeners on the page;
$(document).ready(function(){
myApp.initialize();
});