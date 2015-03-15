//-------- --------------------  Classes --------------------------------- //

// state = 0,1,2 (normal, success, not success)
function sprite(image, width, height, state) {
  // current sprite in pixels
  this.current_sprite_x = 0;
  this.current_sprite_y = state * height + 1;
  this.image = image;
  this.width = width;
  this.height = height;
  this.paint = function(context) {
    context.drawImage(this.image, this.current_sprite_x, this.current_sprite_y, this.width, this.height, 0, 0, this.width, this.height);
    if(this.current_sprite_x >= this.image.width - width) {
      this.current_sprite_x = 0;
    } else {
      this.current_sprite_x += this.width;
    }
  }
}

function animation(image, width, height){
  this.states = [];
  this.states[0] = new sprite(image, width, height, 0);
  this.states[1] = new sprite(image, width, height, 1);
  this.states[2] = new sprite(image, width, height, 2);
  this.current_state = 0;
  this.paint = function(context) {
    this.states[this.current_state].paint(context);
  }
  this.change_states = function(state){
    this.current_state = state;
  }
}

// -------------------------------------------------------------------------- //