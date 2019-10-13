"use strict";


$( document ).ready( function(){
	var navlists = glo_nav.forEach(function( list ){
		$("#glo_nav").append("<li><a href=\"" + list + ".html\"> "+list.toUpperCase()+ "</a></li>");
	});
	if( window.innerWidth > 590){
		navlists;
		$("#glo_nav li").width((100 / glo_nav.length )+ "%");
	}else{
		$("#glo_nav").hide();
		
		// $("#sitename").mouseenter(
		// 	function(){
		// 		$("#glo_nav").show("slow");
		// 	}
		// );
		// $("#glo_nav").mouseleave(
		// 	function(){
		// 		$("#glo_nav").hide("fast");
		// 	}
		// );
	}
});


$(function(){
	const sitename = function(){
		let color = ["#7b5050","#2b6d14","#144f98"];
		document.getElementById("sitename").style.color = color[getRandomInt(color.length)];

	};
	setInterval(sitename, 4000);
});
