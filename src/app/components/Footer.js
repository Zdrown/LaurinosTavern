// app/components/Footer.jsx

"use client";
import styled from 'styled-components';

const FooterContainer = styled.footer`
  /* Replace 'tertiaryDarkDark' with your actual dark blue key, e.g. 'tertiaryDark' */
  background-color: ${({ theme }) => theme.colors.tertiaryDark};
  /* Text color set to white */
  color: ${({ theme }) => theme.colors.primaryLight};
  padding: 1rem;
  text-align: center;

  /* Ensure p has no extra margin if desired */
  p {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.5rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Laurino&apos;s</p>
    </FooterContainer>
  );
}
