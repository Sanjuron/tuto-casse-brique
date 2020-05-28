"use strict";
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); // stocke le contexte de rendu 2D
let x = canvas.width/2;
let y = canvas.height-30;

let dx = 2; // déplacement de 2 vers la droite
let dy = -2; // déplacement de 2 vers le haut

let ballRadius = 10; 

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2;

let rightPressed = false;
let leftPressed = false; // les touches préssées de la souris sont initialisées à fausse.

//mise en place des briques:
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

//insertion des briques dans un tableau en 2D:
let bricks = [];
for (let col=0; col<brickColumnCount; col++) {
	bricks[col] = [];
	for(let row=0; row<brickRowCount; row++) {
		bricks[col][row] = { x: 0, y: 0};
	}
}

document.addEventListener("keydown", keyDownHandler, false); // qd keydown est déclenché, la func keyDownHandler est exécutée.
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {  // qd on presse une touche la variable devient true
    if(e.keyCode == 39) { // 39 est le code de la touche gauche du clavier
    	rightPressed = true;
    } 
    else if(e.keyCode == 37) { // 37 est le code de la touche droite du clavier
    		leftPressed = true;
    }
}	

function keyUpHandler(e) { // la variable redevient fausse lorsque la touche est relachée
	if(e.keyCode == 39) {
		rightPressed = false;
	} 
	else if(e.keyCode == 37) {
		leftPressed = false;
	}
}	

function collisionDetection() {
	for(let col=0; col<brickColumnCount; col++){
		for(let row=0; row<brickRowCount; row++){
			let br = bricks[col][row];
			if(x > br.x && x <br.x+brickWidth && y > br.y && y < br.y+brickHeight){
				dy = -dy;
			}
		}
	}
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#1e73be";
	ctx.fill();
	ctx.closePath();
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = '#1e73be';
	ctx.fill();
	ctx.closePath();
}	

function drawBricks() {
	for(let col=0; col<brickColumnCount; col++) {
		for(let row=0; row<brickRowCount; row++) {
			let brickX = (col*(brickWidth+brickPadding)) + brickOffsetLeft;
			let brickY = (row*(brickHeight+brickPadding)) + brickOffsetTop;
			bricks[col][row].x = brickX;
			bricks[col][row].y = brickY;
			ctx.beginPath(); //dessine les briques
			ctx.rect(brickX, brickY, brickWidth, brickHeight);
			ctx.fillStyle = "#1e73be";
			ctx.fill();
			ctx.closePath();
		}
	}
}


function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // méthode qui efface le contenue du canevas.
	drawBricks(); //affiche les briques
	drawBall(); // ne pas oublier d'inclure drawBall()
	drawPaddle(); // appelle la fonction pour l'afficher à l'écran

	if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) { //
		dx = -dx;
	}

	if(y + dy < ballRadius) {
		dy = -dy;
	} else if (y + dy > canvas.height-ballRadius) {
		if(x > paddleX && x < paddleX + paddleWidth){ // crée un game over si la balle touche la paroi inférieur; si touche paddle sens inverse
			dy = -dy; // - (dy + 2) ferait augmenter la vitesse à chaque coup réussi

		}else {
		alert("GAME OVER!");
		document.location.reload();
			}
	}

	if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

	x += dx; //incrémentation de x et y par 2 et -2 afin de créer un mouvement
	y += dy;
}


setInterval(draw, 10); // draw sera appelée toutes les 10 millisecondes.

