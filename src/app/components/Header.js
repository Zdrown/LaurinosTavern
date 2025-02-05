// app/components/Header.jsx

"use client"; // This file is a Client Component
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  /* Use your theme or custom hex codes as desired */
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  color: ${({ theme }) => theme.colors.primaryLight};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  nav {
    display: flex;
    gap: 2rem;
  }

  /* Links styling */
  nav a {
    /* Either use a theme color or pure white: */
    color: #ffffff; /* or ${({ theme }) => theme.colors.primaryLight}; */
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
       &:hover {
      background: ${({ theme }) => theme.colors.lighterBlue};
    }
  }

  /* Responsive (mobile) adjustments */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .logo {
      font-size: 1.2rem;
    }
    nav {
      gap: 1rem;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <div className="logo">Laurino&apos;s Tavern</div>
      <nav>
        <Link href="/catering">Catering</Link>
        <Link href="/order">Order</Link>
        <Link href="/gift-cards">Gift Cards</Link>
        <Link href="/laurinos-store">Laurino&apos;s Store</Link>
        <Link href="/">Home</Link>
      </nav>
    </HeaderContainer>
  );
}
