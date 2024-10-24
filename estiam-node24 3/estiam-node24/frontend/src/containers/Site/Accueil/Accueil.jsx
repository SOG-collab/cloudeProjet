import React from 'react';
import { useNavigate } from 'react-router-dom';

function Accueil() {
  const navigate = useNavigate();

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#4b39b5',
    color: 'white',
    padding: '10px 20px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const iconStyle = {
    marginTop: '10px',
    width: '40px',
    height: '40px',
  };

  const textStyle = {
    textAlign: 'center',
    color: 'white',
    fontSize: '32px',
    animation: 'fadeInUp 2s ease-in-out',
    marginBottom: '20px',
  };

  const titleStyle = {
    textAlign: 'center',
    color: 'white',
    fontSize: '48px',
    padding: '20px',
    marginTop: '0',
  };

  const containerStyle = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundImage: 'url("https://etudestech.com/wp-content/uploads/2022/11/estiam.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const handleButtonClick = (route) => {
    console.log('Button clicked! Navigating to:', route); 
    navigate(route);
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>
        <h1>Estiam Paris</h1>
      </div>
      <div style={textStyle}>
        <h2>Gestionnaires des intervenants</h2>
      </div>
      <div style={buttonContainerStyle}>
        <button 
          style={buttonStyle} 
          onClick={() => handleButtonClick('/admin-login')}
        >
          Espace Administration
          <img src="https://cdn-icons-png.flaticon.com/128/2830/2830601.png" alt="Admin Icon" style={iconStyle} />
        </button>
        <button 
          style={buttonStyle} 
          onClick={() => handleButtonClick('/student-login')}
        >
          Espace Etudiant
          <img src="https://cdn-icons-png.flaticon.com/128/2940/2940653.png" alt="Student Icon" style={iconStyle} />
        </button>
        <button 
          style={buttonStyle} 
          onClick={() => handleButtonClick('/teacher-login')}
        >
          Espace Intervenant
          <img src="https://cdn-icons-png.flaticon.com/128/265/265674.png" alt="Teacher Icon" style={iconStyle} />
        </button>
      </div>
      <style>{`
        html, body, #root {
          height: 100%;
          width: 100%;
          margin: 0;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        h1, h2 {
          margin: 0;
        }

        h1 {
          color: white;
        }

        h2 {
          animation: fadeInUp 2s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Accueil;





