module.exports = (app) => {
    const fournisseurs = require('../controllers/fournisseur.controller.js');
    // Créer une nouvelle note
    app.post('/fournisseurs', fournisseurs.creer);
    // Récupérer toutes les notes
    app.get('/fournisseurs', fournisseurs.afficherTout);
    // Récupérer une seule note à travers noteId
    app.get('/fournisseurs/:fournissseurId', fournisseurs.afficherUn);
    // Mettre à jour une note à travers noteId
    app.put('/fournisseurs/:fournisseurId', fournisseurs.modifier);
    // Supprimer une note à travers noteId
    app.delete('/fournisseurs/:fournisseurId', fournisseurs.supprimer);
}