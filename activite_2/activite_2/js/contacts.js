var Contact = {
   
    initContact: function (nom, prenom) {
        this.nom    = nom;
        this.prenom = prenom;
    },
    
    // Description du contact
    decrireContact: function () {
        var description = 'Nom : ' + this.nom + ', prénom : ' + this.prenom;
        return description;
    }
};


var contact1 = Object.create(Contact);
contact1.initContact('Lévisse', 'Carole');

var contact2 = Object.create(Contact);
contact2.initContact('Nelsonne', 'Mélodie');

// Création du tableau contacts pour stocker les contacts
// Avec ajout direct des contact 1 et 2 dans le tableau contacts
var contacts = [contact1, contact2];

while (true) {
    // Proposition des choix
    console.log('\nVeuillez choisir une option ci-dessous :');
    console.log('1 : Lister les contacts');
    console.log('2 : Ajouter un contact');
    console.log('0 : Quitter');
    
    // Demander le choix de l'utilisateur
    var chaineSaisie    = prompt('Choisissez une option');  // Récupérer la chaine saisie
    var choixOption     = parseInt(chaineSaisie);           // Transformer la chaine en nombre pour controler la saisie de l'utilisateur
    
    if (choixOption === 0) { // Quitter le programme
    
        break; // Quitte la boucle While
    
    } else if (choixOption === 1) { // Lister les contacts - Choix 1
        
        console.log('\nVoici la liste de tous vos contacts :');

        contacts.forEach(function (contact) {
            console.log(contact.decrireContact());
        });

        console.log('\n'); // Placer un espace après la liste des contacts pour la lisibilité
        
    } else if (choixOption === 2) { // Ajouter un contact - Choix 2
        
            // Initialiser les variables pour lancer boucle while
            var nom     = '';
            var prenom  = '';
            
            while ((!nom) || (nom.trim() === '')) { // Gérer la chaine vide, espace vide sans caractères ou le bouton annuler
                console.log('\nVous devez saisir un nom valide - Vous ne pouvez pas quittez l\'application à ce stade\n');
                nom = prompt('Entrez le nom du nouveau contact :');
            }
            
            while ((!prenom) || (prenom.trim() === '')) { // quand un nom est saisi, alors passage au prénom
                console.log('\nVous devez saisir un prénom valide - Vous ne pouvez pas quittez l\'application à ce stade\n');
                prenom  = prompt('Entrez le prénom du nouveau contact :');
            }
            
            var contact = Object.create(Contact);   // Création du contact par prototypage
            contact.initContact(nom, prenom);       // Initialisation du contact avec les valeurs saisies
            
            var nbreContactsBeforePush = contacts.length;                   
           
            contacts.push(contact);                                         // Ajout du contact au tableau contacts
            var nbreContactsAfterPush = contacts.length;                    // Calculer le nombre de contacts dans le tableau après ajout
           
            
            // Vérifier si le contact est bien ajouté au tableau
            if (nbreContactsAfterPush > nbreContactsBeforePush) {
                console.log('\nLe nouveau contact a été ajouté.\n');
            } else {
                console.log('\nAucun contact n\'a été ajouté. Veuillez recommencer.\n');
            }            
        
    } else { // Si l'utilisateur saisit un autre nombre que 0, 1 ou 2 - ou des lettres - ou rien le programme boucle et demande choix options
        
        console.log('\nVous devez saisir un nombre valide.');
        
    }
}

console.log('\nAu revoir'); 