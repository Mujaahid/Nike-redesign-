$(document).ready(function() {
    $('.lightCrimsonShoe').click(function() {
        $('.shoe-gallery').slideUp(300)
        $('.shoe-one-gallery').slideDown(300);
    })
    $('.metallicGoldShoe').click(function() {
        $('.shoe-gallery').slideUp(300)
        $('.shoe-two-gallery').slideDown(300);
    })
    $('.crimsonBlissShoe').click(function() {
        $('.shoe-gallery').slideUp(300)
        $('.shoe-three-gallery').slideDown(300);
    })
    $('.orangeChalkShoe').click(function() {
        $('.shoe-gallery').slideUp(300)
        $('.shoe-four-gallery').slideDown(300);
    })
})


$(".select-size-one").click(function(e){
    $(".dropdown-sizes-one").slideDown(600);
    e.stopPropagation();
});
$(".dropdown-sizes-one").click(function(e){
    e.stopPropagation();
});
$(document).click(function(){
    $(".dropdown-sizes-one").slideUp(600);
});


$(".select-size-two").click(function(e){
    $(".dropdown-sizes-two").slideDown(600);
    e.stopPropagation();
});
$(".dropdown-sizes-two").click(function(e){
    e.stopPropagation();
});
$(document).click(function(){
    $(".dropdown-sizes-two").slideUp(600);
});


$(".select-size-three").click(function(e){
    $(".dropdown-sizes-three").slideDown(600);
    e.stopPropagation();
});
$(".dropdown-sizes-three").click(function(e){
    e.stopPropagation();
});
$(document).click(function(){
    $(".dropdown-sizes-three").slideUp(600);
});


$(".select-size-four").click(function(e){
    $(".dropdown-sizes-four").slideDown(600);
    e.stopPropagation();
});
$(".dropdown-sizes-four").click(function(e){
    e.stopPropagation();
});
$(document).click(function(){
    $(".dropdown-sizes-four").slideUp(600);
});