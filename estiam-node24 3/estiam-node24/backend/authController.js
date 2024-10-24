const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const bcrypt = require('bcrypt');

router.post('/admin-login', async (req, res) => {
  const { email, mot_de_passe } = req.body;  // Remplacez "username" par "email"

  try {
    // Vérifiez que l'email et le mot de passe sont fournis
    if (!email || !mot_de_passe) {
      return res.status(400).json({ success: false, message: 'Veuillez fournir un email et un mot de passe.' });
    }

    // Requête pour trouver l'utilisateur par email
    const result = await pool.query('SELECT * FROM utilisateur WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ success: false, message: 'Utilisateur non trouvé' });
    }

    // Comparaison des mots de passe
    const isPasswordValid = await bcrypt.compare(mot_de_passe, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Mot de passe incorrect' });
    }

    // Si l'utilisateur est authentifié
    res.status(200).json({ success: true, message: 'Connexion réussie', user });
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
    res.status(500).json({ success: false, message: 'Erreur serveur' });
  }
});

module.exports = router;


