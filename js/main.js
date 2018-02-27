jQuery(document).ready(function($) {

	//menu action
    $('.hamburger').click(function(event) {
        $('.hamburger').toggleClass('is-active');
        $('.general_nav').toggleClass('is-active');
    });
	$('.general_nav').click(function(e) {

        $('.hamburger').toggleClass('is-active');
        $('.general_nav').toggleClass('is-active');
    })
	$(document).on('click','.general_nav .navigation .nav-item a.my-link[href^="#"]',function(e) {
        $('.hamburger').removeClass('is-active');
        $('.general_nav').removeClass('is-active');
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });



});