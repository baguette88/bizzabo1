console.log('script start...')
let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = "<b>Good Evening, User<b>";
    // add name as template literal
}else if (hourNow >= 12) {
    greeting = "<b>Good Afternoon</b>";
} else if (hourNow > 0 > 12) {
    greeting = '<b>Good Morning</b>';
} else { greeting = 'Welcome (calculator error occured)';
}

document.getElementById('lblGreetings').innerHTML =
'<b>' + greeting + '</b> and Welcome to Bizzabo';

console.log('pulled date successfully')

$(document).ready(function () {
    getEvents()
})


$(document).ready(function(){
    let cl = (value) => console.log(value);
    cl("Jquery Active")
let counter =  0
    let $div = $('<div>')
    $($div).addClass('title')
    $('body').append($div)
    $($div).text("This is the first div title")
   // $($div).style.color("blue")
//JQUERY HERE

$(".generate").click(function btn1(){ //TITLE SCREEN
    // $(".scene").hide()
    // $(".gameOverScene").fadeIn(700).show();
    // $(".gameScene2").hide()
    // $(".phase2").hide()
    // $(".phase5").hide()
    // cl("Title Screen")
    counter=counter+1
    const $div = $('<div>')
    $($div).addClass('.anchor')
    $('.anchor').prependTo('.anchor')
    $($div).text("Links")
       });

const $gameScene1 = document.getElementsByClassName("gameScene1")
const $gameScene2 = document.getElementsByClassName("gameScene2")
const $titleScene = document.getElementsByClassName("titleScene")
const $gameOverScene = document.getElementsByClassName("gameOverScene")
       
$($gameScene1).hide()   //HIDE ENTIRE DIV
$($gameScene2).hide() 
$($gameOverScene).hide()
$($titleScene).show     // SHOW TITLE SCENE FIRST
         
        //event.currentTarget TARGET SPECIFIC ELEMENT!!!
           // $( "p" ).click(function( event ) {
           //   alert( event.currentTarget === this ); // true
           // });
       
       //SCENE CHANGES
       $(".btn1").click(function btn1(){ //TITLE SCREEN
           $(".titleScene").fadeIn(700).show()
           $($gameScene1).hide()
           $($gameScene2).hide()
           $($gameOverScene).hide()
           console.log("btn1")
              });
       $(".btn2").click(function btn2(){ //Game Scene 1
           $(".titleScene").hide()
           $(".gameScene1").fadeIn(700).show()
           $(".gameScene2").hide()
           $(".gameOverScene").hide()
           console.log("btn2")
           });
       $(".btn3").click(function btn3(){ //Game Scene 2
           $(".titleScene").hide()
           $(".gameScene1").hide()
           $(".gameScene2").fadeIn(700).show()
           $(".gameOverScene").hide()
           console.log("btn3")
           });
       $(".btn4").click(function btn4(){ //Game Over Scene
           $(".titleScene").hide()
           $(".gameScene1").hide()
           $(".gameScene2").hide()
           $(".gameOverScene").fadeIn(700).show()
           console.log("btn4")
           });  

        })

function getEvents() {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.bizzabo.com/api/events",
        "method": "GET",
        "Content-type": "application/x-www-form-urlencoded",
        "headers": {
            "accept": "application/vnd.bizzabo.v2.0+json",
            "authorization": "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
            "Access-Control-Allow-Origin": "*",
        },
        "data": "{}"
    }


    $.ajax({
        "url": "https://api.bizzabo.com/api/events",
        "async": true,
        "method": "GET",
        "crossDomain": true,
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Content-type": "application/x-www-form-urlencoded",
        "headers": {
            "accept": "application/vnd.bizzabo.v2.0+json",
            "authorization": "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2",
            "Access-Control-Allow-Origin": "*",
        }
    }).done(function (data) {
        console.log(data);
    });
}
