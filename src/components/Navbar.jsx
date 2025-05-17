// components/Navbar.js
'use client'
import React, { useState, useEffect,useRef } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

// Define consistent heights (adjust these pixel values to match your design)
const NAV_HEIGHT_INITIAL_NUM = 64;
const NAV_HEIGHT_FIXED_NUM = 57;

const NAV_HEIGHT_INITIAL = `${NAV_HEIGHT_INITIAL_NUM}px`;
const NAV_HEIGHT_FIXED = `${NAV_HEIGHT_FIXED_NUM}px`;

// Define logo dimensions (adjust to your logo's aspect ratio and desired size)
const LOGO_HEIGHT_INITIAL = 40; 
const LOGO_WIDTH_INITIAL = 40; // Assuming a 1:1 aspect ratio for simplicity
const LOGO_HEIGHT_FIXED = 32;
const LOGO_WIDTH_FIXED = 32;

const NavContainer = styled.header` // Use <header> for semantic HTML
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, height 0.3s ease;
  background-color: ${({ isFixed, isOpenMobile }) => (isFixed || isOpenMobile ? '#1a202c' : '#2d3748')};
  box-shadow: ${({ isFixed }) => (isFixed ? '0 4px 12px rgba(0, 0, 0, 0.15)' : '0 2px 10px rgba(0, 0, 0, 0.1)')};
  height: ${({ isFixed }) => (isFixed ? NAV_HEIGHT_FIXED : NAV_HEIGHT_INITIAL)};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: white;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const LogoLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  .logo-image-container { // Wrapper for next/image
    display: flex;
    align-items: center;
    transition: width 0.3s ease, height 0.3s ease; // For smooth size change of image
  }
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: ${({ isFixed }) => (isFixed ? NAV_HEIGHT_FIXED : NAV_HEIGHT_INITIAL)};
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: calc(100vh - ${({ isFixed }) => (isFixed ? NAV_HEIGHT_FIXED : NAV_HEIGHT_INITIAL)});
    background-color: #1a202c;
    transition: left 0.3s ease-in-out, top 0.3s ease-in-out;
    padding: 1rem 0;
    z-index: 999; 
    overflow-y: auto;
  }
`;

const MenuItem = styled.li`
  margin: 0 0.5rem;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    height: auto;
  }
`;

const baseLinkStyles = css`
  text-decoration: none;
  color: #e2e8f0;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  height: 100%; // For desktop, to make the clickable area larger

  &:hover {
    color: #63b3ed;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: calc(100% - 1.5rem); // Full width minus padding
    height: 2px;
    bottom: 0px;
    left: 0.75rem;
    background-color: #63b3ed;
    transform: scaleX(0);
    transform-origin: center; // Animate from center
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    width: 100%;
    height: auto;
    &::after {
      bottom: 10px;
      left: 2rem;
      width: calc(100% - 4rem);
    }
  }
`;

const StyledMenuLink = styled(Link)`
  ${baseLinkStyles}
`;

const DropdownToggleLink = styled.a` // Use <a> for non-navigational toggle
  ${baseLinkStyles}
  cursor: pointer;
`;

const DropdownArrow = styled.span`
  margin-left: 8px;
  transition: transform 0.3s ease;
  display: inline-block;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% - 5px); // Slight overlap
  left: 50%;
  transform: translateX(-50%); // Center dropdown
  background-color: #1a202c;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  min-width: 220px;
  padding-top: 5px; // Account for overlap
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  clip-path: ${({ isOpen }) => (isOpen ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)')};
  transition: clip-path 0.25s ease-out, opacity 0.25s ease-out, visibility 0.25s ease-out;
  z-index: 20;
  
  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
    background-color: transparent;
    margin-top: 0;
    margin-bottom: 0;
    border-left: 3px solid #4a5568;
    min-width: unset;
    transform: none;
    padding-left: 1rem;
    padding-top: 0;
    border-radius: 0;
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')}; // Collapsible
    overflow: hidden;
    opacity: 1;
    visibility: visible;
    clip-path: none; // Reset clip-path for mobile
    transition: max-height 0.3s ease-in-out;
  }
`;

const StyledDropdownItemLink = styled(Link)`
  display: block;
  padding: 0.8rem 1.2rem;
  color: #cbd5e0;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  font-size: 0.95rem;
  
  &:hover {
    background-color: #2d3748;
    color: #90cdf4;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 0 0.75rem 1rem; // Indent for mobile
    &:hover {
      background-color: transparent;
      color: #63b3ed;
    }
  }
`;

const BurgerMenu = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  &:focus {
    outline: 2px solid #63b3ed; // Focus indicator
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const BurgerBar = styled.div`
  width: 28px;
  height: 3px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:nth-child(1) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    transform: ${({ isOpen }) => isOpen ? 'translateX(-100%)' : 'translateX(0)'};
  }
  &:nth-child(3) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(6px, -7px)' : 'rotate(0)'};
  }
`;

const Navbar = ({ onHeightChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const servicesMenuItemRef = (null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  
const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const servicesTimeoutRef = useRef(null);
  
  // Clean up timeout when component unmounts
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, []);

  const handleServicesMouseEnter = () => {
    // Check if we're on client-side before accessing window
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
      setServicesDropdownOpen(true);
    }
  };

  const handleServicesMouseLeave = () => {
    // Check if we're on client-side before accessing window
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      servicesTimeoutRef.current = setTimeout(() => {
        setServicesDropdownOpen(false);
      }, 150); // Delay to allow moving to dropdown
    }
  };


  const toggleServicesDropdownMobile = (e) => {
    e.preventDefault(); // Important for the <a> tag
    if (window.innerWidth <= 768) {
      setServicesDropdownOpen(!servicesDropdownOpen);
    }
  };

  // Effect for scroll handling
  // Effect for scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const fixed = window.scrollY > 50;
      if (fixed !== isFixed) { // 'isFixed' is the state variable from the outer scope
        setIsFixed(fixed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Defensive check: Ensure servicesTimeoutRef itself is not null
      // and then proceed to clear its .current property (which can be null or a timeout ID)
      if (servicesTimeoutRef) {
        clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, [isFixed]); // Dependency array is correct with just 'isFixed'
                 // servicesTimeoutRef should not be in the dependency array as the ref object itself is stable.

  // Effect for passing navbar height to parent
  useEffect(() => {
    if (onHeightChange) {
      onHeightChange(isFixed ? NAV_HEIGHT_FIXED_NUM : NAV_HEIGHT_INITIAL_NUM);
    }
  }, [isFixed, onHeightChange]);

  // Effect for mobile menu behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) closeMobileMenu();
    };
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const logoPath = '/assessts/logo.jpg'; // Path from public folder

  return (
    <NavContainer isFixed={isFixed} isOpenMobile={isMobileMenuOpen}>
      <Nav isFixed={isFixed}>
        <LogoLink href="/" onClick={closeMobileMenu}>
          <div className="logo-image-container">
            <Image 
              src={logoPath}
              alt="CUMEC Logo" 
              width={isFixed ? LOGO_WIDTH_FIXED : LOGO_WIDTH_INITIAL}
              height={isFixed ? LOGO_HEIGHT_FIXED : LOGO_HEIGHT_INITIAL}
              style={{ borderRadius: '4px' }} // No need to transition width/height here, parent handles it
              priority // Logo is critical
            />
          </div>
          CUMEC
        </LogoLink>

        <BurgerMenu onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
          <BurgerBar isOpen={isMobileMenuOpen} />
          <BurgerBar isOpen={isMobileMenuOpen} />
          <BurgerBar isOpen={isMobileMenuOpen} />
        </BurgerMenu>

        <MenuItems isOpen={isMobileMenuOpen} isFixed={isFixed}>
          <MenuItem>
            <StyledMenuLink href="/" onClick={closeMobileMenu}>Home</StyledMenuLink>
          </MenuItem>
          <MenuItem 
            ref={servicesMenuItemRef}
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <DropdownToggleLink 
              href="#" // Or "/services" if it's a fallback page
              onClick={toggleServicesDropdownMobile}
              aria-haspopup="true"
              aria-expanded={servicesDropdownOpen}
            >
              Services <DropdownArrow isOpen={servicesDropdownOpen}>▼</DropdownArrow>
            </DropdownToggleLink>
            <DropdownMenu 
              isOpen={servicesDropdownOpen}
              onMouseEnter={handleServicesMouseEnter} 
              onMouseLeave={handleServicesMouseLeave}
            >
              <StyledDropdownItemLink href="/services/stone-marble" onClick={closeMobileMenu}>Stone & Marble</StyledDropdownItemLink>
              <StyledDropdownItemLink href="/services/civil-planning" onClick={closeMobileMenu}>Civil Planning</StyledDropdownItemLink>
              <StyledDropdownItemLink href="/services/environmental" onClick={closeMobileMenu}>Environmental</StyledDropdownItemLink>
              <StyledDropdownItemLink href="/services/interior-design" onClick={closeMobileMenu}>Interior Design</StyledDropdownItemLink>
              <StyledDropdownItemLink href="/services/construction" onClick={closeMobileMenu}>Construction</StyledDropdownItemLink>
              <StyledDropdownItemLink href="/services/architectural" onClick={closeMobileMenu}>Architectural</StyledDropdownItemLink>
            </DropdownMenu>
          </MenuItem>
          <MenuItem>
            <StyledMenuLink href="/clients" onClick={closeMobileMenu}>Clients</StyledMenuLink>
          </MenuItem>
          <MenuItem>
            <StyledMenuLink href="/about" onClick={closeMobileMenu}>About Us</StyledMenuLink>
          </MenuItem>
          <MenuItem>
            <StyledMenuLink href="/faq" onClick={closeMobileMenu}>FAQ's</StyledMenuLink>
          </MenuItem>
          <MenuItem>
            <StyledMenuLink href="/contact" onClick={closeMobileMenu}>Contact Us</StyledMenuLink>
          </MenuItem>
        </MenuItems>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;