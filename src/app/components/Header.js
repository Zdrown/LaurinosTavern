"use client";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";


const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  color: ${({ theme }) => theme.colors.primaryLight};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 1.5rem;
    font-family: 'Aloja'
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  /* We keep the 'Order' link visible on mobile, hide others */
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

  /* The hamburger icon is hidden on desktop */
  .hamburger {
    display: none;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  /* Dropdown menu for mobile links (initially hidden) */
  .mobile-menu {
    position: absolute;
    top: 70px; /* adjust based on header height */
    right: 1rem;
    background: ${({ theme }) => theme.colors.secondaryDark};
    padding: 1rem;
    border-radius: 4px;
    display: none;
    flex-direction: column;
    gap: 1rem;
  }

  /* Visible if "menuOpen" is true */
  .mobile-menu.open {
    display: flex;
  }

  /* Responsive (mobile) adjustments */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .desktop-links {
      display: none; /* hide the extra links on mobile */
    }
    .hamburger {
      display: block; /* show hamburger on mobile */
    }
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <div className="logo">Laurino&apos;s Tavern</div>

      <nav>
        {/* Always visible "Order" link, even on mobile */}
        <Link href="/order" className="nav-link">
          Order
        </Link>
        <Link href="/menu" className="nav-link">
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
        <button type= 'button' className="hamburger" onClick={toggleMenu} aria-label="Menu">
          {menuOpen ? "\u2715" : "\u2630"}
          {/* \u2630 = hamburger icon, \u2715 = "X" close icon */}
        </button>

        {/* Mobile dropdown menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link href="/catering" className="nav-link" onClick={toggleMenu}>
            Catering
          </Link>
          <Link href="/gift-cards" className="nav-link" onClick={toggleMenu}>
            Gift Cards
          </Link>
          <Link href="/laurinos-store" className="nav-link" onClick={toggleMenu}>
            Laurino&apos;s Store
          </Link>
          <Link href="/" className="nav-link" onClick={toggleMenu}>
            Home
          </Link>
        </div>
      </nav>
    </HeaderContainer>
  );
}
