import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FullstackDev from './components/FullstackDev';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FrontendDevelopment from './pages/FrontendDevelopment';
import BackendDevelopment from './pages/BackendDevelopment';
import CloudTechnologies from './pages/CloudTechnologies';
import DatabaseDevelopment from './pages/DatabaseDevelopment';
import { Cloud } from 'lucide-react';
import DevopsDevelopment from './pages/DevopsDevelopment';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <FullstackDev />
              <Contact />
            </>
          } />
          <Route path="/frontend-development" element={<FrontendDevelopment />} />
          <Route path="/backend-development" element={<BackendDevelopment />} />
          <Route path="/cloud-Technologies" element={<CloudTechnologies />} />
          <Route path="/database-development" element={<DatabaseDevelopment />} />
          <Route path="/Devops-development" element={<DevopsDevelopment /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;