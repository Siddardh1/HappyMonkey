var m , mr , mg
var bi
var oi
var bg , og , og1
var score
var background0,background1,ground
var score,score1,score2
var number = 0
var count = 0
var PLAY=0
var END=1
var BOT=2
var BTO=3
var gamestage=PLAY

function preload()
{
    
mr =                     loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
    mg=loadAnimation("sprite_0.png")
    bi = loadImage("banana.png");
    oi = loadImage("obstacle.png");
    background0=loadImage("forest.jpg")
  
}



function setup() 
{
  
    createCanvas(400,400)

    background1=createSprite(400,220,800,40)
    background1.addImage(background0)
    background1.scale=1.7
    background1.velocityX=-4

    ground=createSprite(200,380,400,10)
    ground.visible=false

    m=createSprite(100,345,10,10)
    m.addAnimation("running",mr)
    m.addAnimation("collide",mg)
    m.scale=0.1

    bg= createGroup();
    og= createGroup(); 
    og1= createGroup();

    score=0
    score1=0
    score2=1000
  
}


function draw() 
{

    background("white")

    drawSprites()

    if (gamestage===PLAY)
    {
      m.changeAnimation("running",mr)

      background1.velocityX=-4

      if(keyDown("space")&&m.y>=340)
      {
        m.velocityY=-20
      }

      m.velocityY=m.velocityY+1

      score1=score1+Math.round(getFrameRate()/60)

      spawnbananas()
      spawnobstacles()

      textFont("calibri");
      textSize(18);
      stroke(rgb(number,0,number));
      count=count+5;
      if (count<=255) 
      {
        number=number+5;
      }
      else if (count<=510)
      {
        number=number-5;
      }
      else if (count>510)
      {
        count=0;
      }
      strokeWeight(1.5);
      text("bananas collected:"+score,225,50)

      textFont("calibri");
      textSize(18);
      stroke(rgb(number,number,0));
      count=count+5;
      if (count<=255) 
      {
        number=number+5;
      }
      else if (count<=510)
      {
        number=number-5;
      }
      else if (count>510)
      {
        count=0;
      }
      strokeWeight(1.5);
      text("score:"+score1,25,50)

      if(m.isTouching(bg))
      {
        bg.destroyEach()
        score=score+1
      }

      if(m.isTouching(og))
      {
        bg.destroyEach()
        og.destroyEach()
        gamestage=END
      } 

    }

    if(gamestage===END)
    {
      background1.velocityX=0

      m.changeAnimation("collide",mg)

      score=0
      score1=0

      textFont("calibri");
      textSize(38);
      stroke(rgb(0,number,number));
      count=count+5;
      if (count<=255) 
      {
        number=number+5;
      }
      else if (count<=510)
      {
        number=number-5;
      }
      else if (count>510) 
      {
        count=0;
      }
      strokeWeight(1.5);
      text("Game Over",110,200)
      text("Press r to restart",75,250)
      text("Press a to activate bot",35,300)

      if(keyDown("r"))
      {
        gamestage=PLAY
      }

      if(keyDown("a"))
      {
        gamestage=BOT
      }

    }

    if(gamestage===BOT)
    {
      m.changeAnimation("running",mr)

      background1.velocityX=-4

      if(m.isTouching(og)||m.isTouching(og1))
      {
        m.velocityY=-20
      }

      m.velocityY=m.velocityY+1

      score1=score1+Math.round(getFrameRate()/60)
      score2=score2-Math.round(getFrameRate()/60)

      spawnbananas()
      spawnobstacles()
      spawnobstacles1()

      textFont("calibri");
      textSize(18);
      stroke(rgb(number,0,number));
      count=count+5;
      if (count<=255) 
      {
        number=number+5;
      }
      else if (count<=510)
      {
        number=number-5;
      }
      else if (count>510)
      {
        count=0;
      }
      strokeWeight(1.5);
      text("bananas collected:"+score,225,50)

      textFont("calibri");
      textSize(18);
      stroke(rgb(number,number,0));
      count=count+5;
      if (count<=255) 
      {
        number=number+5;
      }
      else if (count<=510)
      {
        number=number-5;
      }
      else if (count>510)
      {
        count=0;
      }
      strokeWeight(1.5);
      text("score:"+score1,25,50)

      textFont("calibri");
      textSize(18);
      stroke(rgb(0,number,number));
      count=count+5;
      if (count<=255) 
      {
        number=number+5;
      }
      else if (count<=510)
      {
        number=number-5;
      }
      else if (count>510) 
      {
      count=0;
      }
      strokeWeight(1.5);
      text("bot time left:"+score2,110,100)

      if(m.isTouching(bg))
      {
        bg.destroyEach()
        og1.destroyEach()
        score=score+1
      } 

      if(score2===0)
      {
        gamestage=BTO
      }
    }

    if(gamestage===BTO)
    {
      background1.velocityX=0

      m.changeAnimation("collide",mg)
      m.y=345
      m.velocityY=0

      score2=1000

      bg.destroyEach()
      og.destroyEach()


      textFont("calibri");
      textSize(25);
      stroke(rgb(0,0,number));
      count=count+5;
      if (count<=255) 
      {
        number=number+5;
      }
      else if (count<=510)
      {
        number=number-5;
      }
      else if (count>510)
      {
        count=0;
      }
      strokeWeight(1);
      text("Do not worry your score and no of",10,50)
      text("bananas collected are still the same",10,75)
      text("but bot can be activated only for",10,100)
      text("this much time. Now you have to play",10,125)
      text("on your own and if the game is over.",10,150)
      text("You can again activate the bot.",10,175)

      textFont("calibri");
      textSize(38);
      stroke(rgb(number,0,number));
      count=count+5;
      if (count<=255) 
      {
        number=number+5;
      }
      else if (count<=510)
      {
        number=number-5;
      }
      else if (count>510)
      {
        count=0;
      }
      strokeWeight(1.5);
      text("Press c to continue",50,250)


      if(keyDown("c"))
      {
        gamestage=PLAY
      }
    }

    m.collide(ground);

    if(background1.x<0)
    {
      background1.x=background1.width/2 
    } 
}

function spawnbananas()
{
  if(frameCount%60===0){
    banana1=createSprite(400,Math.round(random(160,300)),10,10)
    banana1.addImage(bi)  
    banana1.scale=0.08
    banana1.velocityX=-4
    bg.add(banana1)
    banana1.lifetime=100
  }
}
  function spawnobstacles()
{
  if(frameCount%320===0){
    obstacle1=createSprite(400,360,10,10)
    obstacle1.addImage(oi)  
    obstacle1.scale=0.08
    obstacle1.velocityX=-4
    og.add(obstacle1)
    obstacle1.lifetime=100
  }
}

  function spawnobstacles1()
{
  if(frameCount%60===0){
    obstacle11=createSprite(400,360,10,10)
    obstacle11.addImage(oi)  
    obstacle11.scale=0.08
    obstacle11.velocityX=-4
    obstacle11.visible=false
    og1.add(obstacle11)
    obstacle11.lifetime=100
  }
}



