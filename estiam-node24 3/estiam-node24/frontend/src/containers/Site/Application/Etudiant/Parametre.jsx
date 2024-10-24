import React, { useState } from 'react';

function SettingsComponent() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [volume, setVolume] = useState(50);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className={`settings-container ${darkMode ? 'dark' : 'light'}`} style={styles.container}>
      <h1 style={styles.title}>Paramètres</h1>

      {/* Mode Sombre */}
      <div style={styles.settingItem}>
        <label style={styles.label}>Mode Sombre</label>
        <button onClick={handleDarkModeChange} style={styles.button}>
          {darkMode ? 'Désactiver' : 'Activer'}
        </button>
      </div>

      {/* Notifications */}
      <div style={styles.settingItem}>
        <label style={styles.label}>Notifications</label>
        <button onClick={handleNotificationsChange} style={styles.button}>
          {notifications ? 'Désactiver' : 'Activer'}
        </button>
      </div>

      {/* Volume */}
      <div style={styles.settingItem}>
        <label style={styles.label}>Volume : {volume}%</label>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          style={styles.slider}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  settingItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  label: {
    fontSize: '18px',
  },
  button: {
    padding: '8px 12px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  slider: {
    width: '100%',
  },
};

export default SettingsComponent;

