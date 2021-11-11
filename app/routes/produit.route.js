module.exports = (app) => {
    const produits = require('../controllers/produit.controller.js');
    // Créer une nouvelle note
    app.post('/produits', produits.creer);
    // Récupérer toutes les notes
    app.get('/produits', produits.afficherTout);
    // Récupérer une seule note à travers noteId
    app.get('/produits/:produitId', produits.afficherUn);
    // Mettre à jour une note à travers noteId
    app.put('/produits/:produitId', produits.modifier);
    // Supprimer une note à travers noteId
    app.delete('/produits/:produitId', produits.supprimer);
}