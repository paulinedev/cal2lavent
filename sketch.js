
var xpos = 0 //creer une variable dans laquelle on définira la position de x
var ypos = 0 //creer une variable dans laquelle on définira la position de y
/*
var i,
    fenetreArray = new Array (12);
*/
function setup() {
  createCanvas(1530, 768); //canvas sait où est la souris et ce qu'elle fait
  frameRate(100)
}
//ANIMATION FENETRE
function fenetre(xG, xD, yH, yB){
  this.x_cote_gauche = xG;
  this.x_cote_droite = xD;
  this.y_cote_haut = yH;
  this.y_cote_bas = yB;
/*
//Animation 1
  this.animationAnim1 = function(){
    var nokta = 0;//taille du centre du cercle
  //var array_x = [];
  //var array_y = []
  //for (var i = 0; i < 1000; i++) {
      //array_x.push((10 + i) * Math.cos(i))
      //array_y.push((10 + i) * Math.sin(i))
  //};
  //array_x.forEach(function(ss,as){
  	//console.log(ss,as);
  //})
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
    this.renkver = function(x, y) {
      return ~~(Math.random() * y) + x;
    }
  }
  */
//Animation 2
  this.animationAnim2 = function() {
      var speed=(abs(pmouseX-mouseX)+abs(pmouseY-mouseY))/2
      strokeWeight(speed/2)
        // cercle à la position de la souris
      stroke(235,190,55,25)
      line(mouseX, mouseY, windowWidth/2, windowHeight/2 );
      // symetrie axiale verticale
      stroke(39,0,43,25)
      line(mouseX, windowHeight-mouseY, windowWidth/2, windowHeight/2);
      // symetrie axiale horizontale
      stroke(224,71,64, 25)
      line(windowWidth-mouseX, mouseY, windowWidth/2, windowHeight/2);
      // symetrie centrale
      stroke(224,71,64,25)
      line(windowWidth-mouseX, windowHeight-mouseY, windowWidth/2, windowHeight/2);
  }
//Animation 3
  this.animationAnim3 = function() {
    var draw_lines = function(x,y,size,rot){
      strokeWeight(0.15)
      // rond rouge du milieu
      push()
      rectMode(CENTER)
      translate(x,y)
      rotate(rot*0.5)
      stroke(224,71,64,200)
      line(1,size,0,-size)
      line(-size,0,size,0)
      // cercle jaune 1
      push()
      stroke(224,150,42, 255)
      rotate(rot)
      translate(size*3,size*3) // tourne autour du centre
      rotate(rot*7  ) // tourne sur lui même
       // dessiner le repère
      line(0,size,0,-size)
      line(-size,0,size,0)
      push() // on pousse un nouveau repère r4 qui bénéficie des transformation conjointe de r1 et r3
      translate(size*2,size*2) // notre rectangle va tourner autour du centre de r3 à une distance calculable par pythagore : d = pow(35*35+35*35,0.5)
      rotate(rot*2 ) // et il va tourner sur lui même
       // dessiner le repère
      line(0,size,0,-size)
      line(-size,0,size,0)
    }
      var size = (abs(pmouseX-mouseX) + abs(pmouseY - mouseY)) + 25
      stroke(0)
      fill(0,180)
      draw_lines(mouseX, mouseY, size , frameCount/50)
  }

//Animation 4
  this.animationAnim4 = function() {
    var angle;
    var pos;
    var side;
    this.setup = function() {
      side = 80;
      createCanvas(windowWidth, windowHeight);
      angle = 0;
      pos = p5.Vector.fromAngle(0);
      setRadius();
    }
    this.setRadius = function() {
      var m = min(windowWidth, windowHeight);
      var radius = m/2-side*0.6;
      pos.setMag(radius);
    }
    this.drawRect = function(pos) {
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rect(-side/2, -side/2, side, side);
      pop();
      fill(224,71,64,200)
    }
      translate(windowWidth/2, windowHeight/2);
      drawRect(p5.Vector.mult(pos.rotate(TWO_PI/5), sin(angle)));
      drawRect(p5.Vector.mult(pos.rotate(TWO_PI/5), sin(angle)));
      drawRect(p5.Vector.mult(pos.rotate(TWO_PI/5), sin(angle)));
      drawRect(p5.Vector.mult(pos.rotate(TWO_PI/5), sin(angle)));
      drawRect(p5.Vector.mult(pos.rotate(TWO_PI/5), sin(angle)));
      angle += 0.029;
      pos.rotate(sin(angle)/50);
  }
/*
//Animation 5
  this.animationAnim5 = function() {
    	if (frameCount % 25 == 0) {
    		fill(random(200, 255), random(10, 200), random(50, 150));
        noStroke();
    		push();
    		translate(200, 200);
    		rotate(radians(frameCount));
    		rect(0, 0, 300, 10);
    		pop();
    	}
  }
*/
//Animation 6
  this.animationAnim5 = function() {
  	  background(240);
    	translate(width/2, height/2);
    	for (var i = 0; i < 8; i++) {
    		push();
        fill(230,10,10);
    		rotate(TWO_PI * i / 8);
    		var tx = 200 * noise(0.01*frameCount);
    		translate(tx, 0);
    		rect(0, 0, 20, 20);
    		for (var j = 0; j < 6; j++) {
    			push();
    			rotate(TWO_PI * j / 6);
    			var rx = 60 * noise(0.01*frameCount + 10);
    			rect(rx, 8, 8, 8);
    			pop();
    		}
    		translate()
    		pop();
  	  }
  }

}
function draw() {
  background(00,100); //0-->la couleur (rvv) ? 8 --> Alpha (opaciter)

/*
  for (var i = 0; i < 12; i++) {
    fenetreArray[i] = new fenetre(150, 250);
  }*/
/*
  if (mouseClicked) {
    if (mouseX > 150 && mouseX < 300 && mouseY > 250 && mouseY < 350 ) {
      var Un = new fenetre;
    }
    else if (mouseX > 150 && mouseX < 300 && mouseY > 250 && mouseY < 350 ) {

    }
  }
*/
  fill(115,66,34  );
  //CHALET
  triangle(100, 200, 1350, 200, 675, 20);
  rect(100,200,1250,550);
  fill(64,27,3);
  rect(625,600,100,150);
  /*FENETREs*/


  //LIGNE 1
  rect(150,250,150,100);
    var fen1 = new fenetre(150, 300, 250, 350);
      if (mouseX > fen1.x_cote_gauche && mouseX < fen1.x_cote_droite && mouseY > fen1.y_cote_haut && mouseY < fen1.y_cote_bas) {
        fen1.animationAnim1();
      }
  rect(350,250,150,100);
    var fen2 = new fenetre(350, 500, 250, 350);
      if (mouseX > fen2.x_cote_gauche && mouseX < fen2.x_cote_droite && mouseY > fen2.y_cote_haut && mouseY < fen2.y_cote_bas) {
        fen2.animationAnim2();
      }
  rect(550,250,150,100);
    var fen3 = new fenetre(550, 700, 250, 350);
      if (mouseX > fen3.x_cote_gauche && mouseX < fen3.x_cote_droite && mouseY > fen3.y_cote_haut && mouseY < fen3.y_cote_bas) {
        fen3.animationAnim3();
      }
  rect(750,250,150,100);
    var fen4 = new fenetre(750, 900, 250, 350);
      if (mouseX > fen4.x_cote_gauche && mouseX < fen4.x_cote_droite && mouseY > fen4.y_cote_haut && mouseY < fen4.y_cote_bas) {
        fen3.animationAnim4();
      }
  rect(950,250,150,100);
    var fen5 = new fenetre(950, 1200, 250, 350);
      if (mouseX > fen5.x_cote_gauche && mouseX < fen5.x_cote_droite && mouseY > fen5.y_cote_haut && mouseY < fen5.y_cote_bas) {
        fen3.animationAnim5();
      }
  rect(1150,250,150,100);
    var fen6 = new fenetre(1150, 1400, 250, 350);
      if (mouseX > fen6.x_cote_gauche && mouseX < fen6.x_cote_droite && mouseY > fen6.y_cote_haut && mouseY < fen6.y_cote_bas) {
        fen6.animationAnim3();
      }
  //LIGNE 2
  var fen7 = rect(150,450,150,100);
  var fen8 = rect(350,450,150,100);
  var fen9 = rect(550,450,150,100);
  var fen10 = rect(750,450,150,100);
  var fen11 = rect(950,450,150,100);
  var fen12 = rect(1150,450,150,100);

/* point QUI SUIT LA SOURIS */
    fill(255,227,37);
  	xpos = xpos + (mouseX - xpos)*0.03 //demander à aller à 0.0% de la position horizontal de la souris
  	ypos = ypos + (mouseY - ypos)*0.03 //demander à aller à 0.0% de la position vertical de la sou
  	ellipse(mouseX,mouseY,20,20);
}
