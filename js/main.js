"use strict";

// グロナビ
const nav_bar = function(){
	console.log("a");
};

const header = "aaa" + nav_bar;

$( document ).ready( function(){
	$("#head").append(header);
});