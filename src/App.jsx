import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import ProjectIntake from './pages/ProjectIntake';
import ThreeBackground from './components/ui/ThreeBackground';
import Footer from './components/layouts/Footer';

function AppContent() {
  const location = useLocation();
  const isAdminPage = ['/admin', '/dashboard', '/zorvia-hq'].includes(location.pathname);

  return (
    <div className="app-container">
      <ThreeBackground />
      {!isAdminPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/zorvia-hq" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/start-project" element={<ProjectIntake />} />
        </Routes>
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
