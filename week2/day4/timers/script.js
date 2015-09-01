
$(document).ready(function(){
  var dancingHillBilly = $('img');
  var currentLeft = null;
  
  function hillBillyWalk(){
    currentLeft = parseInt(dancingHillBilly.css('left'));
    // console.log(currentLeft)

    if (currentLeft >= $(window).width()) {
      console.log('fghj')
      dancingHillBilly.css('left', '0px');
    } else {
      var newLeft = currentLeft + 30;
      dancingHillBilly.css('left', newLeft + 'px');  
    }  
  };
  setInterval(hillBillyWalk, 100);
});

