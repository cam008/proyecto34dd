
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var persona
var calle
var obstaculo1
var obstaculo2
var obstaculo3
var obstaculo4
var obstaculo5




function setup() {
  createCanvas(800,500);
  calle= loadImage("calle.png")
  obstaculo1= loadImage("obstaculo1.png")
  obstaculo2= loadImage("obstaculo2.png")
  obstaculo3= loadImage("obstaculo3.png")
  obstaculo4= loadImage("obstaculo4.png")
  obstaculo5= loadImage("obstaculo5.png")
  persona =  loadImage("persona.png")
  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
 
  

  background(calle);
  Engine.update(engine);
  
}

