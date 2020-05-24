"use strict";
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); // stocke le contexte de rendu 2D

//test pour imprimer un rectangle rouge dans le canvas
// ctx.beginPath();
// ctx.rect(30, 60, 60, 60); // les deux premières valeurs sont les coord du coin supérieur gauche (h,v). Les 2 autres la largeur et hauteur.
// ctx.fillStyle = "#1e73be"; //stocke couleur
// ctx.fill(); //utilise la couleur pour peindre le carré
// ctx.closePath();

// // pour un cercle
// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, false); (x(centre), y(centre), rayon, angleDepart, angleFin, directionDessin)
// ctx.strokeStyle = "green"; // stroke pour le contour
// ctx.stroke();
// ctx.closePath(); 

// ctx.beginPath();
// ctx.rect(300, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();

let x = canvas.width/2;
let y = canvas.height-30;

let dx = 2; // déplacement de 2 vers la droite
let dy = -2; // déplacement de 2 vers le haut

let ballRadius = 10; 


function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#1e73be";
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // méthode qui efface le contenue du canevas.
	drawBall(); // ne pas oublier d'inclure drawBall()
	x += dx; //incrémentation de x et y par 2 et -2 afin de créer un mouvement
	y += dy;
	if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}
	if (y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
		dy = -dy;
	}
}




setInterval(draw, 10); // draw sera appelée toutes les 10 millisecondes.

