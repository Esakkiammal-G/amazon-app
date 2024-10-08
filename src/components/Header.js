import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu
  const [isMobile, setIsMobile] = useState(false); // State to manage if it's mobile view
  const [isScrolled, setIsScrolled] = useState(false); // State to manage the scroll effect
  const [typedTitle, setTypedTitle] = useState(''); // State for typewriting effect
  const fullTitle = "Portfolio"; // Full title to display
  const titleRef = useRef(typedTitle); // Using a ref to store the current title

  // Typewriting effect logic
  useEffect(() => {
    titleRef.current = ''; // Reset the ref value before starting

    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullTitle.length) {
        titleRef.current += fullTitle[index]; // Append the current letter to ref
        setTypedTitle(titleRef.current); // Update the state with the ref's value
        index++;
      } else {
        clearInterval(typingInterval); // Stop typing once the full title is displayed
      }
    }, 150); // Speed of typing, 150ms per letter

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to check window size and update mobile view
  const updateMobileView = () => {
    setIsMobile(window.innerWidth <= 768); // Set to true if screen width is <= 768px (mobile)
  };

  // Function to handle scroll and update header style
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Set to true if scrolled more than 50px
  };

  useEffect(() => {
    updateMobileView(); // Check on initial load
    window.addEventListener('resize', updateMobileView); // Add event listener to window resize
    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('resize', updateMobileView);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState); // Toggle the menu state
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <h1>{typedTitle}</h1> {/* Title with typewriting effect */}

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
