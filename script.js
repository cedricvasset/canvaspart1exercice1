var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();      // Début du chemin
ctx.moveTo(100,330);
ctx.lineTo(300,330);
ctx.lineTo(300,130);
ctx.lineTo(100,130);
ctx.lineTo(100,330);
ctx.closePath();      // Fermeture du chemin (facultative)
ctx.fillStyle="#a7d7e7"; // Définition de la couleur de remplissage
ctx.fill();

ctx.beginPath();      // Début du chemin TOIT
ctx.moveTo(300,130);
ctx.lineTo(200,40);
ctx.lineTo(100,130);
ctx.lineTo(300,130);
ctx.closePath();      // Fermeture du chemin (facultative)
ctx.fillStyle="#d08536"; // Définition de la couleur de remplissage
ctx.fill();

ctx.beginPath();      // Début du chemin PORTE
ctx.moveTo(170,330);
ctx.lineTo(170,260);
ctx.lineTo(230,260);
ctx.lineTo(230,330);
ctx.closePath();      // Fermeture du chemin (facultative)
ctx.fillStyle="#c9c9c9"; // Définition de la couleur de remplissage
ctx.fill();

ctx.beginPath();      // Début du chemin FENETRE GAUCHE
ctx.moveTo(120,160);
ctx.lineTo(160,160);
ctx.lineTo(160,200);
ctx.lineTo(120,200);
ctx.lineTo(120,160);
ctx.closePath();      // Fermeture du chemin (facultative)
ctx.fillStyle="#c9c9c9"; // Définition de la couleur de remplissage
ctx.fill();

ctx.beginPath();      // Début du chemin FENETRE DROITE
ctx.moveTo(280,160);
ctx.lineTo(280,200);
ctx.lineTo(240,200);
ctx.lineTo(240,160);
ctx.lineTo(280,160);
ctx.closePath();      // Fermeture du chemin (facultative)
ctx.fillStyle="#c9c9c9"; // Définition de la couleur de remplissage
ctx.fill();           // Remplissage du dernier chemin tracé
