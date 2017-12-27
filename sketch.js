
var xpos = 0 //creer une variable dans laquelle on définira la position de x
var ypos = 0 //creer une variable dans laquelle on définira la position de y
function setup() {
  createCanvas(1530, 768); //canvas sait où est la souris et ce qu'elle fait
  frameRate(100)
}

function draw() {
  background(00,100); //0-->la couleur (rvv) ? 8 --> Alpha (opaciter)



  fill(115,66,34  );
  //CHALET
  triangle(100, 200, 1350, 200, 675, 20);
  rect(100,200,1250,550);
  fill(64,27,3);
  rect(625,600,100,150);
  /*FENETREs*/
  //LIGNE 1
  rect(150,250,150,100);
  rect(350,250,150,100);
  rect(550,250,150,100);
  rect(750,250,150,100);
  rect(950,250,150,100);
  rect(1150,250,150,100);
  //LIGNE 2
  rect(150,450,150,100);
  rect(350,450,150,100);
  rect(550,450,150,100);
  rect(750,450,150,100);
  rect(950,450,150,100);
  rect(1150,450,150,100);
/*
  if (mouseClicked) {
    if (mouseX > 150 && mouseX < 300 && mouseY > 250 && mouseY < 350 ) {
      let Un = new anim1;
    }
    else if (mouseX > 150 && mouseX < 300 && mouseY > 250 && mouseY < 350 ) {

    }
  }

/* point QUI SUIT LA SOURIS */
    fill(255,227,37);
  	xpos = xpos + (mouseX - xpos)*0.03 //demander à aller à 0.0% de la position horizontal de la souris
  	ypos = ypos + (mouseY - ypos)*0.03 //demander à aller à 0.0% de la position vertical de la sou
  	ellipse(mouseX,mouseY,20,20);
}

class anim1{
  var nokta = 0;//taille du centre du cercle
  amin1() {
    nokta += 0.3;
    noStroke();
    drawingContext.shadowOffsetX = 1; //ombres
    drawingContext.shadowOffsetY = -1;
    drawingContext.shadowBlur = 5;
    drawingContext.shadowColor = "black";
    fill(random(200, 255), random(10, 255), random(50, 255));

    imageMode(CENTER)
    translate(width / 2, height / 2);
    angle = nokta;
    rotate(nokta);
    x = (10 + angle) * Math.cos(angle);
    y = (10+ angle) * Math.sin(angle);
    ellipse(x, y, 15, 15);

    if (nokta > windowWidth / 2) {
      nokta = 0;
      background("white")
    }
  }
  function renkver(x, y) {
    return ~~(Math.random() * y) + x;
  }
}
