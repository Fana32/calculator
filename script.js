function afficher(valeur) {
    document.getElementById('ecran').value += valeur;
}

function calculer() { 
    try {
        let resultat = eval(document.getElementById('ecran').value);
        document.getElementById('ecran').value = resultat;
        document.getElementById('message').innerText = "";
    } 
    catch (e) {
        document.getElementById('message').innerText = "Erreur de calcul";
    }
}

function effacer() {
    document.getElementById('ecran').value = '';
    document.getElementById('message').innerText = "";
}