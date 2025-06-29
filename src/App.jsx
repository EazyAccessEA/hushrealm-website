import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import CaseStudiesPage from './components/CaseStudiesPage'; // Import the new page

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          {/* Main landing page route */}
          <Route path="/" element={
            <>
              <Hero />
              <ProblemSection />
              <SolutionSection />
              <AssessmentSection />
              <TestimonialsSection />
              <MissionSection />
              <ResourcesSection />
            </>
          } />
          
          {/* Case studies page route */}
          <Route path="/case-studies" element={<CaseStudiesPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;