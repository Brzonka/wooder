$(document).ready(function(){

//Fixed navigation
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var height = $('.furniture').offset().top;
		if (scroll>=height){
			$('.navigation').addClass('navigation--fixed');
			$('.logo').addClass('logo--fixed');
		}
		else{
			$('.navigation').removeClass('navigation--fixed');
			$('.logo').removeClass('logo--fixed');
		}
	});
	$(window).resize(function(){
		scroll = $(window).scrollTop();
		height = $('.furniture').offset().top;
		if (scroll>=height){
			$('.navigation').addClass('navigation--fixed');
			$('.logo').addClass('logo--fixed');
		}
		else{
			$('.navigation').removeClass('navigation--fixed');
			$('.logo').removeClass('logo--fixed');
		}
	});

//Animation scroll and navigation scroll

	var offset=[];
	$.each($('.home, .furniture, .decor, .quality, .video, .about'), function(i, element){
		offset[i]=$(element).offset().top;
	});
	$(window).resize(function(){
		$.each($('.home, .furniture, .decor, .quality, .video, .about'), function(i, element){
		offset[i]=$(element).offset().top;
		});
	});

	$(".navigation__list__item__link").click(function(){
		var h1="";
		if($(this).attr('href')=="#1"){h1=offset[0];}
		else if($(this).attr('href')=="#2"){h1=offset[1];}
		else if($(this).attr('href')=="#3"){h1=offset[5];}
		$("html, body").stop().animate( { scrollTop: h1 }, 1000);
	});
	$(".home__button").click(function() {
		$("html, body").stop().animate( { scrollTop: offset[1] }, 1000);
	});

	$(window).scroll(function(){
		var scroll=$(window).scrollTop();
		var height_window=$(window).height();

		if((scroll>(offset[1]-height_window/2))&&(scroll<(offset[2]-height_window/4))){
			$('.furniture__header, .furniture__description, .furniture__link').css({"animation-play-state":"running"});}

		if((scroll>(offset[2]-height_window/2))&&(scroll<(offset[3]-height_window/4))){
			$('.decor__header, .decor__description, .decor__link').css({"animation-play-state":"running"});}

		if((scroll>(offset[3]-height_window/2))&&(scroll<(offset[4]-height_window/4))){
			$('.quality__header, .quality__description, .quality__list__item').css({"animation-play-state":"running"});}

		if((scroll>(offset[4]-height_window/2))&&(scroll<(offset[5]-height_window/4))){
			$('.video, .video__header, .video__description, .video__button').css({"animation-play-state":"running"});}

		if(scroll>(offset[5]-height_window/2)){
			$('.about__header, .about__description, .about__link').css({"animation-play-state":"running"});}
	})

//Menu open
	$('.navigation__menu__hamburger').click(function(){
			$('.navigation__list').slideToggle();
	});
	var w = $(window).width();
	$(window).resize(function(){
		w = $(window).width();
	})
	$(window).scroll(function(){
		if (w<900){
			$('.navigation__list:visible').slideUp();
		}
	});
	$(window).resize(function(){
		if (w<900){
			$('.navigation__list:visible').slideUp();
		}
		else if (w>=900){
		$('.navigation__list:hidden').slideDown();
		$('.navigation__list').css({"display":"inline-block"});
	}
	});
	

})