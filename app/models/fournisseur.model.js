const mongoose = require('mongoose');
const FournisseurSchema = mongoose.Schema({
 Nom: String,
 Adresse :String ,
 Email : String,
 Telephone : String
}, {
 timestamps: true
});
module.exports = mongoose.model('Fournisseur', FournisseurSchema);