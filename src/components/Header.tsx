import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container nav">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Emotiongraphy Black" />
        </Link>
        
        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            이모셔너그라피블랙
          </Link>
          <Link to="/personal" className={isActive('/personal') ? 'active' : ''}>
            개인심리솔루션
          </Link>
          <Link to="/organizational" className={isActive('/organizational') ? 'active' : ''}>
            조직문화솔루션
          </Link>
          <a href="https://eopla.net/users/my_post?type=article" target="_blank" rel="noopener noreferrer">
            인사이트
          </a>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
            문의하기
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;