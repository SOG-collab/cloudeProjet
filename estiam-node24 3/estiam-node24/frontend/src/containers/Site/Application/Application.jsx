import React, { useState } from 'react';

function Application() {
    const [livres, setLivres] = useState([]);
    const [nouveauLivre, setNouveauLivre] = useState({ nom: '', auteur: '', statut: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNouveauLivre(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLivres([...livres, nouveauLivre]);
        setNouveauLivre({ nom: '', auteur: '', statut: '' });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="text-center">Liste des Livres</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nom du Livre</th>
                                <th scope="col">Auteur</th>
                                <th scope="col">Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livres.map((livre, index) => (
                                <tr key={index}>
                                    <td>{livre.nom}</td>
                                    <td>{livre.auteur}</td>
                                    <td>{livre.statut}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h2 className="text-center">Ajouter un Livre</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nomLivre" className="form-label">Nom du Livre</label>
                            <input type="text" className="form-control" id="nomLivre" name="nom" value={nouveauLivre.nom} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="auteurLivre" className="form-label">Auteur</label>
                            <input type="text" className="form-control" id="auteurLivre" name="auteur" value={nouveauLivre.auteur} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="statutLivre" className="form-label">Statut</label>
                            <select className="form-select" id="statutLivre" name="statut" value={nouveauLivre.statut} onChange={handleChange} required>
                                <option value="">Sélectionner le statut</option>
                                <option value="Disponible">Disponible</option>
                                <option value="Emprunté">Emprunté</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Application;
