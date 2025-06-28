import React from 'react';
import './App.css';

// Import all components
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import AssessmentSection from './components/AssessmentSection';
import TestimonialsSection from './components/TestimonialsSection';
import MissionSection from './components/MissionSection';
import ResourcesSection from './components/ResourcesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <AssessmentSection />
      <TestimonialsSection />
      <MissionSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
}

export default App;

