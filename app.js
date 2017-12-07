
/*


var turn=0;
   	$(".letter").on("click", function(){
      
            if (turn % 2 === 0){
              $(this).text('X'); 
            } else {
              $(this).text('O');
          	}
          			turn++;
          
      }); 


*/


var turn=0;
   
    $(".letter").on("click", function(){
              if (turn % 2 === 0){
              $(this).text('X'); 
            } else {
              $(this).text('O');
            }
                turn++;
          
      }); 


