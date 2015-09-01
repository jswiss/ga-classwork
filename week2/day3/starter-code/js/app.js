$(document).ready(function(){
  $('ul').on('click', 'li', function(event){
    $(this).parent().append($(this).clone());
  });
});



//var $lis = $('li');
 //   $.each($lis, function(index, element){
   //   $(element).slideUp(1000 * index+1);
   // })

//    $(this).next().fadeOut(750);

//$(this).parent().append($(this).clone());


//$('.grid').prepend($(this).clone()); //pushes element to the end of the list
//$(this).remove(); //removes element

//     var $element = $(this);    //no matter how far we go into a nested function, element will always refer to the thing we clicked on!
//     $element.hide('slow', 'swing', function(){
      
//       setTimeout(function(){
//         $element.show('fast')
//       }, 1000); //end of setTimeout
//     } );
//   });
// });

// function sayClick(event) {
//   console.log($(this).attr('class'));
//   }
// })

