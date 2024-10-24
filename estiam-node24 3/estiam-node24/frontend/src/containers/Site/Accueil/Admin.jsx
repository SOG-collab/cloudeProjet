import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState('');  // Remplacez "username" par "email"
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/admin-login', {  // URL complète
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, mot_de_passe: password }), // Utilisez email et mot_de_passe
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la requête');
      }

      const data = await response.json();

      if (data.success) {
        // Redirection vers le tableau de bord admin
        navigate('/EspaceAdministration');
      } else {
        // Afficher le message d'erreur si les identifiants sont incorrects
        setError('Nom d\'utilisateur ou mot de passe incorrect');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="https://cdn.pixabay.com/photo/2018/01/06/06/05/business-3064400_1280.png" alt="Illustration Administrateur" />
      </div>
      <div className="login-form">
        <h1>Connexion Administration</h1>
        <form onSubmit={handleLogin}>
          {error && <p style={{ color: 'red' }}>{error}</p>} 
          <input
            type="email"
            placeholder="Identifiant"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Se connecter</button>
        </form>
        <a href="/forgot-password">Mot de passe oublié ?</a>
      </div>
    </div>
  );
}

export default AdminLogin;
