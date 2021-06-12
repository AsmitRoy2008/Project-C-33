const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var backgroundImg;

function preload() 
{
  getBgImg();
}
function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1500, 20);

  hero = new Hero(100,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1300,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(800, 100, 70, 70);
  box3 = new Box(800, 100, 70, 70);
  box4 = new Box(800, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(1000, 100, 70, 70);
  box8 = new Box(1000, 100, 70, 70);
  box9 = new Box(600, 100, 70, 70);
  box10 = new Box(1000, 100, 70, 70);
  box11 = new Box(1000, 100, 70, 70);
  box12 = new Box(1000, 100, 70, 70);
  box13 = new Box(1000, 100, 70, 70);
  box14 = new Box(600, 100, 70, 70);
  box15 = new Box(800, 100, 70, 70);

 

}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();



  hero.display();
  rope.display();
  monster.display();
  monster.kill();

}

function mouseDragged()
{
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

async function getBgImg()
{
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json()

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=06 && hour<=19)
  {
    bg = "gamingbackground2.png";
  }
  else if(hour>= 19 && hour<06)
  {
    bg = "gamingbackground1.jpg";
  }

  backgroundImg = loadImage(bg);


}