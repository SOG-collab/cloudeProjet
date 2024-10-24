import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import frLocale from '@fullcalendar/core/locales/fr'; // Import du locale français

function Calendar({ events }) {
  return (
    <div className="p-4">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locales={[frLocale]} // Ajouter les locales
        locale="fr" // Définit la langue du calendrier à français
        events={events}
      />
    </div>
  );
}

export default Calendar;



