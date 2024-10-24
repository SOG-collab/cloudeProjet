import React, { useState } from 'react';

// UserProfileInfo Component
function UserProfileInfo() {
  const [userInfo, setUserInfo] = useState({
    nom: 'Dupont',
    prenom: 'Jean',
    telephone: '0612345678',
    email: 'jean.dupont@example.com',
    dateNaissance: '1990-01-01',
    adresse: '123 Rue de la République',
    pays: 'France',
    codePostal: '75000',
    ville: 'Paris',
    photoProfil: '', // Ajout du champ pour la photo de profil
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserInfo({
        ...userInfo,
        photoProfil: reader.result, // Enregistrer la photo en base64
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Informations sauvegardées avec succès !');
  };

  return (
    <div className="user-profile-info">
      <h2>Mes Informations</h2>
      <div className="info-item profile-picture-section">
        <label>Photo de Profil:</label>
        {isEditing ? (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            {userInfo.photoProfil && (
              <img
                src={userInfo.photoProfil}
                alt="Profil"
                className="profile-image-preview"
              />
            )}
          </>
        ) : (
          userInfo.photoProfil ? (
            <img
              src={userInfo.photoProfil}
              alt="Profil"
              className="profile-image"
            />
          ) : (
            <span>Pas de photo de profil</span>
          )
        )}
      </div>
      <div className="info-item">
        <label>Téléphone:</label>
        {isEditing ? (
          <input
            type="text"
            name="telephone"
            value={userInfo.telephone}
            onChange={handleChange}
          />
        ) : (
          <span>{userInfo.telephone}</span>
        )}
      </div>
      <div className="info-item">
        <label>Email:</label>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        ) : (
          <span>{userInfo.email}</span>
        )}
      </div>
      <div className="info-item">
        <label>Date de Naissance:</label>
        {isEditing ? (
          <input
            type="date"
            name="dateNaissance"
            value={userInfo.dateNaissance}
            onChange={handleChange}
          />
        ) : (
          <span>{userInfo.dateNaissance}</span>
        )}
      </div>
      <div className="info-item">
        <label>Adresse de Domicile:</label>
        {isEditing ? (
          <input
            type="text"
            name="adresse"
            value={userInfo.adresse}
            onChange={handleChange}
          />
        ) : (
          <span>{userInfo.adresse}</span>
        )}
      </div>
      <div className="info-item">
        <label>Pays:</label>
        {isEditing ? (
          <input
            type="text"
            name="pays"
            value={userInfo.pays}
            onChange={handleChange}
          />
        ) : (
          <span>{userInfo.pays}</span>
        )}
      </div>
      <div className="info-item">
        <label>Code Postal:</label>
        {isEditing ? (
          <input
            type="text"
            name="codePostal"
            value={userInfo.codePostal}
            onChange={handleChange}
          />
        ) : (
          <span>{userInfo.codePostal}</span>
        )}
      </div>
      <div className="info-item">
        <label>Ville:</label>
        {isEditing ? (
          <input
            type="text"
            name="ville"
            value={userInfo.ville}
            onChange={handleChange}
          />
        ) : (
          <span>{userInfo.ville}</span>
        )}
      </div>
      <div className="actions">
        {isEditing ? (
          <button onClick={handleSave}>Sauvegarder</button>
        ) : (
          <button onClick={handleEditToggle}>Modifier</button>
        )}
      </div>
    </div>
  );
}

export default UserProfileInfo;





