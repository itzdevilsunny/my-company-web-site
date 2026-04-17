import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import AdminDashboard from './pages/AdminDashboard';
import ProjectIntake from './pages/ProjectIntake';
import DesignSelection from './pages/DesignSelection';
import PortfolioPage from './pages/PortfolioPage';
import EmployeeLogin from './pages/EmployeeLogin';
import Terms from './pages/Terms';
import Security from './pages/Security';
import HelpDesk from './pages/HelpDesk';
import ThreeBackground from './components/ui/ThreeBackground';
import Footer from './components/layouts/Footer';
import CommandPalette from './components/ui/CommandPalette';
import ScrollProgress from './components/ui/ScrollProgress';
import PageTransition from './components/ui/PageTransition';
import CustomCursor from './components/ui/CustomCursor';
import ScrollToTop from './components/ui/ScrollToTop';
import FloatingNav from './components/ui/FloatingNav';

function AppContent() {
  const location = useLocation();
  const isNoChromePage = ['/admin', '/dashboard', '/zorvia-hq', '/designs', '/employee-login'].includes(location.pathname);

  return (
    <div className="app-container">
      <ScrollToTop />
      <CustomCursor />
      <ScrollProgress />
      <ThreeBackground />
      <CommandPalette />
      <FloatingNav />
      {!isNoChromePage && <Navbar />}
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
            <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
            <Route path="/designs" element={<PageTransition><DesignSelection /></PageTransition>} />
            <Route path="/start-project" element={<PageTransition><ProjectIntake /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
            <Route path="/security" element={<PageTransition><Security /></PageTransition>} />
            <Route path="/help-desk" element={<PageTransition><HelpDesk /></PageTransition>} />
            <Route path="/admin" element={<PageTransition><AdminDashboard /></PageTransition>} />
            <Route path="/employee-login" element={<PageTransition><EmployeeLogin /></PageTransition>} />
            <Route path="/zorvia-hq" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isNoChromePage && <Footer />}
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
