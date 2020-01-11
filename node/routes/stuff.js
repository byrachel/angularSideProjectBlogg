const express = require('express');
const router = express.Router();
// Import du middleware pour protéger les routes le nécessitant
const auth = require('../middleware/auth');
// Import du middleware MULTER pour gérer l'upload d'images
const multer = require('../middleware/multer');

// Import du controller
const stuffCtrl = require('../controllers/stuff');

// Méthode POST pour récupérer des données via un formulaire
// Route protégée par le middleware : auth
// Une fois authentifié, je peux ajouter le middleware d'envoi de fichier image
router.post('/create/', stuffCtrl.createPost);

// Methode PUT pour mettre à jour un objet + :id comme paramètre
router.put('/update/:id', auth, multer, stuffCtrl.modifyPost);

// Méthode DELETE pour supprimer un objet 
router.delete('/delete/:id', auth, stuffCtrl.deletePost);

// Méthode GET + :id -> permet de le rendre accessible comme paramètre
router.get('/:id', stuffCtrl.getOnePost);

// Méthode GET qui permet d'envoyer des données au frontend
router.get('/', stuffCtrl.getAllPosts);

module.exports = router;