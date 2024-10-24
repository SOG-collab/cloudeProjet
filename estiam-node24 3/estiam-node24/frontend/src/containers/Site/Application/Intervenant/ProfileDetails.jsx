import React, { useState } from 'react';


function ProfileDetails() {
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
    photoProfil: '', // Champ pour la photo de profil
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
        photoProfil: reader.result, // Enregistre la photo en base64
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
    <div className="profile-details">
      <h2 className="profile-title">Mes Informations</h2>
      <div className="profile-item profile-picture-section">
        <label>Photo de Profil:</label>
        {isEditing ? (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="file-input"
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
      <div className="profile-item">
        <label>Nom:</label>
        {isEditing ? (
          <input
            type="text"
            name="nom"
            value={userInfo.nom}
            onChange={handleChange}
          />
        ) : (
          <span>{userInfo.nom}</span>
        )}
      </div>
      <div className="profile-item">
        <label>Prénom:</label>
        {isEditing ? (
          <input
            type="text"
            name="prenom"
            value={userInfo.prenom}
            onChange={handleChange}
          />
        ) : (
          <span>{userInfo.prenom}</span>
        )}
      </div>
      <div className="profile-item">
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
      <div className="profile-item">
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
      <div className="profile-item">
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
      <div className="profile-item">
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
      <div className="profile-item">
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
      <div className="profile-item">
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
      <div className="profile-item">
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
      <div className="profile-actions">
        {isEditing ? (
          <button onClick={handleSave} className="save-button">Sauvegarder</button>
        ) : (
          <button onClick={handleEditToggle} className="edit-button">Modifier</button>
        )}
      </div>
    </div>
  );
}

export default ProfileDetails;


