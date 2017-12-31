
var xpos = 0 //creer une variable dans laquelle on définira la position de x
var ypos = 0 //creer une variable dans laquelle on définira la position de y
/*
var i,
    fenetreArray = new Array (12);
*/
function setup() {
  createCanvas(1530, 768); //canvas sait où est la souris et ce qu'elle fait
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
  fill(115,66,34);
  //CHALET
  triangle(100, 200, 1350, 200, 675, 20);
  rect(100,200,1250,550);
  fill(64,27,3);
  rect(625,600,100,150);
  /*FENETREs*/

  noStroke();
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
        fen6.animationAnim6();
      }
  //LIGNE 2
  rect(150,450,150,100);
    var fen7 = new fenetre(150, 300, 450, 550);
      if (mouseX > fen7.x_cote_gauche && mouseX < fen7.x_cote_droite && mouseY > fen7.y_cote_haut && mouseY < fen7.y_cote_bas) {
        fen7.animationAnim7();
      }
  rect(350,450,150,100);
    var fen8 = new fenetre(350, 500, 450, 550);
      if (mouseX > fen8.x_cote_gauche && mouseX < fen8.x_cote_droite && mouseY > fen8.y_cote_haut && mouseY < fen8.y_cote_bas) {
        fen8.animationAnim8();
      }
  rect(550,450,150,100);
    var fen9 = new fenetre(550, 700, 450, 550);
      if (mouseX > fen9.x_cote_gauche && mouseX < fen9.x_cote_droite && mouseY > fen9.y_cote_haut && mouseY < fen9.y_cote_bas) {
        fen9.animationAnim9();
      }
  rect(750,450,150,100);
    var fen10 = new fenetre(750, 900, 450, 550);
      if (mouseX > fen10.x_cote_gauche && mouseX < fen10.x_cote_droite && mouseY > fen10.y_cote_haut && mouseY < fen10.y_cote_bas) {
        fen10.animationAnim10();
      }
  rect(950,450,150,100);
    var fen11 = new fenetre(950, 1100, 450, 550);
      if (mouseX > fen11.x_cote_gauche && mouseX < fen11.x_cote_droite && mouseY > fen11.y_cote_haut && mouseY < fen11.y_cote_bas) {
        fen11.animationAnim11();
      }
  rect(1150,450,150,100);
    var fen12 = new fenetre(1150, 1300, 450, 550);
      if (mouseX > fen12.x_cote_gauche && mouseX < fen12.x_cote_droite && mouseY > fen12.y_cote_haut && mouseY < fen12.y_cote_bas) {
        fen12.animationAnim12();
      }

/* point QUI SUIT LA SOURIS */
    fill(255,227,37);
  	xpos = xpos + (mouseX - xpos)*0.03 //demander à aller à 0.0% de la position horizontal de la souris
  	ypos = ypos + (mouseY - ypos)*0.03 //demander à aller à 0.0% de la position vertical de la sou
  	ellipse(mouseX,mouseY,20,20);
}


//ANIMATION FENETRE
function fenetre(xG, xD, yH, yB){
  this.x_cote_gauche = xG;
  this.x_cote_droite = xD;
  this.y_cote_haut = yH;
  this.y_cote_bas = yB;

//Animation 1
  this.animationAnim1 = function(){
    	background(240);
    	translate(width/2, height/2);
    	for (var i = 0; i < 8; i++) {
    		push();
        fill(30,100,10);
    		rotate(TWO_PI * i / 8);
    		var tx = 200 * noise(0.01*frameCount);
    		translate(tx, 0);
    		rect(0, 0, 20, 20);
    		for (var j = 0; j < 6; j++) {
    			push();
    			rotate(TWO_PI * j / 6);
    			var rx = 60 * noise(0.01*frameCount + 10);
    			rect(rx, 18, 18, 18);
    			pop();
    		}
    		translate()
    		pop();
      }
  }

//Animation 2
  this.animationAnim2 = function() {
    background(240);
    translate(width/2, height/2);
    for (var i = 0; i < 8; i++) {
      push();
      fill(230,100,10);
      rotate(TWO_PI * i / 8);
      var tx = 200 * noise(0.01*frameCount);
      translate(tx, 0);
      rect(0, 0, 20, 20);
      for (var j = 0; j < 6; j++) {
        push();
        rotate(TWO_PI * j / 6);
        var rx = 60 * noise(0.01*frameCount + 10);
        rect(rx, 18, 18, 8);
        pop();
      }
      translate()
      pop();
    }
  }
//Animation 3
  this.animationAnim3 = function() {
  	background(240);
  	translate(width/2, height/2);
  	for (var i = 0; i < 8; i++) {
  		push();
      fill(230,100,100);
  		rotate(TWO_PI * i / 8);
  		var tx = 200 * noise(0.01*frameCount);
  		translate(tx, 0);
  		rect(10, 10, 20, 20);
  		for (var j = 0; j < 6; j++) {
  			push();
  			rotate(TWO_PI * j / 6);
  			var rx = 60 * noise(0.01*frameCount + 10);
  			rect(rx, 25, 25, 8);
  			pop();
  		}
  		translate()
  		pop();
  	}
  }

//Animation 4
  this.animationAnim4 = function() {
  	background(240);
  	translate(width/2, height/2);
  	for (var i = 0; i < 8; i++) {
  		push();
      fill(20,10,100);
      stroke(255);
  		rotate(TWO_PI * i / 8);
  		var tx = 200 * noise(0.01*frameCount);
  		translate(tx, 0);
  		rect(10, 10, 20, 20);
  		for (var j = 0; j < 6; j++) {
  			push();
  			rotate(TWO_PI * j / 6);
  			var rx = 10 * noise(0.01*frameCount + 10);
  			rect(rx, 50, 50, 25);
  			pop();
  		}
  		translate()
  		pop();
  	}
  }

//Animation 5
  this.animationAnim5 = function() {
  	background(240);
  	translate(width/2, height/2);
  	for (var i = 0; i < 8; i++) {
  		push();
      fill(40,150,200);
      stroke(255);
  		rotate(TWO_PI * i / 8);
  		var tx = 200 * noise(0.01*frameCount);
  		translate(tx, 0);
  		rect(20, 30, 25, 25);
  		for (var j = 0; j < 6; j++) {
  			push();
  			rotate(TWO_PI * j / 6);
  			var rx = 10 * noise(0.01*frameCount + 10);
  			rect(rx, 5, 5, 10);
  			pop();
  		}
  		translate()
  		pop();
  	}
  }

//Animation 6
  this.animationAnim6 = function() {
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
//Animation 7
  this.animationAnim7 = function(){
    	background(240);
    	translate(width/2, height/2);
    	for (var i = 0; i < 8; i++) {
    		push();
        fill(20,10,10);
        stroke(205,20,10);
    		rotate(TWO_PI * i / 8);
    		var tx = 200 * noise(0.01*frameCount);
    		translate(tx, 0);
    		rect(0, 0, 25, 25);
    		for (var j = 0; j < 16; j++) {
    			push();
    			rotate(TWO_PI * j / 6);
    			var rx = 60 * noise(0.01*frameCount + 10);
    			rect(rx, 28, 28, 28);
    			pop();
    		}
    		translate()
    		pop();
    	}
  }/*
//Animation 8
  this animationAnim8 = function(){
    background(240);
    translate(width/2, height/2);
    for (var i = 0; i < 8; i++) {
      push();
      fill(230,10,10);
      stroke(255);
      rotate(TWO_PI * i / 8);
      var tx = 200 * noise(0.01*frameCount);
      translate(tx, 0);
      rect(0, 0, 20, 20);
      for (var j = 0; j < 26; j++) {
        push();
        rotate(TWO_PI * j / 6);
        var rx = 60 * noise(0.01*frameCount + 10);
        fill(15,60,45)
        rect(rx, 50, 50, 55);
        pop();
      }
      translate();
      pop();
    }
}*/
  }
//Animation 9
  this.animationAnim9 = function(){
  	background(240);
  	translate(width/2, height/2);
  	for (var i = 0; i < 8; i++) {
  		push();
      fill(23,100,10);
      stroke(255);
  		rotate(TWO_PI * i / 8);
  		var tx = 200 * noise(0.01*frameCount);
  		translate(tx, 0);
  		ellipse(0, 0, 20, 20);
  		for (var j = 0; j < 6; j++) {
  			push();
  			rotate(TWO_PI * j / 36);
  			var rx = 60 * noise(0.01*frameCount + 20);
        fill(105,6,55)
  			rect(rx, 9, 9, 55);
  			pop();
  		}
  		translate();
  		pop();
  	}
  }
//Animation 10
  this.animationAnim10 = function(){
    background(240);
    translate(width/2, height/2);
    for (var i = 0; i < 8; i++) {
      push();
      fill(203,100,10);
      stroke(255);
      rotate(TWO_PI * i / 8);
      var tx = 200 * noise(0.01*frameCount);
      translate(tx, 0);
      ellipse(0, 0, 20, 20);
      for (var j = 0; j < 6; j++) {
        push();
        rotate(TWO_PI * j / 15);
        var rx = 60 * noise(0.01*frameCount + 20);
        fill(15,60,55)
        rect(rx, 9, 9, 25);
        pop();
      }
      translate();
      pop();
    }
  }
//Animation 11
  this.animationsAnim11 = function(){
    background(240);
    translate(width/2, height/2);
    for (var i = 0; i < 8; i++) {
      push();
      fill(20,200,160);
      stroke(255);
      rotate(TWO_PI * i / 8);
      var tx = 200 * noise(0.01*frameCount);
      translate(tx, 10);
      ellipse(0, 0, 20, 20);
      for (var j = 0; j < 60; j++) {
        push();
        rotate(TWO_PI * j / 15);
        var rx = 60 * noise(0.01*frameCount + 200);
        fill(0,160,55)
        rect(rx, 90, 9, 25);
        pop();
      }
      translate();
      pop();
    }
  }
//Animation 12
  this.animationAnim12 = function(){
  	background(240);
  	translate(width/2, height/2);
  	for (var i = 0; i < 8; i++) {
  		push();
      fill(230,10,10);
      stroke(255);
  		rotate(TWO_PI * i / 8);
  		var tx = 200 * noise(0.01*frameCount);
  		translate(tx, 0);
  		ellipse(0, 0, 20, 20);
  		for (var j = 0; j < 6; j++) {
  			push();
  			rotate(TWO_PI * j / 6);
  			var rx = 60 * noise(0.01*frameCount + 10);
        fill(15,60,45)
  			rect(rx, 9, 9, 25);
  			pop();
  		}
  		translate();
  		pop();
  	}
}
