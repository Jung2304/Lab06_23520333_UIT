'use client';

import { useState } from 'react';

export default function SettingsToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Apply theme to dashboard panel
    const main = document.querySelector('main');
    if (main) {
      main.style.backgroundColor = !isDarkMode ? '#1a1a2e' : '#f5f5f5';
      main.style.color = !isDarkMode ? '#fff' : '#333';
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </span>
      
      <button
        onClick={toggleTheme}
        style={{
          width: '60px',
          height: '30px',
          backgroundColor: isDarkMode ? '#0070f3' : '#ccc',
          border: 'none',
          borderRadius: '15px',
          position: 'relative',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          outline: 'none'
        }}
      >
        <div style={{
          width: '26px',
          height: '26px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          position: 'absolute',
          top: '2px',
          left: isDarkMode ? '32px' : '2px',
          transition: 'left 0.3s',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }} />
      </button>
    </div>
  );
}
