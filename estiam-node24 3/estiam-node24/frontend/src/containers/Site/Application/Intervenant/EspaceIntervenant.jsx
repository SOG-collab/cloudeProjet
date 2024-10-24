import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la redirection
import CalendarComponent from './Calendar';
import AvailabilityForm from './Form';
import CourseSection2 from './Coursection2';
import ProfileDetails from './ProfileDetails'; 
import { FaCalendar, FaBook, FaUser, FaSignOutAlt } from 'react-icons/fa';

function DashboardTeacher() {
  const [view, setView] = useState('courses');
  const [courses, setCourses] = useState([
    { id: 1, name: 'Cours Exemple', time: '09:00 - 10:30', room: 'A', level: 'Première Année', date: '2024-08-26', students: 20 },
  ]);

  const navigate = useNavigate(); // Utiliser useNavigate pour rediriger après la déconnexion

  const handleLogout = () => {
    // Logique pour gérer la déconnexion, par exemple supprimer les informations d'authentification.
    //alert('Déconnexion réussie !');

    // Rediriger vers la page de connexion ou une autre page
    navigate('/'); // Rediriger vers la page /login après la déconnexion
  };

  const handleCoursesChange = (updatedCourses) => {
    setCourses(updatedCourses);
  };

  return (
    <div className="dashboard-container">
      {/* En-tête et profil */}
      <header className="top-bar">
        <h1>Tableau de Bord Intervenant</h1>
        <div className="profile-info-bar">
          <div className="profile-picture">
            <img src="/path-to-profile-picture.jpg" alt="Profile" className="profile-pic" />
          </div>
          <div className="profile-info">
            <h2>Jean Dupont</h2>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        {/* Barre latérale verticale */}
        <aside className="sidebar">
          <nav className="nav-menu">
            <button
              onClick={() => setView('courses')}
              className={`nav-button ${view === 'courses' ? 'active' : ''}`}
            >
              <FaBook className="icon" /> Mes Cours
            </button>
            <button
              onClick={() => setView('calendar')}
              className={`nav-button ${view === 'calendar' ? 'active' : ''}`}
            >
              <FaCalendar className="icon" /> Calendrier
            </button>
            <button
              onClick={() => setView('availability')}
              className={`nav-button ${view === 'availability' ? 'active' : ''}`}
            >
              <FaCalendar className="icon" /> Disponibilités
            </button>
            <button
              onClick={() => setView('profile')}
              className={`nav-button ${view === 'profile' ? 'active' : ''}`}
            >
              <FaUser className="icon" /> Mes Informations
            </button>
            <button
              onClick={handleLogout} // Appeler handleLogout ici
              className="nav-button logout-button"
            >
              <FaSignOutAlt className="icon" /> Déconnexion
            </button>
          </nav>
        </aside>

        {/* Contenu Principal */}
        <main className="main-content">
          {view === 'courses' && <CourseSection2 onCoursesChange={handleCoursesChange} />}
          {view === 'calendar' && (
            <section className="section">
              <h2>Calendrier</h2>
              <CalendarComponent events={courses.map(course => ({
                title: course.name,
                date: course.date
              }))} />
            </section>
          )}
          {view === 'availability' && (
            <section className="section">
              <h2>Disponibilités</h2>
              <AvailabilityForm />
            </section>
          )}
          {view === 'profile' && <ProfileDetails />}
        </main>
      </div>
    </div>
  );
}

export default DashboardTeacher;



