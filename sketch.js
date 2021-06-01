const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
   ground1 = new Ground(600,590,1200,10);
   ground2 = new Ground(550,400,250,10);
   block17 = new Block(940,260,30,40);
   block18 = new Block(970,260,30,40);
   block19 = new Block(1000,260,30,40);
   block20 = new Block(1030,260,30,40);
   block21 = new Block(1060,260,30,40);
   block22 = new Block(970,220,30,40);
   block23 = new Block(1000,220,30,40);
   block24 = new Block(1030,220,30,40);
   block25 = new Block(1000,180,30,40);
   ground3 = new Ground(1000,300,200,10);
   block1 = new Block(465,380,30,40);
   block2 = new Block(495,380,30,40);
   block3 = new Block(525,380,30,40);
   block4 = new Block(555,380,30,40);
   block5 = new Block(585,380,30,40);
   block6 = new Block(615,380,30,40);
   block7 = new Block(645,380,30,40);
   block8 = new Block(495,320,30,40);
   block9 = new Block(525,260,30,40);
   block10 = new Block(555,220,30,40);
   block11 = new Block(585,180,30,40);
   block12 = new Block(615,140,30,40);
   block13 = new Block(525,100,30,40);
   block14 = new Block(555,60,30,40);
   block15 = new Block(585,20,30,40);
   block16 = new Block(555,20,30,40);

   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);

   rope = new Rope(this.polygon,{x:100,y:200})
   imageMode(CENTER);
   image(polygon.png,polygon.position.x,polygon.position.y,40,40)
}
    function draw(){
        background(0);
        Engine.update(engine);
        ground1.display();
        ground2.display();
        ground3.display();
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        block13.display();
        block14.display();
        block15.display();
        block16.display();
        block17.display();
        block18.display();
        block19.display();
        block20.display();
        block21.display();
        block22.display();
        block23.display();
        block24.display();
        block25.display();
        rope.display();
        stroke("black");
  textSize(30);
  fill("white");
  text("Drag the Hexagonal Stone and Release it,to launch it towards the block",150,100);
    }
    function mouseDragged(){
        Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
    }
    function mouseReleased(){
        rope.fly();
    }