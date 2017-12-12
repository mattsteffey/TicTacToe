$(document).ready(function() {

var turn=0;
   



      $(".box").on("click", function(){
        // console.log(this);
        if 
          ($(this).html() === '')
            if (turn % 2 === 0){
              $(this).html('X'); 
            } else {
              $(this).html('0');
            }

// @ top row
    if 
          ( ($(".1").html() == "X") && ($(".2").html() == "X") && ($(".3").html() == "X") ){
            alert("Game over! X wins!");
          }
// @ middle row
    else if 
          ( ($(".4").html() == "X") && ($(".5").html() == "X") && ($(".6").html() == "X") ){
            alert("Game over! X wins!");
          }
// @ bottom row        
    else if 
          ( ($(".7").html() == "X") && ($(".8").html() == "X") && ($(".9").html() == "X") ){
            alert("Game over! X wins!");
          }
// @ left column          
    else if 
          ( ($(".1").html() == "X") && ($(".4").html() == "X") && ($(".7").html() == "X") ){
            alert("Game over! X wins!");
          }
// @ middle column          
    else if 
          ( ($(".2").html() == "X") && ($(".5").html() == "X") && ($(".8").html() == "X") ){
            alert("Game over! X wins!");
          }
// @ right column          
    else if 
          ( ($(".3").html() == "X") && ($(".6").html() == "X") && ($(".9").html() == "X") ){
            alert("Game over! X wins!");
          }
// @ left to right diagonal          
    else if 
          ( ($(".1").html() == "X") && ($(".5").html() == "X") && ($(".9").html() == "X") ){
            alert("Game over! X wins!");
          }
// @ right to left diagonal          
    else if 
          ( ($(".3").html() == "X") && ($(".5").html() == "X") && ($(".7").html() == "X") ){
            alert("Game over! X wins!");
          }
// # top row
    else if 
          ( ($(".1").html() == "O") && ($(".2").html() == "O") && ($(".3").html() == "O") ){
            alert("Game over! O wins!");
          }
// # middle row
    else if 
          ( ($(".4").html() == "O") && ($(".5").html() == "O") && ($(".6").html() == "O") ){
            alert("Game over! O wins!");
          }
// # bottom row        
    else if 
          ( ($(".7").html() == "O") && ($(".8").html() == "O") && ($(".9").html() == "O") ){
            alert("Game over! O wins!");
          }
// # left column          
    else if 
          ( ($(".1").html() == "O") && ($(".4").html() == "O") && ($(".7").html() == "O") ){
            alert("Game over! O wins!");
          }
// # middle column          
    else if 
          ( ($(".2").html() == "O") && ($(".5").html() == "O") && ($(".8").html() == "O") ){
            alert("Game over! O wins!");
          }
// # right column          
    else if 
          ( ($(".3").html() == "O") && ($(".6").html() == "O") && ($(".9").html() == "O") ){
            alert("Game over! O wins!");
          }
// # left to right diagonal          
    else if 
          ( ($(".1").html() == "O") && ($(".5").html() == "O") && ($(".9").html() == "O") ){
            alert("Game over! O wins!");
          }
// # right to left diagonal          
    else if 
          ( ($(".3").html() == "O") && ($(".5").html() == "O") && ($(".7").html() == "O") ){
            alert("Game over! O wins!");
          }

        turn++;

 });

    $('Xbutton').click(function() {
    location.reload();
    });


});


          



