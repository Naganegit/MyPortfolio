"use strict";


$( document ).ready( function(){
	var navlists = glo_nav.forEach(function( list ){
		$("#glo_nav").append("<li><a href=\"" + list + ".html\"> "+list.toUpperCase()+ "</a></li>");
	});
	navlists;
	if( window.innerWidth > 769){
		$("#glo_nav li").width((100 / glo_nav.length )+ "%");
	}else{
		$("#glo_nav").hide();
		$("#sitename").mouseenter(
			function(){
				$("#glo_nav").show("slow");
			}
		);
		$("#glo_nav").mouseleave(
			function(){
				$("#glo_nav").hide("fast");
			}
		);
	}
});


$(function(){
	const sitename = function(){
		let h1_color = "";
		switch(getRandomInt(3)){
			case 1 :
				h1_color = "#7b5050";
				break;
			case 2 :
				h1_color = "#2b6d14";
				break;
			default:
				h1_color = "#144f98";
		}
		document.getElementById("sitename").style.color = h1_color;

	};
	setInterval(sitename, 4000);
});
