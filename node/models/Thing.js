// Import de Mongoose
const mongoose = require('mongoose');

// Création du schéma de données
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  resum: { type: String, required: true },
  content: { type: String, required: true },
  link: { type: String, required: true },
  like: { type: Number, required: false },
});

// Export du modèle avec les arguments : (nom du modèle, schéma à utiliser)
module.exports = mongoose.model('Post', postSchema);