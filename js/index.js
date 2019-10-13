"use strict";

$(function(){
	const sec01 = function(){
		let img_position = "";
		switch(getRandomInt(4)){
			case 1 :
				img_position = "top";
				break;
			case 2 :
				img_position = "right";
				break;
			case 3 :
				img_position = "bottom";
				break;
			default:
				img_position = "left";
		}
		document.getElementById("sec01").style.backgroundPosition = img_position;
	}
	sec01();
	setInterval(sec01, 6000);

	for(let i = works.length - 1 ; i >= works.length - 3 ; i--){
		$("#lst-works").append("<div class=\"card\"><a href=\"works/" + works[i][0] +".html\"><img src=\"" + works[i][1] + "\" alt=\"" + works[i][2] + "\"><span>" + works[i][3] + "</span></a></div>");
	}


});