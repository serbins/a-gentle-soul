$(document).ready(function() {
/* portfolio */
	$(function() {
	var selectedClass = "";
	$(".btn").click(function(){
		selectedClass = $(this).attr("data-rel");
	    $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');

	    setTimeout(function() {
	      $("."+selectedClass).fadeIn().addClass('scale-anm');
	      $("#portfolio").fadeTo(300, 1);
	    }, 300);
		});
	});

	setTimeout(function(){
       $('#alert').modal('show');
   }, 2000);

});
