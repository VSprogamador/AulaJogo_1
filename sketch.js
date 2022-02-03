var path,boy,Moedas;
var pathImg,boyImg,MoedasImg;
var MoedasCollection = 0;
var moeda;
var Moedas;

//Esttados de Jogo
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  endImg =loadAnimation("fimdeJogo.png");
  moeda = loadImage("Moedas.png");
}
function setup(){

   createCanvas(600,700);

path=createSprite(400,200);
path.addImage(pathImg);
path.velocityY = 2;
path.scale = 1.3;

boy = createSprite(250,320,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;

moeda.scale = 0.1;
Moedas=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);

     if(path.y > 600 ){
       path.y = 600/2;
     }

    }else{
      if(cachorro.isTouching(boy)) {
        gameState=END;
      

        if (Moedas.isTouching(boy)) {
          Moedas.destroyEach();
          MoedasCollection=MoedasCollection + 50;
        }

    }
  }
  createMoedas();
  drawSprites();
  textSize(20);
  fill(255);
  text("Moedas: "+ MoedasCollection,width-150,30);
  }

  function createMoedas() {
    if (World.frameCount % 60 == 0) {
    var Moeda = createSprite(Math.round(random(50,550),40, 10, 10));
    Moedas.addImage("moeda",moeda);
    Moedas.scale=0.12;
    Moedas.velocityY = 5;
    Moedas.lifetime = 200;
    Moedas.add(Moeda);
    }
  }



























