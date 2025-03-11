import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/header.css'

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
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
  return (
    <>
      <div className={`header-content ${isScrolled ? 'fixed-header' : ''}`}>
        <Navbar expand="lg" className='navbar'>
          <Navbar.Brand href="/"><img src='/images/header/logo.svg' alt='logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className='w-100 d-flex align-items-center justify-content-center'>
              <Nav
                className="header-links-part"
                navbarScroll
              >
                <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
                <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</NavLink>
                <NavLink to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</NavLink>
                <NavLink to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</NavLink>
                <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink>
                <NavLink to="/support" className={location.pathname === '/support' ? 'active' : ''}>Support</NavLink>
              </Nav>
            </div>
          </Navbar.Collapse>
          <button className='primary-btn'>Get Started</button>
        </Navbar>
      </div>
    </>
  )
}