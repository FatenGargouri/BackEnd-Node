const Produit = require('../models/produit.model.js');
const router=require("express").Router()
const body=require("body-parser")
router.use(body.json());
// Créer et sauvegarder une nouvelle note
exports.creer= async (request, response) => {
 try {
 var produit = new Produit({
 Title: request.body.Title || "Untitled Note",
 img : request.body.img|| "empty img" ,
 Marque: request.body.Marque|| "empty marque" ,
 Description: request.body.Description|| "empty description" ,
 Quantite: request.body.Quantite|| "empty quantite" ,
 Prix: request.body.Prix|| "empty prix" 
 });
 var result = await produit.save();
 response.send(result);
 } catch (error) {
 response.status(500).send(error);
 }
};
// Récuérer et retourner toutes les notes à partir de la base de données.
exports.afficherTout = (req, res) => {
 Produit.find()
 .then(produits => {
    //var result = await Article.find().populate('fournisseur','fournisseur.Nom fournisseur.Adresse fournisseur.Email fournisseur.Tel fournisseur.adresseFour');
 res.send(produits);
 }).catch(err => {
 res.status(500).send({
 message: err.message || "Some error occurred while retrieving notes."
 });
 });
};
// Trouver une note avec le noteId
exports.afficherUn= async (request, response) => {
    try {
        var n=await Produit.findById(request.params.produitId).exec();
        //var n=await Article.findById(req.params.articleId).populate('fournisseur').exec();
        var result = await n.save();
        response.send(result);
    /* utiliser la fonction findById () pour rechercher un seul document par son
    champ _id. Le champ _id est converti en fonction du schéma avant d'envoyer la
    commande */
    
    } catch (error) {
    response.status(500).send(error);
    }
    };
// Mettre à jour une note identifiée par noteId dans la requête
exports.modifier = async(request, response) => {
try
 {
 var n = await Fournisseur.findById({ _id: request.params.produitId }).exec();
 n.Title = request.body.Title || "Untitled Note",
 n.img = request.body.img|| "empty img" ,
 n.Marque = request.body.Marque|| "empty marque" ,
 n.Description = request.body.Description|| "empty description" ,
 n.Quantite = request.body.Quantite|| "empty quantite" ,
 //n.fournisseur=req.body.fournisseur|| "Updated fournisseur";
 n.Prix = request.body.Prix|| "empty prix" 

 

 var result = await n.save();
 response.send(result);

 }
 catch (error){

 response.status(400).send("unable to update the database");
 }
};
// Supprimer une note avec le noteId spécifié dans la requête
 exports.supprimer= async (request, response) => {
 try {

 var result = await Produit.deleteOne({ _id: request.params.produitId }).exec
();
 response.send(result);
 } catch (error) {
 response.status(500).send(error);
 }
};