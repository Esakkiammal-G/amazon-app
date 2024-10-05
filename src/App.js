// src/App.js
import React from 'react';
import Header from './components/Header';

import Profile from './components/Profile';
import About from './components/About';

import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
     
      <Profile /> {/* Add Profile component here */}
      <About />
      <Projects />
      <Skills/>
      <ContactForm/>
      <Contact />
    </div>
  );
}

export default App;
