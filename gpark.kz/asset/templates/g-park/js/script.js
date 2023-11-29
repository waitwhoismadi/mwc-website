jQuery('a#touch-menu').click(function () {jQuery('.shapka ul.nav.menu').slideToggle();});
jQuery('li.item-108').click(function () {jQuery('.shapka li.item-108 ul.small').toggleClass('osyrak');});
new WOW().init();
jQuery(function(jQuery){
jQuery("#back-top").hide();
jQuery(function () {
jQuery(window).scroll(function () {
if (jQuery(this).scrollTop() > 50) {
jQuery('#back-top').fadeIn();
} else {
jQuery('#back-top').fadeOut();
}
});
jQuery('#back-top a').click(function () {
jQuery('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
});
jQuery('a.scrollto[href*="#"]').click(function(){  });
var $page = $('html, body');
jQuery('a.scrollto[href*="#"]').click(function() {
$page.animate({
scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top
}, 800);
return false;
});
});
jQuery('#vidcar').owlCarousel({
loop:true,
margin: 20,
nav:true,
pagination: false,	
autoplay:true,
smartSpeed:1000,
autoplayTimeout:3500,
autoplayHoverPause:false,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
});
jQuery('#esheodnacar').owlCarousel({
loop:true,
margin: 20,
nav:true,
pagination: false,	
autoplay:true,
smartSpeed:2000,
autoplayTimeout:8000,
autoplayHoverPause:false,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
});
jQuery('#vidcar2').owlCarousel({
loop:true,
margin: 20,
nav:true,
smartSpeed:1000,
pagination: false,	
autoplay:true,
autoplayTimeout:3500,
autoplayHoverPause:false,
responsive:{
0:{
items:1
},
600:{
items:2
},
1000:{
items:3
}
}
}); 
jQuery('#galerrys').owlCarousel({
loop:true,
margin: 20,
nav:true,
pagination: false,	
autoplay:true,
autoplayTimeout:3500,
smartSpeed:1000,
autoplayHoverPause:false,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:2
}
}
}); 
jQuery('#akcii').owlCarousel({
loop:true,
nav:true,
pagination: false,	
autoplay:true,
smartSpeed:1000,
autoplayTimeout:5000,
autoplayHoverPause:false,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
});
jQuery('.owl-prev').html('<img src="/images/left.svg">');   
jQuery('.owl-next').html('<img src="/images/right.svg">');
jQuery('#vidcar .owl-prev').html('<img src="/images/leftbel2.svg">');   
jQuery('#vidcar .owl-next').html('<img src="/images/rightbel2.svg">');
jQuery('#akcii .owl-prev').html('<img src="/images/leftbel2.svg">');   
jQuery('#akcii .owl-next').html('<img src="/images/rightbel2.svg">');
jQuery('.kvvnutr p.readmore a').html('Узнать подробнее →'); 
jQuery('.blog.trans a.readmore-link').html('Подробнее →'); 

$(document).ready(function () {
if ($(window).width() > 768) {      
$(function () {
$("#phone1").mask("+7 (999) 999-9999");
});  
$(function () {
$("#phone17696").mask("+7 (999) 999-9999");
}); 
$(function () {
$("#phone17").mask("+7 (999) 999-9999");
}); 
$(function () {
$("#phone176").mask("+7 (999) 999-9999");
});
}
});            
jQuery(document).ready(function () {
jQuery("#vakansii #form1").submit(function () {
var formNm2 = jQuery('#vakansii #form1');
jQuery.ajax({
type: "POST"
, url: "/templates/g-park/vakansii.php"
, data: formNm2.serialize()
, success: function (data) {
jQuery(formNm2).html(data);
}
, error: function (jqXHR, text, error) {
jQuery(formNm2).html(error);
}
});
return false;
});
});             
jQuery(document).ready(function () {
jQuery("#take #form1").submit(function () {
var formNm2 = jQuery('#take #form1');
jQuery.ajax({
type: "POST"
, url: "/templates/g-park/post.php"
, data: formNm2.serialize()
, success: function (data) {
jQuery(formNm2).html(data);
}
, error: function (jqXHR, text, error) {
jQuery(formNm2).html(error);
}
});
return false;
});
});          
jQuery(document).ready(function () {
jQuery(".block3 #form1").submit(function () {
var formNm2 = jQuery('.block3 #form1');
jQuery.ajax({
type: "POST"
, url: "/templates/g-park/post.php"
, data: formNm2.serialize()
, success: function (data) {
jQuery(formNm2).html(data);
}
, error: function (jqXHR, text, error) {
jQuery(formNm2).html(error);
}
});
return false;
});
});      
jQuery(document).ready(function () {
jQuery("#form2").submit(function () {
var formNm2 = jQuery('form2');
jQuery.ajax({
type: "POST"
, url: "/templates/g-park/podbor.php"
, data: formNm2.serialize()
, success: function (data) {
jQuery(formNm2).html(data);
}
, error: function (jqXHR, text, error) {
jQuery(formNm2).html(error);
}
});
return false;
});
});
//


jQuery('#bronx').click(function () {jQuery('#tablee1').addClass('blochnijj');});
jQuery('#bronx').click(function () {jQuery('#tablee2').removeClass('blochnijj');});
jQuery('#bronx').click(function () {jQuery('#tablee3').removeClass('blochnijj');});
jQuery('#bronx').click(function () {jQuery('#tablee4').removeClass('blochnijj');});
jQuery('#npbronx').click(function () {jQuery('#tablee2').addClass('blochnijj');});
jQuery('#npbronx').click(function () {jQuery('#tablee1').removeClass('blochnijj');});
jQuery('#npbronx').click(function () {jQuery('#tablee3').removeClass('blochnijj');});
jQuery('#npbronx').click(function () {jQuery('#tablee4').removeClass('blochnijj');});
jQuery('#queens').click(function () {jQuery('#tablee3').addClass('blochnijj');});
jQuery('#queens').click(function () {jQuery('#tablee2').removeClass('blochnijj');});
jQuery('#queens').click(function () {jQuery('#tablee1').removeClass('blochnijj');});
jQuery('#queens').click(function () {jQuery('#tablee4').removeClass('blochnijj');});
jQuery('#manhat').click(function () {jQuery('#tablee4').addClass('blochnijj');});
jQuery('#manhat').click(function () {jQuery('#tablee2').removeClass('blochnijj');});
jQuery('#manhat').click(function () {jQuery('#tablee3').removeClass('blochnijj');});
jQuery('#manhat').click(function () {jQuery('#tablee1').removeClass('blochnijj');});



jQuery("#zhilkompleks .item a").on("click", function(){
    var id = jQuery(this).attr("id");
    jQuery("#zhilkompleks .item a").removeClass("acttt");
    jQuery(this).addClass("acttt");
    jQuery(".foteler").removeClass("actii");
    jQuery(".foteler."+id).addClass("actii");
  })
  
  
/*
jQuery('#nazvzhk1').click(function () {jQuery('#nazvzhk1').addClass('acttt');});
jQuery('#nazvzhk1').click(function () {jQuery('#nazvzhk2').removeClass('acttt');});
jQuery('#nazvzhk1').click(function () {jQuery('#nazvzhk3').removeClass('acttt');});
jQuery('#nazvzhk1').click(function () {jQuery('#nazvzhk4').removeClass('acttt');});
jQuery('#nazvzhk1').click(function () {jQuery('#nazvzhk5').removeClass('acttt');});
jQuery('#nazvzhk1').click(function () {jQuery('#nazvzhk6').removeClass('acttt');});
jQuery('#nazvzhk1').click(function () {jQuery('#nazvzhk7').removeClass('acttt');});
jQuery('#nazvzhk1').click(function () {jQuery('#nazvzhk8').removeClass('acttt');});
jQuery('#nazvzhk2').click(function () {jQuery('#nazvzhk2').addClass('acttt');});
jQuery('#nazvzhk2').click(function () {jQuery('#nazvzhk1').removeClass('acttt');});
jQuery('#nazvzhk2').click(function () {jQuery('#nazvzhk3').removeClass('acttt');});
jQuery('#nazvzhk2').click(function () {jQuery('#nazvzhk4').removeClass('acttt');});
jQuery('#nazvzhk2').click(function () {jQuery('#nazvzhk5').removeClass('acttt');});
jQuery('#nazvzhk2').click(function () {jQuery('#nazvzhk6').removeClass('acttt');});
jQuery('#nazvzhk2').click(function () {jQuery('#nazvzhk7').removeClass('acttt');});
jQuery('#nazvzhk2').click(function () {jQuery('#nazvzhk8').removeClass('acttt');});
jQuery('#nazvzhk3').click(function () {jQuery('#nazvzhk3').addClass('acttt');});
jQuery('#nazvzhk3').click(function () {jQuery('#nazvzhk2').removeClass('acttt');});
jQuery('#nazvzhk3').click(function () {jQuery('#nazvzhk1').removeClass('acttt');});
jQuery('#nazvzhk3').click(function () {jQuery('#nazvzhk4').removeClass('acttt');});
jQuery('#nazvzhk3').click(function () {jQuery('#nazvzhk5').removeClass('acttt');});
jQuery('#nazvzhk3').click(function () {jQuery('#nazvzhk6').removeClass('acttt');});
jQuery('#nazvzhk3').click(function () {jQuery('#nazvzhk7').removeClass('acttt');});
jQuery('#nazvzhk3').click(function () {jQuery('#nazvzhk8').removeClass('acttt');});
jQuery('#nazvzhk4').click(function () {jQuery('#nazvzhk4').addClass('acttt');});
jQuery('#nazvzhk4').click(function () {jQuery('#nazvzhk2').removeClass('acttt');});
jQuery('#nazvzhk4').click(function () {jQuery('#nazvzhk3').removeClass('acttt');});
jQuery('#nazvzhk4').click(function () {jQuery('#nazvzhk1').removeClass('acttt');});
jQuery('#nazvzhk4').click(function () {jQuery('#nazvzhk5').removeClass('acttt');});
jQuery('#nazvzhk4').click(function () {jQuery('#nazvzhk6').removeClass('acttt');});
jQuery('#nazvzhk4').click(function () {jQuery('#nazvzhk7').removeClass('acttt');});
jQuery('#nazvzhk4').click(function () {jQuery('#nazvzhk8').removeClass('acttt');});
jQuery('#nazvzhk5').click(function () {jQuery('#nazvzhk5').addClass('acttt');});
jQuery('#nazvzhk5').click(function () {jQuery('#nazvzhk2').removeClass('acttt');});
jQuery('#nazvzhk5').click(function () {jQuery('#nazvzhk3').removeClass('acttt');});
jQuery('#nazvzhk5').click(function () {jQuery('#nazvzhk4').removeClass('acttt');});
jQuery('#nazvzhk5').click(function () {jQuery('#nazvzhk1').removeClass('acttt');});
jQuery('#nazvzhk5').click(function () {jQuery('#nazvzhk6').removeClass('acttt');});
jQuery('#nazvzhk5').click(function () {jQuery('#nazvzhk7').removeClass('acttt');});
jQuery('#nazvzhk5').click(function () {jQuery('#nazvzhk8').removeClass('acttt');});
jQuery('#nazvzhk6').click(function () {jQuery('#nazvzhk6').addClass('acttt');});
jQuery('#nazvzhk6').click(function () {jQuery('#nazvzhk2').removeClass('acttt');});
jQuery('#nazvzhk6').click(function () {jQuery('#nazvzhk3').removeClass('acttt');});
jQuery('#nazvzhk6').click(function () {jQuery('#nazvzhk4').removeClass('acttt');});
jQuery('#nazvzhk6').click(function () {jQuery('#nazvzhk5').removeClass('acttt');});
jQuery('#nazvzhk6').click(function () {jQuery('#nazvzhk1').removeClass('acttt');});
jQuery('#nazvzhk6').click(function () {jQuery('#nazvzhk7').removeClass('acttt');});
jQuery('#nazvzhk6').click(function () {jQuery('#nazvzhk8').removeClass('acttt');});
jQuery('#nazvzhk7').click(function () {jQuery('#nazvzhk7').addClass('acttt');});
jQuery('#nazvzhk7').click(function () {jQuery('#nazvzhk2').removeClass('acttt');});
jQuery('#nazvzhk7').click(function () {jQuery('#nazvzhk3').removeClass('acttt');});
jQuery('#nazvzhk7').click(function () {jQuery('#nazvzhk4').removeClass('acttt');});
jQuery('#nazvzhk7').click(function () {jQuery('#nazvzhk5').removeClass('acttt');});
jQuery('#nazvzhk7').click(function () {jQuery('#nazvzhk6').removeClass('acttt');});
jQuery('#nazvzhk7').click(function () {jQuery('#nazvzhk1').removeClass('acttt');});
jQuery('#nazvzhk7').click(function () {jQuery('#nazvzhk8').removeClass('acttt');});
jQuery('#nazvzhk8').click(function () {jQuery('#nazvzhk8').addClass('acttt');});
jQuery('#nazvzhk8').click(function () {jQuery('#nazvzhk2').removeClass('acttt');});
jQuery('#nazvzhk8').click(function () {jQuery('#nazvzhk3').removeClass('acttt');});
jQuery('#nazvzhk8').click(function () {jQuery('#nazvzhk4').removeClass('acttt');});
jQuery('#nazvzhk8').click(function () {jQuery('#nazvzhk5').removeClass('acttt');});
jQuery('#nazvzhk8').click(function () {jQuery('#nazvzhk6').removeClass('acttt');});
jQuery('#nazvzhk8').click(function () {jQuery('#nazvzhk7').removeClass('acttt');});
jQuery('#nazvzhk8').click(function () {jQuery('#nazvzhk1').removeClass('acttt');});

jQuery('#nazvzhk1').click(function () {jQuery('#fotzhk1').addClass('actii');});
jQuery('#nazvzhk1').click(function () {jQuery('#fotzhk2').removeClass('actii');});
jQuery('#nazvzhk1').click(function () {jQuery('#fotzhk3').removeClass('actii');});
jQuery('#nazvzhk1').click(function () {jQuery('#fotzhk4').removeClass('actii');});
jQuery('#nazvzhk1').click(function () {jQuery('#fotzhk5').removeClass('actii');});
jQuery('#nazvzhk1').click(function () {jQuery('#fotzhk6').removeClass('actii');});
jQuery('#nazvzhk1').click(function () {jQuery('#fotzhk7').removeClass('actii');});
jQuery('#nazvzhk1').click(function () {jQuery('#fotzhk8').removeClass('actii');});
jQuery('#nazvzhk2').click(function () {jQuery('#fotzhk2').addClass('actii');});
jQuery('#nazvzhk2').click(function () {jQuery('#fotzhk1').removeClass('actii');});
jQuery('#nazvzhk2').click(function () {jQuery('#fotzhk3').removeClass('actii');});
jQuery('#nazvzhk2').click(function () {jQuery('#fotzhk4').removeClass('actii');});
jQuery('#nazvzhk2').click(function () {jQuery('#fotzhk5').removeClass('actii');});
jQuery('#nazvzhk2').click(function () {jQuery('#fotzhk6').removeClass('actii');});
jQuery('#nazvzhk2').click(function () {jQuery('#fotzhk7').removeClass('actii');});
jQuery('#nazvzhk2').click(function () {jQuery('#fotzhk8').removeClass('actii');});
jQuery('#nazvzhk3').click(function () {jQuery('#fotzhk3').addClass('actii');});
jQuery('#nazvzhk3').click(function () {jQuery('#fotzhk2').removeClass('actii');});
jQuery('#nazvzhk3').click(function () {jQuery('#fotzhk1').removeClass('actii');});
jQuery('#nazvzhk3').click(function () {jQuery('#fotzhk4').removeClass('actii');});
jQuery('#nazvzhk3').click(function () {jQuery('#fotzhk5').removeClass('actii');});
jQuery('#nazvzhk3').click(function () {jQuery('#fotzhk6').removeClass('actii');});
jQuery('#nazvzhk3').click(function () {jQuery('#fotzhk7').removeClass('actii');});
jQuery('#nazvzhk3').click(function () {jQuery('#fotzhk8').removeClass('actii');});
jQuery('#nazvzhk4').click(function () {jQuery('#fotzhk4').addClass('actii');});
jQuery('#nazvzhk4').click(function () {jQuery('#fotzhk2').removeClass('actii');});
jQuery('#nazvzhk4').click(function () {jQuery('#fotzhk3').removeClass('actii');});
jQuery('#nazvzhk4').click(function () {jQuery('#fotzhk1').removeClass('actii');});
jQuery('#nazvzhk4').click(function () {jQuery('#fotzhk5').removeClass('actii');});
jQuery('#nazvzhk4').click(function () {jQuery('#fotzhk6').removeClass('actii');});
jQuery('#nazvzhk4').click(function () {jQuery('#fotzhk7').removeClass('actii');});
jQuery('#nazvzhk4').click(function () {jQuery('#fotzhk8').removeClass('actii');});
jQuery('#nazvzhk5').click(function () {jQuery('#fotzhk5').addClass('actii');});
jQuery('#nazvzhk5').click(function () {jQuery('#fotzhk2').removeClass('actii');});
jQuery('#nazvzhk5').click(function () {jQuery('#fotzhk3').removeClass('actii');});
jQuery('#nazvzhk5').click(function () {jQuery('#fotzhk4').removeClass('actii');});
jQuery('#nazvzhk5').click(function () {jQuery('#fotzhk1').removeClass('actii');});
jQuery('#nazvzhk5').click(function () {jQuery('#fotzhk6').removeClass('actii');});
jQuery('#nazvzhk5').click(function () {jQuery('#fotzhk7').removeClass('actii');});
jQuery('#nazvzhk5').click(function () {jQuery('#fotzhk8').removeClass('actii');});
jQuery('#nazvzhk6').click(function () {jQuery('#fotzhk6').addClass('actii');});
jQuery('#nazvzhk6').click(function () {jQuery('#fotzhk2').removeClass('actii');});
jQuery('#nazvzhk6').click(function () {jQuery('#fotzhk3').removeClass('actii');});
jQuery('#nazvzhk6').click(function () {jQuery('#fotzhk4').removeClass('actii');});
jQuery('#nazvzhk6').click(function () {jQuery('#fotzhk5').removeClass('actii');});
jQuery('#nazvzhk6').click(function () {jQuery('#fotzhk1').removeClass('actii');});
jQuery('#nazvzhk6').click(function () {jQuery('#fotzhk7').removeClass('actii');});
jQuery('#nazvzhk6').click(function () {jQuery('#fotzhk8').removeClass('actii');});
jQuery('#nazvzhk7').click(function () {jQuery('#fotzhk7').addClass('actii');});
jQuery('#nazvzhk7').click(function () {jQuery('#fotzhk2').removeClass('actii');});
jQuery('#nazvzhk7').click(function () {jQuery('#fotzhk3').removeClass('actii');});
jQuery('#nazvzhk7').click(function () {jQuery('#fotzhk4').removeClass('actii');});
jQuery('#nazvzhk7').click(function () {jQuery('#fotzhk5').removeClass('actii');});
jQuery('#nazvzhk7').click(function () {jQuery('#fotzhk6').removeClass('actii');});
jQuery('#nazvzhk7').click(function () {jQuery('#fotzhk1').removeClass('actii');});
jQuery('#nazvzhk7').click(function () {jQuery('#fotzhk8').removeClass('actii');});
jQuery('#nazvzhk8').click(function () {jQuery('#fotzhk8').addClass('actii');});
jQuery('#nazvzhk8').click(function () {jQuery('#fotzhk2').removeClass('actii');});
jQuery('#nazvzhk8').click(function () {jQuery('#fotzhk3').removeClass('actii');});
jQuery('#nazvzhk8').click(function () {jQuery('#fotzhk4').removeClass('actii');});
jQuery('#nazvzhk8').click(function () {jQuery('#fotzhk5').removeClass('actii');});
jQuery('#nazvzhk8').click(function () {jQuery('#fotzhk6').removeClass('actii');});
jQuery('#nazvzhk8').click(function () {jQuery('#fotzhk7').removeClass('actii');});
jQuery('#nazvzhk8').click(function () {jQuery('#fotzhk1').removeClass('actii');});

*/

jQuery('#zhilkompleks').owlCarousel({
loop:false,
margin:10,
nav:true,
pagination: false,	
autoplay: false,
autoplayTimeout:5000,
smartSpeed:1000,
autoplayHoverPause:false,
responsive:{
0:{
items:2
},
600:{
items:3
},
1100:{
items:5
}
}
});

jQuery('#zhilkompleks .owl-next').html('<img src="/images/rightzhk.svg">');
jQuery('#zhilkompleks .owl-prev').html('<img src="/images/rightzhk.svg">');
jQuery('span.divider').html('→');   
$('.sendform2').click(function(){
$('.product').val($(this).val());
});

document.querySelector("#nextTest").addEventListener("click", function(){      
document.querySelector("#prevTest").style.opacity = "1";
var test = document.querySelectorAll(".test");
var arr = Array.from(test);
var check;
var flag = true;
for(var i =0; i < test.length; i++) {
if(test[i].classList.contains("active")) {
check = i;
if(i + 1 < 4) flag=true;
else flag = false;
}
}
var num = 0;
if(flag) {
test.forEach(function(elem, index,arr){

if(elem.classList.contains("active")) {
num = index;
}
elem.classList.remove("active");

});
test[num+1].classList.add("active");	
}
else {
test.forEach(function(elem, index,arr){

if(elem.classList.contains("active")) {
num = index;
}
elem.classList.remove("active");

});
test[num+1].classList.add("active");
document.querySelector("#nextTest").style.display = "none";		
}

})

document.querySelector("#prevTest").addEventListener("click", function(){
document.querySelector("#nextTest").style.display = "inline-block";	
var test = document.querySelectorAll(".test");
var arr = Array.from(test);
var check;
var flag = true;
for(var i =0; i < test.length; i++) {
if(test[i].classList.contains("active")) {
check = i;
if(i - 1 > -1) flag=true;
else flag=false;
}
}
var num = 0;
if(flag) {
test.forEach(function(elem, index,arr){

if(elem.classList.contains("active")) {
num = index;
}
elem.classList.remove("active");

});
test[num-1].classList.add("active");	
}
else {
document.querySelector("#prevTest").style.opacity = "0";		
}

})
//
document.querySelector("#otzyv").addEventListener("click", function(event){
    var event = event.target;
    if(event.closest(".modal-content")) {
       
    }
    else {
      if($(this).hasClass("in")) { 
        $(this).find("button.close").trigger("click");
        $(this).find("button.close").trigger("click");
        $(this).find("button.close").trigger("click");
      }
    }
  });
  
  
//

//


