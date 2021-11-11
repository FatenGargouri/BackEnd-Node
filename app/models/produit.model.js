const mongoose = require('mongoose');
const ProduitSchema = mongoose.Schema({
 Title: String,
 img : String,
 Marque: String ,
 Description : String ,
 Quantite : String ,
 Prix : String
}, {
 timestamps: true
});
module.exports = mongoose.model('Produit', ProduitSchema);