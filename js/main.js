$(function () {

    'use strict';

    var winH  = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();

        $('.slider,.carousel-item').height(winH-(upperH + navH));

        
         
});

$('.featured_work ul li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all'){
        $('.shuffle_images .col-lg-3').animate({
            opacity:'1'
        },1000);
    }else{
        $('.shuffle_images .col-lg-3').animate({
            opacity:'.08'
        },1000);
        $($(this).data('class')).animate({
            opacity:'1'
        },1000);
    }
 });

 
 // scroll to top
 
 $(function(){

    $(window).on("scroll", function(){

        if($(window).scrollTop() >= 700){
            $(".scroll").fadeIn(1000)

        }else{
            
            $(".scroll").fadeOut(1000)
        }
    });

    $(".scroll").on("click", function(){

        $("html , body").animate({
            scrollTop:0
        }, 1000)
    });
        
 });


//nice scroll

 $(function(){
    
    $('html').niceScroll({

        cursorcolor:"#ec1c23" ,

        cursorwidth:'7px' ,

        cursorborder:'1px solid #1abc9c' ,

        cursorborderradius:'0'
    })
});