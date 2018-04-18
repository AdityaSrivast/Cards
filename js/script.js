$(document).ready(function(){
      
      var2="<p class='card'></p>";

        $("#btn1").click(function(){
          //$(".card-wrapper").append(var2);
          $(".card-wrapper").append(var2);
          
        
        });

      $("#btn2").click(function(){
      	$("p").last().slideUp(300,function(){
      		$("p").last().remove();

      	});
        
        //$("p").last().remove();
        
       // $("p").show(1000);

      });
    });