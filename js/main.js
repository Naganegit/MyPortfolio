"use strict";

// グロナビ
const glo_nav = ["index", "about", "works", "contact"];

// 作品一覧
// [name, img, alt]
const works = [
	["test" ,"img/dummy.jpg" , "テスト"],
	["test" ,"img/dummy.jpg" , "テスト"],
	["test" ,"img/dummy.jpg" , "テスト"],
	["test" ,"img/dummy.jpg" , "テスト"],
	["test" ,"img/dummy.jpg" , "テスト"],
	["test" ,"img/dummy.jpg" , "テスト"],
	["test" ,"img/dummy.jpg" , "テスト"],
	["test" ,"img/dummy.jpg" , "テスト"],
	["test" ,"img/dummy.jpg" , "テスト"],
	["test" ,"img/dummy.jpg" , "テスト"]
];


$( document ).ready( function(){
	glo_nav.forEach(function( list ){
		$("#glo_nav").append("<li><a href=\"" + list + ".html\"> "+list.toUpperCase()+ "</a></li>");
	});
	$("#glo_nav li").width((100 / glo_nav.length )+ "%");
	for(let i = 0; i < 3 ; i++){
		$("#lst-works").append("<div class=\"card\"><a href=\"" + works[i][0] +".html\"><img src=\"" + works[i][1] + "\" alt=\"" + works[i][2] + "\"></a></div>");
	}
});
