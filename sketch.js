const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, score;
var stand1, polygon1, polygonImg, slingshot;
function preload(){
    polygonImg = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    var options = {
        density : 5,
        restitution: 1
    }
    score = 0;
    polygon1 = Bodies.circle(150, 300, 20, options);
    World.add(world, polygon1);
    slingshot = new SlingShot(polygon1, {x:200 , y:200})
    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(790, 260, 190, 20);
    box1 = new Box(790, 235, 30, 40);
    box2 = new Box(790, 195, 30, 40);
    box3 = new Box(790, 155, 30, 40);
    box4 = new Box(760, 235, 30, 40);
    box5 = new Box(760, 195, 30, 40);
    box6 = new Box(820, 235, 30, 40);
    box7 = new Box(820, 195, 30, 40);
    box8 = new Box(730, 235, 30, 40);
    box9 = new Box(850, 235, 30, 40);

}

function draw(){
    background(255);
    text("Score : " + score,750, 40);
    Engine.update(engine);
    imageMode(CENTER);
    image(polygonImg, polygon1.position.x, polygon1.position.y, 50, 50);
    stand1.display();
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1, {x:mouseX, y : mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32 ){
        slingshot.attach(this.polygon1);
    }
}
