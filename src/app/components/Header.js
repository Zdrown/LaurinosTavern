"use client";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faGift, faStore, faHome } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.header`
  z-index: 9999;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  color: ${({ theme }) => theme.colors.primaryLight};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 1.5rem;
    font-family: 'Aloja';
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  /* Desktop links */
  .desktop-links {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.3s ease;
    
    &:hover {
      background: ${({ theme }) => theme.colors.lighterBlue};
    }
  }

  /* Hamburger icon (hidden on desktop) */
  .hamburger {
    display: none;
    font-size: 2rem;
    padding: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  /* Mobile dropdown menu */
  .mobile-menu {
    position: absolute;
    top: 70px; /* adjust based on header height */
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 500px;
    background: ${({ theme }) => theme.colors.secondaryDark};
    padding: 2rem;
    border-radius: 8px;
    display: none;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 1.2rem;
  }

  /* Mobile menu links: full-width with dividers and icons */
  .mobile-menu .nav-link {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    text-align: left;
  }
  
  .mobile-menu .nav-link:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  /* Icon styling: pastel blue theme color */
  .mobile-menu .menu-icon {
    margin-right: 0.5rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.tertiaryDark};
  }

  .mobile-menu.open {
    display: flex;
  }

  /* Responsive: show hamburger on mobile, hide desktop links */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .desktop-links {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <HeaderContainer>
      <div className="logo">Laurino&apos;s Tavern</div>
      <nav>
        {/* Always visible links */}
        <Link href="/order" className="nav-link">
          Order
        </Link>
        <Link href="/components/menu" className="nav-link">
          Menu
        </Link>
        {/* Desktop-only links */}
        <div className="desktop-links">
          <Link href="/components/catering" className="nav-link">
            Catering
          </Link>
          <Link href="/components/seltzer" className="nav-link">
            Locally Brewed Seltzer
          </Link>
          <Link href="/components/gift-cards" className="nav-link">
            Gift Cards
          </Link>
          <Link href="/laurinos-store" className="nav-link">
            Laurino&apos;s Store
          </Link>
          <Link href="/" className="nav-link">
            Home
          </Link>
        </div>
        {/* Hamburger icon (mobile only) */}
        <button type="button" className="hamburger" onClick={toggleMenu} aria-label="Menu">
          {menuOpen ? "\u2715" : "\u2630"}
        </button>
        {/* Mobile dropdown menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link href="/components/catering" className="nav-link" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faUtensils} className="menu-icon" />
            Catering
          </Link>
          <Link href="/components/gift-cards" className="nav-link" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faGift} className="menu-icon" />
            Gift Cards
          </Link>
          <Link href="/laurinos-store" className="nav-link" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faStore} className="menu-icon" />
            Laurino&apos;s Store
          </Link>
          <Link href="/" className="nav-link" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faHome} className="menu-icon" />
            Home
          </Link>
        </div>
      </nav>
    </HeaderContainer>
  );
}
