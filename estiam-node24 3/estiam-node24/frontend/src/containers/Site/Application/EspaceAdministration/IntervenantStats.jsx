import React, { Component } from 'react';

class IntervenantStats extends Component {
    state = {
        intervenants: [
            {
                nom: 'Alice',
                prenom: 'Dupont',
                cours: [
                    { nomCours: 'Programmation Web', classe: 'E4S1', date: '01/09/2024', horaire: '08:00 - 10:00' },
                    { nomCours: 'Bases de Données', classe: 'E5S1', date: '03/09/2024', horaire: '10:00 - 12:00' },
                ],
                disponibilite: 'Lundi au Vendredi, 9h-17h'
            },
            {
                nom: 'Bob',
                prenom: 'Martin',
                cours: [
                    { nomCours: 'Développement Mobile', classe: 'E4S2', date: '02/09/2024', horaire: '08:00 - 10:00' },
                    { nomCours: 'Intelligence Artificielle', classe: 'E5S2', date: '04/09/2024', horaire: '10:00 - 12:00' },
                ],
                disponibilite: 'Mardi au Jeudi, 10h-18h'
            },
            {
                nom: 'Claire',
                prenom: 'Leroy',
                cours: [
                    { nomCours: 'Réseaux Informatiques', classe: 'BTS1', date: '05/09/2024', horaire: '14:00 - 16:00' },
                    { nomCours: 'Sécurité Informatique', classe: 'BTS2', date: '06/09/2024', horaire: '16:00 - 18:00' },
                ],
                disponibilite: 'Lundi au Vendredi, 8h-16h'
            },
        ],
    };

    render() {
        const { intervenants } = this.state;
        const { filterClass } = this.props;

        const filteredIntervenants = intervenants.filter(intervenant =>
            filterClass === 'all' || intervenant.cours.some(cours => cours.classe === filterClass)
        );

        return (
            <div>
                {filteredIntervenants.map((intervenant, index) => (
                    <div key={index} className="intervenant-card">
                        <h4>{intervenant.prenom} {intervenant.nom}</h4>
                        <h5>Disponibilité: {intervenant.disponibilite}</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom du Cours</th>
                                    <th>Classe</th>
                                    <th>Date</th>
                                    <th>Horaire</th>
                                </tr>
                            </thead>
                            <tbody>
                                {intervenant.cours.map((cours, idx) => (
                                    <tr key={idx}>
                                        <td>{cours.nomCours}</td>
                                        <td>{cours.classe}</td>
                                        <td>{cours.date}</td>
                                        <td>{cours.horaire}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        );
    }
}

export default IntervenantStats;
