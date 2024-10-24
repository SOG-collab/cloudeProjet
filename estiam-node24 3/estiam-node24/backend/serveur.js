const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5001; // ou un autre port

app.use(cors());
app.use(bodyParser.json());

// Configurer la connexion à la base de données
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root', // votre nom d'utilisateur
    password: '', // votre mot de passe
    database: 'estiam', // nom de la base de données
});

// Connexion à la base de données
db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL.');
});

// Point de terminaison pour la connexion
app.post('/admin-login', (req, res) => {
    const { email } = req.body;

    console.log('Email reçu:', email);

    // Vérifie que l'e-mail est fourni
    if (!email) {
        console.log('Email manquant');
        return res.status(400).json({ success: false, message: 'Veuillez fournir un email.' });
    }

    // Requête pour rechercher l'utilisateur par e-mail
    const query = 'SELECT * FROM administration WHERE email = ?';

    console.log('Exécution de la requête SQL:', query, 'avec email:', email);

    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Erreur lors de la requête à la base de données :', err);
            return res.status(500).json({ success: false, message: 'Erreur du serveur' });
        }

        console.log('Résultats de la requête:', results);

        // Si aucun utilisateur n'est trouvé
        if (results.length === 0) {
            console.log('Aucun utilisateur trouvé avec cet email');
            return res.status(401).json({ success: false, message: 'Email incorrect.' });
        }

        const user = results[0];
        console.log('Utilisateur trouvé:', user);

        // Si l'utilisateur existe, retournez le succès avec les informations de l'utilisateur
        console.log('Connexion réussie pour l\'utilisateur:', user);
        return res.status(200).json({ success: true, user });
    });
});







// Point de terminaison pour la connexion des étudiants
app.post('/student-login', (req, res) => {
  const { username } = req.body;

  console.log('Nom d\'utilisateur reçu:', username);

  // Vérifie que le nom d'utilisateur est fourni
  if (!username) {
      console.log('Nom d\'utilisateur manquant');
      return res.status(400).json({ success: false, message: 'Veuillez fournir un nom d\'utilisateur.' });
  }

  // Requête pour rechercher l'utilisateur par nom d'utilisateur
  const query = 'SELECT * FROM etudiant WHERE email = ?';

  console.log('Exécution de la requête SQL:', query, 'avec email:', username);

  db.query(query, [username], (err, results) => {
      if (err) {
          console.error('Erreur lors de la requête à la base de données :', err);
          return res.status(500).json({ success: false, message: 'Erreur du serveur' });
      }

      console.log('Résultats de la requête:', results);

      // Si aucun utilisateur n'est trouvé
      if (results.length === 0) {
          console.log('Aucun étudiant trouvé avec ce nom d\'utilisateur');
          return res.status(401).json({ success: false, message: 'Nom d\'utilisateur incorrect.' });
      }

      const student = results[0];
      console.log('Étudiant trouvé:', student);

      // Retourne une réponse de succès avec les détails de l'utilisateur
      return res.status(200).json({ success: true, student });
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});















// Point de terminaison pour la connexion des intervenants
app.post('/teacher-login', (req, res) => {
  const { username } = req.body;

  console.log('Nom d\'utilisateur reçu:', username);

  // Vérifie que le nom d'utilisateur est fourni
  if (!username) {
      console.log('Nom d\'utilisateur manquant');
      return res.status(400).json({ success: false, message: 'Veuillez fournir un nom d\'utilisateur.' });
  }

  // Requête pour rechercher l'intervenant par nom d'utilisateur
  const query = 'SELECT * FROM intervenant WHERE email = ?';

  console.log('Exécution de la requête SQL:', query, 'avec email:', username);

  db.query(query, [username], (err, results) => {
      if (err) {
          console.error('Erreur lors de la requête à la base de données :', err);
          return res.status(500).json({ success: false, message: 'Erreur du serveur' });
      }

      console.log('Résultats de la requête:', results);

      // Si aucun intervenant n'est trouvé
      if (results.length === 0) {
          console.log('Aucun intervenant trouvé avec ce nom d\'utilisateur');
          return res.status(401).json({ success: false, message: 'Nom d\'utilisateur incorrect.' });
      }

      const teacher = results[0];
      console.log('Intervenant trouvé:', teacher);

      // Retourne une réponse de succès avec les détails de l'utilisateur
      return res.status(200).json({ success: true, teacher });
  });
});
