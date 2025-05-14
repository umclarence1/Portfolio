// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  console.log("Hero component is rendering");
  return (
    <section style={{ padding: '20px', textAlign: 'center', background: '#eef' }}>
      <h2>Hero Section</h2>
      <p>This is the hero section.</p>
    </section>
  );
};

export default Hero;
