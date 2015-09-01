// Put everything inside of the MTA namespace
// More info here: http://addyosmani.com/blog/essential-js-namespacing/#beginners
// Also read 'What is namespacing?' at the beginning of the article
var MTA = MTA || {}

// Wait for the DOM to load. We don't care about stylesheets, images etc.
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // Run the setup function inside of our MTA namespace
  MTA.setup();
})

// We can define this after we call it on line 10 because all of these properties we are adding to
// the MTA object get added before the event 'DOMContentLoaded' finishes.
MTA.setup = function() {
  // Adding a reference to all of our elements on to the MTA object
  // 'this' is a reference to our MTA object
  this.startTrain = document.getElementById('start-train');
  this.firstStop = document.getElementById('first-stop');
  this.stopTrain = document.getElementById('stop-train');
  this.lastStop = document.getElementById('last-stop');
  this.calculateButton = document.getElementById('calculate');
  this.resultArea = document.getElementById('result');
  this.errorArea = document.getElementById('error');
  this.addEventListeners(); // calling the addEventListeners function.
}

// declaring the addEventListeners function
MTA.addEventListeners = function() {
  // When the user selects a new option, run the callback function
  this.startTrain.addEventListener('change', function(e){
    // clear out the firstStop dropdown on each new selection 
    // otherwise elements just keep getting added
    MTA.firstStop.innerHTML = '';

    // create an option element for each of the stations on the line the user selected
    MTA.linesAndStops[this.value].forEach(function(stop, index) {
      var el = document.createElement('option');
      el.setAttribute('value', stop);
      el.innerHTML = stop;
      // once the element as been created we need to add it to the dropdown
      MTA.firstStop.appendChild(el);
    })

    // create a default element to give the user some feedback on what to do
    var defaultEl = document.createElement('option');
    defaultEl.setAttribute('value', 'default');
    defaultEl.innerHTML = '-- Choose your first stop --';
    // insert the element at the beginning so the user sees it first
    MTA.firstStop.insertBefore(defaultEl, MTA.firstStop.children[0])

    // save the user's choice for later
    MTA.userInput.startTrain = MTA.startTrain.value;
  });

  // this just checks the station and saves the user input
  this.firstStop.addEventListener('change', function(e) {
    MTA.userInput.firstStop = MTA.firstStop.value;
  });

  // same same as startTrain
  this.stopTrain.addEventListener('change', function(e){
    MTA.lastStop.innerHTML = ''

    MTA.linesAndStops[this.value].forEach(function(stop, index) {
      var el = document.createElement('option');
      el.setAttribute('value', stop);
      el.innerHTML = stop;
      MTA.lastStop.appendChild(el);
    })

    var defaultEl = document.createElement('option');
    defaultEl.setAttribute('value', 'default');
    defaultEl.innerHTML = '-- Choose your end stop --';
    MTA.lastStop.insertBefore(defaultEl, MTA.lastStop.children[0]);

    MTA.userInput.stopTrain = MTA.stopTrain.value;
  });

  // this just checks the station and saves the user input
  this.lastStop.addEventListener('change', function(e) {
    MTA.userInput.lastStop = MTA.lastStop.value;
  });

  this.calculateButton.addEventListener('click', function(e) {
    // prevent the default action of the form
    e.preventDefault();

    // clear out any errors that exists
    MTA.errorArea.innerHTML = ''
    
    // check the length of the userInput object to see if we have all the options
    // we need to calculate the journey
    if (Object.keys(MTA.userInput).length === 4) {
      // save the return value of calculateStops() to the tripLength variable
      var tripLength = MTA.calculateStops();
      // journey message
      MTA.resultArea.innerHTML = tripLength + ' stops'
    } else {
      // error message
      MTA.errorArea.innerHTML = 'Please select all fields'
    }
    
  });
}

MTA.calculateStops = function() {
  // condition ? true : false
  // if same line then run sameLine function otherwise they must be different lines
  return MTA.userInput.startTrain === MTA.userInput.stopTrain ? MTA.sameLine() : MTA.differentLines();
}

MTA.sameLine = function() {
  return Math.abs(MTA.linesAndStops[MTA.userInput.startTrain].indexOf(MTA.userInput.firstStop) - MTA.linesAndStops[MTA.userInput.stopTrain].indexOf(MTA.userInput.lastStop));
}

MTA.differentLines = function() {
  // check where the intersection is by using the filter method
  var intersection = MTA.linesAndStops[MTA.userInput.startTrain].filter(function(stop) {
    // this is the condition to test against.
    // whether any of the startTrain stops are in the stopTrain array
    return MTA.linesAndStops[MTA.userInput.stopTrain].indexOf(stop) != -1;
  })[0]; // filter returns an array so let's grab the first (and only) element

  // calculate how many stops between the user's choice and the intersection
  var startTrainIndex = MTA.linesAndStops[MTA.userInput.startTrain].indexOf(MTA.userInput.firstStop);
  var startTrainIntersectionIndex = MTA.linesAndStops[MTA.userInput.startTrain].indexOf(intersection);
  var firstTripLength = Math.abs(startTrainIndex - startTrainIntersectionIndex);

  // calculate how many stops between the user's choice and the intersection
  var stopTrainIndex = MTA.linesAndStops[MTA.userInput.stopTrain].indexOf(MTA.userInput.lastStop);
  var stopTrainIntersectionIndex = MTA.linesAndStops[MTA.userInput.stopTrain].indexOf(intersection);
  var lastTripLength = Math.abs(stopTrainIndex - stopTrainIntersectionIndex);

  // add the two
  return firstTripLength + lastTripLength;

}

// using an object to store our lines and stops
MTA.linesAndStops = {
  'n': ['ts', '34th', '28th-n', '23rd-n', 'us', '8th-n'],
  'l': ['8th-l', '6th', 'us', '3rd', '1st'],
  's': ['gc', '33rd', '28th-s', '23rd-s', 'us', 'ap']
};

MTA.userInput = {};