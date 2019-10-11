"use strict";

// グロナビ
const glo_nav = ["index", "about", "works", "contact"];

// 作品一覧
// [name, img, alt]
const works = [
	["test1" ,"img/dummy.jpg" , "テスト1"],
	["test2" ,"img/dummy.jpg" , "テスト2"],
	["test3" ,"img/dummy.jpg" , "テスト3"],
	["test4" ,"img/dummy.jpg" , "テスト4"],
	["test5" ,"img/dummy.jpg" , "テスト5"],
	["test6" ,"img/dummy.jpg" , "テスト6"],
	["test7" ,"img/dummy.jpg" , "テスト7"],
	["test8" ,"img/dummy.jpg" , "テスト8"],
	["test9" ,"img/dummy.jpg" , "テスト9"],
	["test10" ,"img/dummy.jpg" , "テスト10"]
];


// libs
const getRandomInt = function(i){
	return Math.floor(Math.random() * Math. floor(i));
};