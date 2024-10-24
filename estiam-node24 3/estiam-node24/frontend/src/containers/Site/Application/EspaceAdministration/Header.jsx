import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Logique de déconnexion
        // Par exemple : localStorage.removeItem('token');

        // Redirection vers la page de connexion
        navigate('/');
    };

    return (
        <header>
            <h1>Tableau de Bord</h1>
            <div className="user-info">
                <span>Administration</span>
                <button className="logout-button" onClick={handleLogout}>
                    <FaSignOutAlt /> Déconnexion
                </button>
            </div>
        </header>
    );
};

export default Header;


