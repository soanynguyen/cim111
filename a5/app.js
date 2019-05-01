$(document).ready(function(){

var ingredients = ["Computer", "Wifi", "Browser", "Email Account"];
var text = "";
var i;
for (i = 0; i < ingredients.length; i++) {
  text += ingredients[i] + "<br>";
}
document.getElementById("ingredients").innerHTML = text;


	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
        $("#"+tab_id).addClass('current');

        if("#tab-5"){
            $("#finished").show();
        }
        
	})

    $(".hide").click(function(){
        $("testimage").hide();
      });
    $(".show").click(function(){
        $("testimage").show();
      });
 
    $("#testimage").mouseover(function(){
        $(this).css("box-shadow", "5px 5px 5px #555");
    }).mouseleave(function(){
        $(this).css("box-shadow", "0px 0px 0px #555");
    })

    
})


function myFunction() {
  document.getElementById("finished").innerHTML = "Congratulations! You are finished.";
}

$(document).ready(function(){
  $("p").mouseenter(function(){
    $("p").css("background-color", "lightblue");
  });
  $("p").mouseleave(function(){
    $("p").css("background-color", "white");
  });
});