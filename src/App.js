import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import './App.css';
import './components/css/Hero.css';
import './components/css/Navbar.css'
import HomePage from './components/HomePage';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<HomePage />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
