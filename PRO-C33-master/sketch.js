var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var gameState = "start";
var count = 0;


var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  
  textSize(30)
  text("10 ",10,550);
  text("10 ",100,550);
  text("20 ",190,550);
  text("20 ",270,550);
  text("20 ",350,550);
  text("50 ",430,550);
  text("50 ",500,550);
  text("70 ",580,550);
  text("70 ",660,550);
  text("70 ",740,550);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle!==null) {

      particle.display();
      
      if(particle.body.position.y>760) {
        if(particle.body.position.x<=100) {
           score=score+10;
           particle=null;
           if(count>=5) {
             gameState = "end"
           }
        }
    else if(particle.body.position.x>100 && particle.body.position.x<=350 ) {
          score=score+20;
          particle=null;
          if(count>=5) {
            gameState = "end"
          }
       }
       else if(particle.body.position.x>400 && particle.body.position.x<=500 ) {
        score=score+50;
        particle=null;
        if(count>=5) {
          gameState = "end"
        }
     }
     else{
      score=score+70;
      particle=null;
      if(count>=5) {
        gameState = "end"
      }
   }
      }
   }
   
  

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}


function mousePressed()  {
    if(gameState!=="end") {
      count++;
  particle = new Particle (mouseX,10,10);
}
}