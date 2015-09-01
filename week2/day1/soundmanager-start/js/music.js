var myPlayer = myPlayer || {} //when script runs, create variable called myPlayer, if it already exists, then set myPlayer equal to that object. If not, set it equal to the empty object {}.

myPlayer.setup = function() {
  this.playButton = document.getElementById('playbutton');
  this.playButton.addEventListener('click', myPlayer.playClickHandler.bind(this));
  }

myPlayer.playClickHandler = function(event) {
  event.preventDefault();
  console.log(this);

  if(this.playButton.getAttribute('data-state') === 'playing') {
    this.pause();
  } else {
    this.play()
  }
}


myPlayer.play = function() {
    var sound = this.getSound()

    if(this.playButton.getAttribute('data-state') === 'stopped') {
      this.currentSound.play();
    } else if(this.playButton.getAttribute('data-state') ===  'paused') {
      this.currentSound.resume()
    } else {
      console.warn('myPlayer is in an unexpected state: ' + this.playButton.getAttribute('data-state'))
    } 

    this.playButton.setAttribute('data-state', 'playing')
}

myPlayer.getSound = function () {
  if(!this.currentSound) {
    this.currentSound = soundManager.createSound({
      id: 'drumloop',
      url: '/sounds/drumloop.mp3'
    });
  }
  return this.currentSound;
}

myPlayer.currentSound = null;
   

soundManager.setup({
  url: '/swf/', 
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  // preferFlash: false,
  onready: function() {
    myPlayer.setup().bind(myPlayer)
  }
})