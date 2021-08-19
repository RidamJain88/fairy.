var starImg,bgImg;
var star, starBody;
var fairy , fairyImg ;
var edges ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fairyImg = loadImage("images/fairyImage1.png" && "images/fairyImage2.png") ;
}

function setup() {
	createCanvas(800, 750);

	fairy = createSprite(100,500,20,20) ;
     fairy.addImage(fairyImg)  ;
     fairy.scale = 0.2 ;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
   edges = createEdgeSprites() ;
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  star.collide(fairy) ;
  
  //write code to stop star in the hand of fairy

  keyPressed();
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode === RIGHT_ARROW) {
		fairy.velocityX = 2 ;
	}
	 
	if(keyUp(RIGHT_ARROW)){
		fairy.velocityX = 0 ;
	}
}
 