var iss,hasDocked,dock;
var issImg,dockImg,right,left,up,bg,c,d,x,l;

function preload(){
  issImg = loadImage("images/iss.png");
  dockImg = loadImage("images/dock.png");
  right = loadImage("images/right.png");
  left = loadImage("images/left.png");
  up = loadImage("images/up.png");
  bg = loadImage("images/spacebg.jpg");
  x = loadImage("images/x.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  

  iss = createSprite(width/2,height/2);
  iss.addImage(issImg);
  
  c=createSprite(iss.x-70,iss.y+30, 10, 10);
  c.visible = false;
  
  dock = createSprite(random(c.x-200,c.x+200),iss.y+200);
  dock.addImage(dockImg);
  dock.scale = 0.3;

  d=createSprite(dock.x,dock.y,10,10);
  d.visible = false;  
noStroke();
  l=createSprite(235,270,267,3);
  l.shapeColor = "white";
  //l.debug = "true;"
}

function draw() {
  background(bg);  
  drawSprites();
  d.x = dock.x;
  d.y = dock.y-90;

  image(x,100,100);
  fill(255);
  textSize(20);
    text("REQUIRED",200,85);

  if(keyDown("r")){
    dock.x = iss.x;
  }

  if(d.isTouching(c)){
    hasDocked = true;
    fill(255);
    textSize(40);
    textAlign(CENTER);
    text("DOCKING SUCCESSFUL",dock.x,dock.y+100);
    
    //console.log("sjvhb");
  }

  if(!hasDocked){
    if(keyIsDown(LEFT_ARROW)){
      dock.x -= 3;
      dock.addImage(left);
    }
    if(keyIsDown(UP_ARROW)){
      dock.y -= 3;
      dock.addImage(up);
    }
    if(keyIsDown(RIGHT_ARROW)){
      dock.x += 3;
      dock.addImage(right);
    }
    if(keyDown(DOWN_ARROW)){
      dock.y += 3;
      dock.addImage(up);
    }
  }

  

}