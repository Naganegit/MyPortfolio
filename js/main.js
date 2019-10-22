'use strict';


$( document ).ready( function(){
    var navlists = glo_nav.forEach(function( list ){
        $("#glo_nav").append("<li><a href=\"" + list + ".html\"> "+list.toUpperCase()+ "</a></li>");
    });
    if( window.innerWidth > 590){
        navlists;
        $("#glo_nav li").width((100 / glo_nav.length )+ "%");
    }else{
        $("#glo_nav").append("<li id=\"cls_btn\"><span>×</span></li>");
        $("#glo_nav li").hide();
        $("#glo_nav li").width("100%");
        $("#glo_nav").css({
            'position': 'fixed',
            'top': '0',
            'right': '0',
            'height': '10vw',
            'width': '10vw',
            'margin': '5px',
            'z-index': '1000000',
            'background-color': '#efecdf',
            'content': '≡',
            'border': '1px solid #123466'
        });
    }
});


$(function(){
    let sitename = function(){
        let color = ["#7b5050","#2b6d14","#144f98"];
        document.getElementById("sitename").style.color = color[getRandomInt(color.length)];

    };
    setInterval(sitename, 4000);
    if( window.innerWidth > 590){
    }else{
        $("#glo_nav").click(function(){
            $(this).css({
                'height': '100vw',
                'width': '100vw',
                'background-color': '#f1f1f1',
                'margin': '0',
                'border': 'none',
                'border-bottom': '#9f9f9f 1px solid'
            });
            $("#glo_nav").hover(function(){
                $(this).css({
                    'background-color': '#f1f1f1'
                });
            });
            $("#glo_nav li").show();
            $("#glo_nav li").css({
                'height':  100 / (glo_nav.length + 1 ) + 'vw',
                'line-height':  100 / (glo_nav.length + 1 ) + 'vw',
                'font-size':  '5vw',
            });
        });
            $("#cls_btn").click(function(){
                $("#glo_nav").hide();
                $("#glo_nav").css({
                    'height': '10vw',
                    'width': '10vw',
                    'margin-top': '0'
                });
            });
    }
});
