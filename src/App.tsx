import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { MobileStickyCta } from './components/ui/MobileStickyCta';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Work } from './pages/Work';
import { CaseStudies } from './pages/CaseStudies';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { Contact } from './pages/Contact';
import { TeamMemberDetail } from './pages/TeamMemberDetail';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <ScrollProgress />
        <MobileStickyCta />
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#08080a] text-black dark:text-white transition-colors duration-200">
          <Header />
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team/:memberId" element={<TeamMemberDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Work />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
