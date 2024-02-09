function validerDateOfBirth() {
    // Récupérer la valeur saisie dans le champ de date de naissance
    var dateNaissance = document.getElementById("date").value;

    // Convertir la valeur saisie en objet Date
    var dateNaissanceObj = new Date(dateNaissance);

    // Récupérer la date d'aujourd'hui
    var dateAujourdhui = new Date();

    // Comparer les dates de naissance et d'aujourd'hui
    if (dateNaissanceObj >= dateAujourdhui) {
        // Afficher un message d'erreur si la date de naissance est supérieure ou égale à la date d'aujourd'hui
        alert("Veuillez saisir une date de naissance valide.");
    } else {
        // Si la date de naissance est valide, afficher un message de succès (vous pouvez remplacer cela par le traitement approprié)
        alert("Date de naissance valide.");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le formulaire
    var formulaire = document.querySelector("form");

    // Ajouter un écouteur d'événement 'submit' sur le formulaire
    formulaire.addEventListener("submit", function(event) {
        // Annuler le comportement par défaut du formulaire (envoi)
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        var nom = document.getElementById("nom").value;
        var prenom = document.getElementById("prenom").value;
        var telephone = document.getElementById("telephone").value;
        var dateNaissance = document.getElementById("date").value;
        var password = document.getElementById("password").value;

        // Vérifier les règles pour chaque champ
        var erreurs = [];

        if (!/^[a-zA-Z]+$/.test(nom) || nom.length < 1) {
            erreurs.push("Le nom ne doit contenir que des lettres et doit avoir au moins 1 caractère.");
        }

        if (prenom.length < 1) {
            erreurs.push("Le prénom doit contenir au minimum 1 caractère.");
        }

        if (!/^\d{8}$/.test(telephone)) {
            erreurs.push("Le numéro de téléphone doit contenir exactement 8 chiffres.");
        }

        var dateNaissanceObj = new Date(dateNaissance);
        var dateAujourdhui = new Date();

        if (isNaN(dateNaissanceObj) || dateNaissanceObj >= dateAujourdhui) {
            erreurs.push("La date de naissance doit être inférieure à la date d’aujourd’hui et être une date valide.");
        }

        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
            erreurs.push("Le mot de passe doit contenir au moins 8 caractères, incluant au moins un chiffre, une lettre minuscule et une lettre majuscule.");
        }

        // Afficher les messages d'erreur
        var messagesErreur = document.getElementById("messages-erreur");
        messagesErreur.innerHTML = "";

        if (erreurs.length > 0) {
            erreurs.forEach(function(erreur) {
                var elementErreur = document.createElement("div");
                elementErreur.textContent = erreur;
                elementErreur.style.color = "red";
                messagesErreur.appendChild(elementErreur);
            });
        } else {
            // Si aucune erreur, envoyer le formulaire
            formulaire.submit();
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le champ email
    var emailInput = document.getElementById("email");

    // Ajouter un écouteur d'événement 'keyup' sur le champ email
    emailInput.addEventListener("keyup", function() {
        // Récupérer la valeur de l'email
        var email = emailInput.value;

        // Vérifier si l'email est valide
        var isValidEmail = /\b[A-Za-z0-9._%+-]+@esprit\.tn\b/.test(email);

        // Afficher le message en fonction de la validité de l'email
        var messageErreurEmail = document.getElementById("message-erreur-email");
        messageErreurEmail.textContent = isValidEmail ? "Email valide." : "Email invalide.";
        messageErreurEmail.style.color = isValidEmail ? "green" : "red";
    });
});