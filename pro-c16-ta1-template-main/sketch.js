var b1,b2;

function setup() 
{
  createCanvas(400, 400);

  b1=new Box();
  b2=new Box();


}

function draw() 
{
  background(220);
  b1.show();
  b1.set_speed(2);
  b2.show();
  b2.set_speed(4);
  



}

