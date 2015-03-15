
var canvas = document.getElementById("L");
var context = canvas.getContext("2d");
var image = document.getElementById("image");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");
var button = document.getElementById("start");
var xpoint = 0;
var sw = 1;
var posx, posy;
function start()
{
  context.clearRect(0, 0, window.innerWidth, window.innerHeight)
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.fillStyle = 'black';
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  context.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
  button.style.left = canvas.width / 2 - canvas.width * 0.11;
  button.style.top = canvas.height / 2 + canvas.height * 0.1;
}
function repaint() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight)
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.fillStyle = 'blue';
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  context.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
  button.style.color = "white";
  button.style.left = posx = canvas.width / 2 - canvas.width * 0.25;
  button.style.top = posy = canvas.height / 2 + canvas.height * 0.1;
  if (sw == 1) 
  { 
    xpoint -= posy * 0.03;
    if (xpoint <= -(posy * 0.2)) {
      sw = 0;
    }; 
  }
  else {
    xpoint += posy * 0.03;
    if (xpoint >= posy - canvas.height * 0.5) {
      sw = 1;
    }
  };
}
window.setInterval(function(){ repaint() }, 90);

window.addEventListener('load',start);

