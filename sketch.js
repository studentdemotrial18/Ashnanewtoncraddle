
var roof,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;
	
    
	//roof= Bodies.rectangle(350,50,600,20, {isStatic:true});
//	World.add(world,roof);
	//console.log(roof);
	roof=new Roof(350,150,200,20);
	bob1 = new Bob(270,550,20);
	bob2 = new Bob(310,550,20);
	bob3 = new Bob(350,550,20);
	bob4 = new Bob(390,550,20);
  bob5 = new Bob(430,550,20);
  
  /*World.add(world,bob1);
  World.add(world,bob2);
  World.add(world,bob3);
  World.add(world,bob4);
  World.add(world,bob5);*/

	rope1 = new Rope(bob1.body,roof.body,-80,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,40,0);
  rope5 = new Rope(bob5.body,roof.body,80,0);
  
  /*World.add(world,rope1);
  World.add(world,rope2);
  World.add(world,rope3);
  World.add(world,rope4);
  World.add(world,rope5);*/


  Engine.run(engine);
 
}


function draw() {
  
  background("gainsboro");
  Engine.update(engine);
  //rectMode(CENTER);
 // rect(roof.position.x,roof.position.y,600,20);
 
  roof.display();
 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 
  
  drawSprites();
  fill ('black');
  text ('X:'+mouseX+'Y:'+mouseY , mouseX, mouseY);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-150});
  }
}

