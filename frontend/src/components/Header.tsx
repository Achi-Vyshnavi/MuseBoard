import React from 'react';
export default function Header() {
  return (
    <header
      style={{
        padding: '1rem 2rem',
        backgroundColor: '#0070f3',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>MuseBoard</h1>
      <nav>
        <a
          href="#"
          style={{ marginRight: '1rem', color: '#fff', textDecoration: 'none' }}
        >
          Home
        </a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
          Features
        </a>
      </nav>
    </header>
  );
}
