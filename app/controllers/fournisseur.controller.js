const Fournisseur = require('../models/fournisseur.model.js');
const router=require("express").Router()
const body=require("body-parser")
router.use(body.json());
// Créer et sauvegarder une nouvelle note
exports.creer= async (request, response) => {
 try {
 var fournisseur = new Fournisseur({
 Nom: request.body.Nom || "Untitled nom",
 Adresse: request.body.Adresse|| "empty Adresse" ,
 Email: request.body.Email|| "empty Email" ,
 Telephone: request.body.Telephone|| "empty Telephone" ,
  
 });
 var result = await fournisseur.save();
 response.send(result);
 } catch (error) {
 response.status(500).send(error);
 }
};
// Récuérer et retourner toutes les notes à partir de la base de données.
exports.afficherTout = (req, res) => {
 Fournisseur.find()
 .then(fournisseurs => {
 res.send(fournisseurs);
 }).catch(err => {
 res.status(500).send({
 message: err.message || "Some error occurred while retrieving notes."
 });
 });
};
// Trouver une note avec le noteId
exports.afficherUn= async (request, response) => {
 try {
 var result = await Produit.findById({ _id: request.params.produitId}).exec()
 response.send(result);
 } catch (error) {
 response.status(500).send(error);
 }
}; 
// Mettre à jour une note identifiée par noteId dans la requête
exports.modifier = async(request, response) => {
 try
 {
 var n = await Produit.findById({ _id: request.params.fournisseurId }).exec();
 n.Nom = request.body.Nom || "Updated Nom" ;
 n.Adresse = request.body.Adresse || "Updated Adresse" ;
 n.Email = request.body.Email || "Updated email" ;
 n.Telephone = request.body.Telephone || "Updated Telephone" ;
 
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

 var result = await Fournisseur.deleteOne({ _id: request.params.fournisseurId }).exec
();
 response.send(result);
 } catch (error) {
 response.status(500).send(error);
 }
};