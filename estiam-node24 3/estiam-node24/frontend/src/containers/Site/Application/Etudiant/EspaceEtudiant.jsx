import React, { useState } from 'react';
import { FaUser, FaCog, FaSignOutAlt, FaTimes, FaBars, FaFilter } from 'react-icons/fa';

// DashboardHeader Component
function DashboardHeader({ userInfo }) {
  return (
    <div className="top-bar">
      <h1 className="dashboard-title">Tableau de Bord Étudiant</h1>
      <div className="profile-info">
        <img
          src={userInfo.photoProfil || "default_profile_picture_path"}
          alt="Photo de Profil"
          className="profile-image"
        />
        <span className="profile-name">{userInfo.nom} {userInfo.prenom}</span>
      </div>
    </div>
  );
}

// UserProfileSidebar Component
function UserProfileSidebar({ isVisible, onClose }) {
  return (
    <div className={`profile-sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <button className="close-sidebar" onClick={onClose} aria-label="Fermer la barre latérale">
        <FaTimes />
      </button>
      <ul className="profile-options">
        <li>
          <button onClick={() => window.location.href='/UserProfileInfo'} aria-label="Voir les informations personnelles">
            <FaUser /> Mes Informations
          </button>
        </li>
        <li>
          <button onClick={() => window.location.href='/parametres'} aria-label="Accéder aux paramètres">
            <FaCog /> Paramètres
          </button>
        </li>
        <li>
          <button onClick={() => window.location.href='/'} aria-label="Déconnexion">
            <FaSignOutAlt /> Déconnexion
          </button>
        </li>
      </ul>
    </div>
  );
}

// FilterOptions Component
function FilterOptions({ filters, onFilterUpdate, onFilterToggle, areFiltersActive }) {
  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h2 className="filter-title">
          <FaFilter /> Filtres
        </h2>
        <button
          onClick={onFilterToggle}
          className={`toggle-filter ${areFiltersActive ? 'disable' : 'enable'}`}
          aria-label={areFiltersActive ? 'Désactiver les filtres' : 'Activer les filtres'}
        >
          {areFiltersActive ? 'Désactiver les Filtres' : 'Activer les Filtres'}
        </button>
      </div>
      {areFiltersActive && (
        <div className="filter-options">
          <select
            value={filters.course}
            onChange={(e) => onFilterUpdate('course', e.target.value)}
            aria-label="Filtrer par cours"
          >
            <option value="">Tous les Cours</option>
            <option value="Informatique">Informatique</option>
            <option value="Design">Design</option>
            {/* Ajouter d'autres cours ici */}
          </select>
          <select
            value={filters.intervenant}
            onChange={(e) => onFilterUpdate('intervenant', e.target.value)}
            aria-label="Filtrer par intervenant"
          >
            <option value="">Tous les Intervenants</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
            {/* Ajouter d'autres intervenants ici */}
          </select>
          <select
            value={filters.type}
            onChange={(e) => onFilterUpdate('type', e.target.value)}
            aria-label="Filtrer par type"
          >
            <option value="">Tous les Types</option>
            <option value="Séminaire">Séminaire</option>
            <option value="Atelier">Atelier</option>
            {/* Ajouter d'autres types ici */}
          </select>
        </div>
      )}
    </div>
  );
}

// EventCard Component
function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3 className="event-title">{event.title}</h3>
      <p className="event-details">{event.course}</p>
      <p className="event-details">{event.type}</p>
      <p className="event-details">Intervenant: {event.intervenant}</p>
      <p className="event-details">{event.date} - {event.time}</p>
    </div>
  );
}

// EventList Component
function EventList({ events }) {
  return (
    <div className="schedule">
      {events.length === 0 ? (
        <p className="no-events">Aucun événement trouvé.</p>
      ) : (
        events.map(event => <EventCard key={event.id} event={event} />)
      )}
    </div>
  );
}

// StudentDashboard Component
function StudentDashboard() {
  const [userInfo, setUserInfo] = useState({
    nom: 'Dupont',
    prenom: 'Jean',
    photoProfil: '', // Mettre ici le chemin par défaut vers une image si nécessaire
  });

  const [events, setEvents] = useState([
    { id: 1, title: 'Séminaire React', course: 'Informatique', type: 'Séminaire', intervenant: 'John Doe', date: '2024-08-30', time: '10:00 - 12:00' },
    { id: 2, title: 'Atelier UX Design', course: 'Design', type: 'Atelier', intervenant: 'Jane Smith', date: '2024-09-01', time: '14:00 - 16:00' },
    { id: 3, title: 'Conférence IA', course: 'Informatique', type: 'Conférence', intervenant: 'Dr. AI', date: '2024-09-05', time: '09:00 - 11:00' },
    { id: 4, title: 'Atelier Photoshop', course: 'Design', type: 'Atelier', intervenant: 'Jane Smith', date: '2024-09-10', time: '10:00 - 12:00' },
    { id: 5, title: 'Séminaire Vue.js', course: 'Informatique', type: 'Séminaire', intervenant: 'John Doe', date: '2024-09-15', time: '13:00 - 15:00' },
  ]);

  const [filters, setFilters] = useState({ course: '', intervenant: '', type: '' });
  const [areFiltersActive, setAreFiltersActive] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleFilterUpdate = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleFilterToggle = () => {
    setAreFiltersActive(prev => !prev);
  };

  const handleSidebarToggle = () => {
    setIsSidebarVisible(prev => !prev);
  };

  const filteredEvents = events.filter(event =>
    (!areFiltersActive || (
      (filters.course === '' || event.course === filters.course) &&
      (filters.intervenant === '' || event.intervenant === filters.intervenant) &&
      (filters.type === '' || event.type === filters.type)
    ))
  );

  return (
    <div className="student-dashboard">
      <UserProfileSidebar
        isVisible={isSidebarVisible}
        onClose={handleSidebarToggle}
      />
      <div className="dashboard-main">
        <DashboardHeader userInfo={userInfo} />
        <button className="toggle-sidebar" onClick={handleSidebarToggle} aria-label={isSidebarVisible ? 'Fermer la barre latérale' : 'Ouvrir la barre latérale'}>
          {isSidebarVisible ? <FaTimes /> : <FaBars />}
        </button>
        <FilterOptions
          filters={filters}
          onFilterUpdate={handleFilterUpdate}
          onFilterToggle={handleFilterToggle}
          areFiltersActive={areFiltersActive}
        />
        <EventList events={filteredEvents} />
      </div>
    </div>
  );
}

export default StudentDashboard;

