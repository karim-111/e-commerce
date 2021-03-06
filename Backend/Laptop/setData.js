const firebase = require('./firebase');
require('firebase/database');

module.exports = {
    // Ajouter un Laptop
    saveData : function (req, callback) {
        let NomDuPc = req.Marque;
        console.log(NomDuPc);

        firebase.database().ref("Produits/Laptop/"+req.Marque+"/"+req.Nom).set({
            Type : "Laptop",
            Generation : req.GenerationDuPc,
            Ram : req.Ram,
            Stockage : req.Stockage,
            Prix : req.Prix,
            QuantiteStock : req.QuantiteStock
        })
    
    },
    // Supprimer un Laptop
    DeleteData : function (req, callback) {
       
        //req est la marque et le nom du laptop a supprimer
        firebase.database().ref("Produits/Laptop/"+req).set(null);
    
    }
}

