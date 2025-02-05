// app/styles/GlobalStyles.js
"use client";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Basic CSS reset or normalize can go here */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.primaryDark};
    min-height: 100%;
    width: 100%;
  }

  /* Example usage of a global media query */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    html, body {
      font-size: 90%;
    }
  }
`;

export default GlobalStyles;
