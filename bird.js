
var birdImg;

function preload()
{
  birdImg = loadImage("./assets/bird.png");
}

function Bird()
{
  this.x = width/2;
  this.y = height/2;
  this.yvelocity = 0;
  this.gravity = 0.3;


  this.show = function()
  {
    fill(255);
    //ellipse(this.x,this.y,20,20);
    //birdImg = loadImage("./assets/bird.png");
    image(birdImg,this.x,this.y);
  }

  this.update = function()
  {
    this.yvelocity += this.gravity;
    this.yvelocity *= 0.9;
    this.y += this.yvelocity;

    if(this.y > height || this.y < 0)
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
  }

  this.lift = function()
  {
    this.yvelocity += -15;
  }
}
