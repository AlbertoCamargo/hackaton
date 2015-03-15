/*
// TODO: Changes by url
src = 'images/images.png';
image = document.getElementById('image');
image.src = src;
canvas = document.getElementById('canvas')
canvas.width = 300;
canvas.height = 300;
context = canvas.getContext("2d");
// animations
var state_animation;
var animations = new animation(image, 32.9, 43);
var globalID;
repeat();
function repeat() {
  id = setTimeout(function() {
    requestAnimationFrame(repeat);
    context.clearRect(0, 0, canvas.width, canvas.height);
    animations.paint(context);
  }, 200);
}
*/