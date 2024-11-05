import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo1.png';
import contactImg from '../../assets/contact.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo'/>

      <div className='desktopMenu'>
        <a className='desktopMenuListItem' href='#intro'>Home</a>
        <a className='desktopMenuListItem' href='#about'>About</a>
        <a className='desktopMenuListItem' href='#projects'>Projects</a>
        <a className='desktopMenuListItem' href='#clients'>Clients</a>
      </div>

      <button className='desktopMenuBtn'>
        <img src={contactImg} alt='' className='desktopMenuImg'/><b>Contact Me</b>
      </button>

      {/* Hamburger Icon */}
      <button className='hamburgerIcon' onClick={toggleMobileMenu} aria-label='Toggle menu'>
        <span className='hamburgerLine'></span>
        <span className='hamburgerLine'></span>
        <span className='hamburgerLine'></span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='mobileMenu'>
          <a className='mobileMenuListItem' href='#intro' onClick={toggleMobileMenu}>Home</a>
          <a className='mobileMenuListItem' href='#about' onClick={toggleMobileMenu}>About</a>
          <a className='mobileMenuListItem' href='#projects' onClick={toggleMobileMenu}>Projects</a>
          <a className='mobileMenuListItem' href='#clients' onClick={toggleMobileMenu}>Clients</a>
          <button className='mobileMenuBtn'>
            <img src={contactImg} alt='' className='mobileMenuImg'/><b>Contact Me</b>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
