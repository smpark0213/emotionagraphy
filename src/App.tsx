import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import HomePage from './pages/HomePage';
import PersonalSolutionPage from './pages/PersonalSolutionPage';
import OrganizationalSolutionPage from './pages/OrganizationalSolutionPage';
import ContactPage from './pages/ContactPage';
import TestPage from './pages/TestPage';
import './styles/global.css';

function AppContent() {
  const location = useLocation();
  
  return (
    <Layout>
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal" element={<PersonalSolutionPage />} />
          <Route path="/organizational" element={<OrganizationalSolutionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </PageTransition>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
