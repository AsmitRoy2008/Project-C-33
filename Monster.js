class Monster {
  constructor(x,y,r)
	{

	    var options = 
		{ 
        density: 5, 
        frictionAir: 0
    };
		this.x = x;
		this.y = y;
		this.r = r;
		this.image = loadImage("monster1.png");
		this.body = Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos = this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
			
	}
	kill()
{
	if (this.body.speed > 0.5)
	{
	this.image2 = loadImage("monster2.png");
	image(this.image2, 0, 0, this.r, this.r);
	}
}

}


