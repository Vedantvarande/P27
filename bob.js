class Bob 
{
  constructor(x,y,r)
  {
      var p_option=
      {
          isStatic:false,
          restitution:1,
          friction:0,
          density:0.8
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r/2,p_option);
      World.add(world,this.body);
  }

  
  display()
  {
      var bobpos=this.body.position;
      push()
      translate(bobpos.x,bobpos.y)		
  rectMode(CENTER);
  fill(255,0,255);
      ellipse(0,0,this.r,this.r);
      pop()
  }
}
