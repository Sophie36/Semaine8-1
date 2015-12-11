var a;
a = 3.14;
console.log(a);

var b = 0; // b contient la valeur 0
b += 1; // b contient la valeur 1
b++; // b contient la valeur 2
console.log(b); // Affiche 2


var c = 3; // 3 est une expression dont la valeur est le nombre 3

var d = c; // c est une expression dont la valeur est celle de c (ici 3)

d = d + 1; // (d + 1) est une expression
// Sa valeur est celle de d augmentée de 1 (ici 4) 
// d contient la valeur 4

console.log(d); // Affiche 4

var e = 3 + 2 * 4; // e contient la valeur 11
e = (3 + 2) * 4; // e contient la valeur 20

var f = 100;
console.log("La variable f contient la valeur " + f);

var h = "5";
console.log(h + 1); // Concaténation : affiche la chaîne "51"
h = Number("5");
console.log(h + 1); // Addition numérique : affiche le nombre 6

var saisie = prompt("Entrez un nombre : "); // saisie est de type chaîne

var nb = Number(saisie); // nb est de type nombre
// ...

var nb = Number(prompt("Entrez un nombre : ")); // nb est de type nombre
// ...