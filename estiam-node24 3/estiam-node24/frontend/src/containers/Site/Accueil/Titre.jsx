import React from 'react';
import nature from "./assets/livre.jpeg"; // Assurez-vous que le chemin d'accès à votre image est correct

export default function Container() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>LE TEMPLE DU SAVOIR</h1>
      <img src={nature} alt="Livre" style={{ display: "block", margin: "0 auto" }} />
    </div>
  );
}

