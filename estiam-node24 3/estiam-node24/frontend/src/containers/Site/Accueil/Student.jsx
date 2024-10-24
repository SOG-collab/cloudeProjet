import React, { useState } from 'react';

function StudentLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Préparer les données à envoyer à l'API
    const loginData = { username, password };

    try {
      // Envoyer une requête POST à l'API de login des étudiants
      const response = await fetch('http://localhost:5001/student-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      // Gérer la réponse
      const data = await response.json();
      if (data.success) {
        console.log('Connexion réussie', data);
        // Redirection ou action après connexion réussie
        window.location.href = '/EspaceEtudiant';
      } else {
        setErrorMessage('Nom d\'utilisateur ou mot de passe incorrect.');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="https://cdn.pixabay.com/photo/2020/08/08/19/25/student-5473769_1280.png" alt="Illustration Étudiant" />
      </div>
      <div className="login-form">
        <h1>Connexion Étudiant</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Identifiant"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit">Se connecter</button>
        </form>
        <a href="/forgot-password">Mot de passe oublié ?</a>
      </div>
    </div>
  );
}

export default StudentLogin;
