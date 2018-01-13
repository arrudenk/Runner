//REQUEST ANIMATION FRAME -> for all browsers
// window.requestAnimFrame = (function(callback) {
//     return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
//         window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
//         function(callback) {
//             window.setTimeout(callback, 1000/60);
//         };
// })();
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var __VASWIDTH = 640;
var __VASHEIGHT = 480;

canvas.width = __VASWIDTH;
canvas.height = __VASHEIGHT;



