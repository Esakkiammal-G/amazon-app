import React, { useState, useEffect } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu
  const [isMobile, setIsMobile] = useState(false); // State to manage if it's mobile view

  // Function to check window size and update mobile view
  const updateMobileView = () => {
    setIsMobile(window.innerWidth <= 768); // Set to true if screen width is <= 768px (mobile)
  };

  useEffect(() => {
    updateMobileView(); // Check on initial load
    window.addEventListener('resize', updateMobileView); // Add event listener to window resize

    return () => window.removeEventListener('resize', updateMobileView); // Cleanup event listener on unmount
  }, []);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState); // Toggle the menu state
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="header">
      <h1>Portfolio</h1>

      {/* Toggle button for mobile view */}
      {isMobile && (
        <div
          className="toggle-button"
          onClick={toggleMenu}
          role="button"
          tabIndex={0} // Make it focusable
          aria-label="Toggle menu"
          aria-expanded={isOpen} // Indicate if the menu is open
          onKeyPress={(e) => e.key === 'Enter' && toggleMenu()} // Handle keyboard event
        >
          {isOpen ? '✖' : '☰'} {/* Show '✖' when open, '☰' when closed */}
        </div>
      )}

      {/* Mobile View: Conditionally render the menu */}
      {isMobile && (
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
          {isOpen && ( // Show the menu if it is open
            <>
              <a href="#profile" onClick={closeMenu}>Home</a>
              <a href="#about" onClick={closeMenu}>About Me</a>
              <a href="#projects" onClick={closeMenu}>Projects</a>
              <a href="#skills" onClick={closeMenu}>Skills</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </>
          )}
        </nav>
      )}

      {/* Desktop View: Always visible menu */}
      {!isMobile && (
        <nav className="navbar desktop">
          <a href="#profile">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
