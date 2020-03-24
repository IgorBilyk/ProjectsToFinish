$(document).ready(function(){

$('.book').click(function (){
  
  $('.form').css('display','block');
  $('.modal2_overlay').addClass('show');
  console.log('added class');

});

$('.modal2_overlay, .span-close').click(function (){
  console.log('removed');
  $('.modal2_overlay').removeClass('show');
  $('.form').css('display','none');

});

$(".first, .food-img-recipe-first, .close-first").click(function(){
    $(".first-text").toggle(3000, "linear");

    });
$(".second , .food-img-recipe-second, .close-second").click(function(){
    $(".second-text").toggle(3000, "linear");

    });
$(".third , .food-img-recipe-third, .close-third").click(function(){
    $(".third-text").toggle(3000, "linear");

    });
$(".history__button").click(function(){
	console.log('Clicked');
    $(".hiden__text").toggle(2000);

	});


});