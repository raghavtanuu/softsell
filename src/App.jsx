// src/App.jsx

import React from 'react';
import ContactForm from './components/ContactForm';  // Corrected import
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <ContactForm />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}

export default App;

