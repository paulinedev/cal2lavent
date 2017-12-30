
var xpos = 0 //creer une variable dans laquelle on définira la position de x
var ypos = 0 //creer une variable dans laquelle on définira la position de y
/*
var i,
    fenetreArray = new Array (12);
*/
function setup() {
  createCanvas(1530, 768); //canvas sait où est la souris et ce qu'elle fait
  frameRate(100);
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
  	  background(240);
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
  	  background(240);
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
  	  background(240);
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
    var angle = 0;
    var offset = 0.9
    var scalar = 90;
    var speed = 0.003;
    background(0);
    translate(width / 2, height / 2)
    stroke(255, 190, 190);
    fill(255, 90, 90)
    strokeWeight(2);
    var z = 0;
    rotate(radians(z));
    var x = 0.01;
    for (var i = 5; i < height; i += 9) {
      var y1 = offset + cos(angle) * scalar;
      rotate(radians(y1));
      rect(i, 0, 500, 980);
      x += 0.1
    }
    angle += speed;
    z++;
  }/*
//Animation 8
  this animationAnim8 = function(){
    var raindrops = [];
    var numOfDrops;
    for(var i = 0; i < numOfDrops; i++) {
      raindrops[i] = new Raindrop();
    }
    background(0);
    for(var i = 0; i < numOfDrops; i++) {
      raindrops[i].fall();
      raindrops[i].show();
    }
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
    function Raindrop(x,y) {
      this.x = random(windowWidth);
      this.y = random(-100, -600);
      this.z = random(1,3);
      this.speed = random(1, 3);
    	this.gravity = random(1,2);
      this.len = random(3, 10);
    	this.rgb = [(255), random(255), random(255)];
      this.fall = function() {
        this.y += this.speed;
        this.y += this.gravity;
      }
      this.reachedBottom = function() {
        if(this.y > windowHeight) {
    			return true;
        }
    		else {
    			return false;
    		}
      }
    	this.splash = function() {
    		strokeWeight(this.z);
    		line(this.x, this.y, this.x+10, this.y-10); //RIGHT
    		line(this.x, this.y, this.x+10, this.y-20);
    		line(this.x, this.y, this.x, this.y-10); //MIDDLE
    		line(this.x, this.y, this.x-10, this.y-20);
    		line(this.x, this.y, this.x-10, this.y-10); //LEFT
    	}
      this.show = function() {
        strokeWeight(this.z);
        stroke(this.rgb[0], this.rgb[1], this.rgb[2]);
        line(this.x, this.y, this.x, this.y + this.len);
      }
    }
  }*/
//Animation 9
  this.animationAnim9 = function(){
    var points = [];
    var amount = 70;
    var my_color = '#cd273d';
    var easing = 0.05;
    var ellipseSize = 150;
    	// frameRate(4);
    	for (var i = 0; i < amount; i++) {
    		points.push(new LightObject());
    	}
    	background('white');
    	for (var i = 0; i < points.length; i++) {
    		points[i].move();
    		points[i].display();
    	}
    this.LightObject = function() {
    	this.x = random(width);
    	this.y = random(height);
    	// this.diameter = random(1, 50);
    	this.speed = 100;
    	// this.opacity = 1;
    	this.coreFlare = random(0, 5);
    	this.shadowDiameter = constrain(random(30), this.coreFlare, ellipseSize);
    	this.move = function() {
    		this.x += random(-this.speed, this.speed) * easing;
    		this.y += random(-this.speed, this.speed) * easing;
    	};
    	this.display = function() {
    		prepareGradient(this.x, this.y, this.coreFlare, this.shadowDiameter);
    		ellipse(this.x, this.y, ellipseSize, ellipseSize);
    	};
    }
    this.prepareShadow = function() {
    	drawingContext.shadowOffsetX = random(5);
    	drawingContext.shadowOffsetY = random(5);
    	drawingContext.shadowBlur = random(50);
    	drawingContext.shadowColor = my_color;
    }
    this.prepareGradient = function(x, y, inner_size, outer_size) {
    	var radgrad = drawingContext.createRadialGradient(x, y, inner_size, x, y, outer_size);
    	radgrad.addColorStop(0, 'rgba(237, 35, 59, 1)');
    	radgrad.addColorStop(0.6, 'rgba(237, 35, 59, 0)');
    	drawingContext.fillStyle = radgrad;
    }
  }
//Animation 10
  this.animationAnim10 = function(){
    this.Particle = function(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, -3));
    this.acc = createVector(0, 0.01);
    this.lifespan = 255;
    this.update = function() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.lifespan -= 0.7;
    };
    this.show = function() {
      strokeWeight(2);
      stroke(255, 255, 0, this.lifespan);
      point(this.pos.x, this.pos.y);
    };
  }
  var particles = [];
    background(51);
    particles.push(new Particle(width / 2, height - 50));
    for (var i = particles.length - 1; i > 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].lifespan <= 0) {
        particles.splice(i, 1);
      }
    }
  }/*
//Animation 11
  this.animationsAnim11 = function(){
    var drops = [];
    var smallDropCount = 1050;
    var largeDropCount = 250;
    var dropCount = smallDropCount + largeDropCount;
    var snowMode = true;
    this.Drop = function(c, z) {
    	this.color = c;
    	this.z = z;
    	this.x = random(width);
    	this.y = random(-windowHeight, 0) * this.z;
    	this.size = map(this.z, 1, 3, 5, 10);
    	this.ySpeed = map(this.z, 1, 3, 1.5, 3.5);
    	this.xSpeed = random(0, map(this.z, 1, 3, 0.1, 0.2));
    	this.xOffset = 0;
    	this.maxXOffset = map(this.z, 1, 3, 1.5, 1);
    	this.draw = function(){
    		if(snowMode){
    			fill(this.color);
    			noStroke();
    			ellipse(this.x, this.y, this.size);
    		}else {
    			stroke(this.color);
    			strokeWeight(this.z);
    			line(this.x, this.y, this.x, this.y + this.size);
    		}
    	}
    	this.fall = function(){
    		this.y += this.ySpeed;
    		this.x += this.xSpeed;
    		this.xOffset += this.xSpeed;
    		if (this.y > height) {
    			this.y = random(-windowHeight, 0) * this.z;
    		}
    		if( abs(this.xOffset) >= abs(this.maxXOffset) ){
    			this. xSpeed *= -1;
    		}
    	}
    }
    	for(var i = 0; i <= smallDropCount; i++) {
    		drops.push(
    			new Drop(
    				colors[floor(random(0, colors.length))],
    				1
    			)
    		);
    	}
    	for(var i = 0; i <= largeDropCount; i++) {
    		drops.push(
    			new Drop(
    				colors[floor(random(0, colors.length))],
    				random( 2, 3 )
    			)
    		);
    	}
    }
    	background(0, 0, 128);
    	for(var i = 0; i <= dropCount; i++) {
    		var d = drops[i];
    		d.fall();
    		d.draw();
    	}
  }*/
//Animation 12
  this.animationAnim12 = function(){
    var w = [],x=0,y=1;

    this.setup = function() {
      createCanvas(windowWidth, windowHeight);
      for (var i = 0; i < 80; i++) {
        w[i] = new walker();
      }
      background(255);
    }

      for (var i = 0; i < 80; i++) {
        w[i].update();
        w[i].display();
      }
    this.walker = function() {
      this.pos = createVector(width / 2, height / 2);
      this.vel = createVector(0, 0);
      this.update = function() {
        this.acc = createVector(random(-.1, .1), random(-.1, .1));
        this.vel.add(this.acc);
        this.pos.add(this.vel);
      }
      this.display = function() {
        if (y < 0) {
          fill(x, 0, 0, 0);
        } else {
          fill(x, 0, 0, 1);
        }
        stroke(255, 0, 0, 1)
        noFill();
        ellipse(this.pos.x, this.pos.y, y, y);
        x += 1;
        y -= 0.007;
      }
    }
  }
}
