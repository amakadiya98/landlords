import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/header.css'

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  return (
    <>
      <div className={`header-content ${isScrolled ? 'fixed-header' : ''}`}>
        <Navbar expand="lg" className='navbar' expanded={expanded}>
          <Navbar.Brand href="/"><img src='/images/header/logo.svg' alt='logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="navbarScroll">
            <div className='w-100 d-flex align-items-center justify-content-center'>
              <Nav
                className="header-links-part"
                navbarScroll
              >
                <NavLink onClick={() => setExpanded(false)} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
                <NavLink onClick={() => setExpanded(false)} to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</NavLink>
                <NavLink onClick={() => setExpanded(false)} to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</NavLink>
                <NavLink onClick={() => setExpanded(false)} to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</NavLink>
                <NavLink onClick={() => setExpanded(false)} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink>
                <NavLink onClick={() => setExpanded(false)} to="/support" className={location.pathname === '/support' ? 'active' : ''}>Support</NavLink>
              </Nav>
            </div>
          </Navbar.Collapse>
          <button className='primary-btn'>Get Started</button>
        </Navbar>
      </div>
    </>
  )
}