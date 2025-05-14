// src/pages/Home.tsx
import React from 'react';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Home Page Loaded</h2>
        <p>This is a minimal Home component.</p>
      </div>
    </div>
  );
};

export default Home;
