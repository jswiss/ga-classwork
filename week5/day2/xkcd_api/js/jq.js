$(document).ready(function() {

//define variables
  var button = $('.button');
  var results = $('#results');
  var yearInput;
  
  button.on('click', getYear);

  function getYear() {
    results.empty();
    yearInput = this.value;
    console.log('year: ' + yearInput);

    $.get('http://xkcd-unofficial-api.herokuapp.com/xkcd?year=' + yearInput, function(response) {
      console.log(response);

      $.each(response, function(index, item) {
        results.append("<li><p>" + response[index].title + "</p><img src="+ response[index].img + "></li>")
      });
    })
  }


//add event listeners


  // $.get('http://xkcd-unofficial-api.herokuapp.com/xkcd?year=' + year, function(result) {

  //   var comics = results["img"];
  //   $.each(comics, function(index, item) {
  //     results.append("<img src='"+ comics[index]["img"] + "''>")
  //   });

  // })

});

