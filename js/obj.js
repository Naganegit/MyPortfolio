"use strict";

// グロナビ
const glo_nav = ["index", "about", "works", "contact"];

// 作品一覧
// [url, img, alt, discription]
const works = [
	["sample1" ,"img/dummy.jpg" , "テスト1", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["sample2" ,"img/dummy.jpg" , "テスト2", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["sample3" ,"img/dummy.jpg" , "テスト3", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["sample4" ,"img/dummy.jpg" , "テスト4", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["sample5" ,"img/dummy.jpg" , "テスト5", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["sample6" ,"img/dummy.jpg" , "テスト6", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["sample7" ,"img/dummy.jpg" , "テスト7", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["sample8" ,"img/dummy.jpg" , "テスト8", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["sample9" ,"img/dummy.jpg" , "テスト9", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."],
	["sample10" ,"img/dummy.jpg" , "テスト10", "Sample text. Sample text. Sample text. Sample text. Sample text. Sample text."]
];


// libs
const getRandomInt = function(i){
	return Math.floor(Math.random() * Math. floor(i));
};