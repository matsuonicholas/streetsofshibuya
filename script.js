$(function(){
	$(window).on('load scroll',function (){
		$('.columnimg, .columntxt, .banner, .place, .foot, .columntitle, .columntitle:after').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
});
$(document).ready(function() {
	var progressPath = document.querySelector('.progress-wrap path');
	var pathLength = progressPath.getTotalLength();

	progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
	progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

	var updateProgress = function() {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength / height);
		progressPath.style.strokeDashoffset = progress;
	}

	updateProgress();
	$(window).scroll(updateProgress);

	var offset = 50;
	var duration = 550;

	jQuery(window).on('scroll', function() {
		if(jQuery(this).scrollTop() > offset) {
			jQuery('.progress-wrap').addClass('active-progress');
		} else {
			jQuery('.progress-wrap').removeClass('active-progress');
		}
	});

	jQuery('.progress-wrap').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
});
const links =document.querySelectorAll(".scroll_to");
links.forEach((item)=>{
	item.addEventListener("click", ()=>{
		const el = document.getElementById(item.getAttribute("data-link"));
		el.scrollIntoView({behavior:"smooth", block:"end"})
	})
});
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
	loader.style.display = "none";
});
var nav = document.getElementById("topNav");
var main = document.getElementById("mainnav");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "50px";

close.addEventListener("click", function(){
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }   
});

function navToggle() {	
	//to close
	if (nav.style.height <= "335px") {
	nav.style.height = "50px";
	nav.style.backgroundColor="transparent";

    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="0.0";
	menu[i].style.marginTop="100px";
	};
	
	} 
	//to open
	else if (nav.style.height <= "50px") {
	nav.style.height = "152px";
	nav.style.backgroundColor="#000";
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="1.0";
	menu[i].style.marginTop="0px";
	};
	}
};