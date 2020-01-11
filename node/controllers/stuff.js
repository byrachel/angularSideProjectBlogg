// Récupérer le schéma / modèle
let Post = require('../models/Thing');

// Logique de la route POST : enregistre les données du formulaire addPost
exports.createPost = (req, res, next) => {
  Post.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
}

// Logique de la route PUT pour mettre à jour un objet + :id comme paramètre
exports.modifyPost = (req, res, next) => {
  // Méthode updateOne avec 2 paramètres : l'objet de comparaion (celui qu'on modifie)
  // et le nouvel objet en précisant que lID correspond à celui des paramètres.
  Post.updateOne({ _id: req.params.id }, { ...thingObject, _id: req.params.id })
    .then(() => res.status(201).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
}

// Logique de la route DELETE pour supprimer un objet + :id comme paramètre
exports.deletePost = (req, res, next) => {
  Post.deleteOne({ _id: req.params.id })
  .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
  .catch(error => res.status(400).json({ error }));
}

// Logique de la route GET pour afficher un seul objet + :id comme paramètre
exports.getOnePost = (req, res, next) => {
  // Méthode findOne + indicateur de comparaison : _id
  Post.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}

// Logique de la route GET qui permet d'envoyer toutes les données au frontend
exports.getAllPosts = (req, res, next) => {
  // La méthode find permet de trouver tous les éléments dans la BDD
  Post.find()
      // Things est le nom du tableau dans le BDD (pluriel du nom du schéma)
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
}