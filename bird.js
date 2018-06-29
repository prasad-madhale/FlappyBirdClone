
var birdImg;

function preload()
{
  birdImg = loadImage("https://raw.githubusercontent.com/prasadchelsea33/FlappyBirdClone/master/assets/bird.png");
}

function Bird()
{
  this.x = width/2;
  this.y = height/2;
  this.yvelocity = 0;
  this.gravity = 0.3;


  this.show = function()
  {
    fill(0);

    image(birdImg,this.x,this.y,80,80);
    //ellipse(this.x,this.y,80,80);
  }

  this.update = function()
  {
    this.yvelocity += this.gravity;
    this.yvelocity *= 0.99;
    this.y += this.yvelocity;

    if(this.y > height || this.y < -80)
    {
      this.reset();
    }

    if(this.yvelocity >= 10)
      this.yvelocity = 10;
    if(this.yvelocity <= -10)
      this.yvelocity = -10;

  }

  this.reset = function()
  {
    this.x = width/2;
    this.y = height/2;
    this.yvelocity = 0;
    obs = [];
  }

  this.lift = function()
  {
    this.yvelocity += -10;
  }
}
