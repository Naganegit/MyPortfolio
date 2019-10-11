$(function(){
	const getRandomInt = function(i){
		return Math.floor(Math.random() * Math. floor(i));
	}
	let sec01 = function(){
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
	setInterval(sec01, 3000);

});