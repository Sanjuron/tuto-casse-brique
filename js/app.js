"use strict";
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); // stocke le contexte de rendu 2D

//test pour imprimer un rectangle rouge dans le canvas
ctx.beginPath();
ctx.rect(30, 60, 60, 60); // les deux premières valeurs sont les coord du coin supérieur gauche (h,v). Les 2 autres la largeur et hauteur.
ctx.fillStyle = "#1e73be"; //stocke couleur
ctx.fill(); //utilise la couleur pour peindre le carré
ctx.closePath();

// pour un cercle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.strokeStyle = "green"; // stroke pour le contour
ctx.stroke();
ctx.closePath(); 

ctx.beginPath();
ctx.rect(300, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();