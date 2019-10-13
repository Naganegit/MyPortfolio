"use strict";

// グロナビ
const glo_nav = ["index", "about", "works", "contact"];

// 作品一覧
// [name, img, alt, discription]
const works = [
	["test1" ,"img/dummy.jpg" , "テスト1", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["test2" ,"img/dummy.jpg" , "テスト2", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["test3" ,"img/dummy.jpg" , "テスト3", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["test4" ,"img/dummy.jpg" , "テスト4", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["test5" ,"img/dummy.jpg" , "テスト5", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["test6" ,"img/dummy.jpg" , "テスト6", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["test7" ,"img/dummy.jpg" , "テスト7", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["test8" ,"img/dummy.jpg" , "テスト8", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["test9" ,"img/dummy.jpg" , "テスト9", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["test10" ,"img/dummy.jpg" , "テスト10", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."]
];


// libs
const getRandomInt = function(i){
	return Math.floor(Math.random() * Math. floor(i));
};