import React, { Component } from 'react';
import { FaHome, FaChartBar, FaCalendar, FaUser } from 'react-icons/fa';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="logo">
                    <img src="https://storage.googleapis.com/prod-phoenix-bucket/osp/cards/1165/estiam-logo-2022-220120103040.png" alt="logo estiam" />
                  
                </div>
                <ul className="nav">
                    <li><a href="#"><FaHome /> Accueil</a></li>
                    <li><a href="#"><FaChartBar /> Statistiques des Cours</a></li>
                    <li><a href="#"><FaCalendar /> Plannings à Venir</a></li>
                    <li><a href="#"><FaUser /> Intervenants</a></li>
                </ul>
                <div className="footer">
                    <a href="/parametres">Paramètres</a>
                    <a href="/">Déconnexion</a>
                </div>
            </div>
        );
    }
}

export default Sidebar;

