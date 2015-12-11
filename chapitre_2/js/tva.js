var tvaHorsTaxe = Number(prompt("Entrez votre montant hors taxe : "));
var montantTva= 19.6 / 100;
var montantTTC= tvaHorsTaxe*(1+montantTva);
console.log("Votre montant ttc est :"tvaHorsTaxe + montantTva + "euros");

/* 
Exercice : calculer un prix TTC à partir d'un prix HT
*/

// Saisie du prix hors taxes
var prixHT = Number(prompt("Entrez le prix HT :"));

// Calcul du prix TTC
var tauxTVA = 19.6 / 100;
var prixTTC = prixHT * (1 + tauxTVA);

// Affichage du résultat
console.log("Le prix TTC est de " + prixTTC + " euros");