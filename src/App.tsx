import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PersonalSolutionPage from './pages/PersonalSolutionPage';
import OrganizationalSolutionPage from './pages/OrganizationalSolutionPage';
import ContactPage from './pages/ContactPage';
import TestPage from './pages/TestPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal" element={<PersonalSolutionPage />} />
          <Route path="/organizational" element={<OrganizationalSolutionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
