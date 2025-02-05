"use client";

import styled from 'styled-components';
import Link from 'next/link';

// HERO SECTION


// Updated Hero Section with optional background image or overlay
const HeroSection = styled.section`
  position: relative; /* for absolutely positioned elements */
  overflow: hidden;   /* hides any overflow from the image */
  color: ${({ theme }) => theme.colors.primaryLight};
  padding: 6rem 2rem;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    /* Make sure the image covers the section */
    width: 100%;
    height: 100%;
    object-fit: cover; 
    z-index: -2; /* behind everything */
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    /* A subtle dark overlay to improve text contrast */
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: -1; /* between the image and the text */
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
    z-index: 1; /* above overlay */
    padding: 2rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .hero-cta {
    margin-top: 2rem;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.primaryDark};
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lighterBlue};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 1.5rem;

    h1 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

// ABOUT SECTION (with tertiaryDark border)
const AboutSection = styled.section`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: 4rem 2rem;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center; 
  /* Border using tertiaryDark */
  border: 2px solid ${({ theme }) => theme.colors.tertiaryDark};

  .about-content {
    flex: 1;
    padding-right: 2rem;
  }

  .about-image {
    flex: 1;
    text-align: center;
    img {
      max-width: 100%;
      border-radius: 8px;
      height:70vh;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    min-height: auto;

    .about-content {
      padding-right: 0;
      margin-bottom: 2rem;
    }
  }
`;

// CAROUSEL SECTION (Food) - Slightly larger
const CarouselSection = styled.section`
  background: ${({ theme }) => theme.colors.secondaryDark};
  padding: 4rem 2rem;
  text-align: center;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: ${({ theme }) => theme.colors.primaryLight};
    margin-bottom: 2rem;
  }

  /* Add spacing from the top of the carousel area */
  .carousel {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    overflow-x: auto;
    padding-bottom: 1rem; /* Some extra spacing if needed */

    .food-item {
      width: 300px;
      background: ${({ theme }) => theme.colors.accent};
      /* Tertiary dark border */
      border: 2px solid ${({ theme }) => theme.colors.tertiaryDark};
      border-radius: 8px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem;
      color: ${({ theme }) => theme.colors.primaryLight};

      h3 {
        margin-bottom: 0.75rem;
        font-size: 1.2rem;
        font-weight: bold;
      }

      /* Fixed size images, all consistent */
      img {
        width: 100%;
        height: 200px;
        object-fit: cover; 
        border-radius: 6px;
      }
    }
  }
`;


// CATERING SECTION (with tertiaryDark border)



 const CateringSection = styled.section`
  background: ${({ theme }) => theme.colors.light};
  padding: 4rem 2rem;
  min-height: 70vh;
  border: 2px solid ${({ theme }) => theme.colors.tertiaryDark};
  display: flex;
  justify-content: center;

  /* Outer container for text + image side by side */
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;     /* vertically center content */
    justify-content: center; /* horizontally center the entire block */
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  /* Text content on the left */
  .text-content {
    flex: 1;
    text-align: left; /* or center if you prefer */
  }

  h2 {
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 0.5rem;
  }

  .subheading {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.primaryLight};
    margin-bottom: 2rem;
  }

  .cta-button {
    display: inline-block;
    width: fit-content;
    padding: 0.75rem 1.25rem;
    background: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.primaryLight};
    text-decoration: none;
    border-radius: 2px;
    font-weight: 500;
    margin-top: 1rem;

    &:hover {
      background: ${({ theme }) => theme.colors.lighterBlue};
    }
  }

  /* Image container on the right */
  .image-container {
    flex: 1;
    display: flex;
    justify-content: center; 
    align-items: center;

    /* The SVG or img inside here */
    img,
    svg {
      max-width: 1000px; /* Adjust as needed for your design */
      height: 100vh;
      display: block;
    }
  }

  /* Responsive: stack in a column on smaller screens */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .content {
      flex-direction: column;
      text-align: center; /* so text is centered on mobile if desired */
    }
    .text-content {
      order: 2; /* if you want text below the image on mobile, or remove if not needed */
    }
    .image-container {
      order: 1;
      margin-bottom: 2rem; /* space between image and text */
    }
  }
`;


// MERCH SECTION (unchanged)


const MerchSection = styled.section`
  background: ${({ theme }) => theme.colors.light};
  text-align: center;
  padding: 4rem 2rem;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.highlight};
    margin-bottom: 2rem;
  }

  .merch-grid {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;

    .merch-item {
      background: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.primaryDark};
      width: 200px;
      height: 200px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;

      &:hover {
        background: ${({ theme }) => theme.colors.lighterBlue};
        color: ${({ theme }) => theme.colors.primaryLight}; /* Text turns white */
      }
    }
  }
`;



// WEBCAM SECTION (with tertiaryDark border)
 const WebcamSection = styled.section`
  background: ${({ theme }) => theme.colors.light};
  text-align: center;
  padding: 4rem 2rem;
  min-height: 80vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.tertiaryDark};

  h2 {
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 1rem;
  }

  .webcam-wrapper {
    /* Center the container and give it a max width for desktop */
    max-width: 1200px; 
    margin: 0 auto; 
    width: 80%;

    iframe {
      /* Fill the container’s width, automatically scale height */
      width: 100%;
      /* Use aspect-ratio for a fixed proportion (16:9 or ~610:343) */
      aspect-ratio: 610 / 343;
      border: none;
      border-radius: 8px;
      display: block; /* Removes default inline spacing */
    }
  }

  /* Mobile-friendly adjustments */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem 1rem;
  }
`;

export default function HomePage() {
  return (
    <>
      <HeroSection>
      {/* The background image in the DOM */}
      <img
        className="background-image"
        src="/Cape Cod, Mass.jpg"
        alt="Cape Cod ocean background"
      />
      {/* A dark overlay to ensure text is legible */}
      <div className="overlay" />

      {/* Your main hero content */}
      <div className="hero-content">
        <h1>Welcome to Laurino&apos;s Tavern</h1>
        <p>A Cape Cod classic, now with modern flare.</p>
        <a href="/menu" className="hero-cta">View Menu</a>
      </div>
    </HeroSection>

      <AboutSection>
        <div className="about-content">
          <h2>About Laurino&apos;s</h2>
          <p>
            For decades, Laurino&apos;s Tavern has been a staple of Cape Cod dining,
            offering fresh seafood, hearty comfort food, and a warm, welcoming atmosphere.
          </p>
          <p>
            Whether you&apos;re here for a casual lunch, a family dinner, or a 
            celebration, our friendly staff and cozy tavern vibes make every visit special.
          </p>
        </div>
        <div className="about-image">
          <img
            src="/barimage.jpg"
            alt="Laurino's Tavern Front"
          />
        </div>
      </AboutSection>

      <CarouselSection>
      <h2>Order Our Favorites</h2>
      <div className="carousel">
        <div className="food-item">
          <h3>Lobster Roll</h3>
          <img src="/LobsterRoll.jpg" alt="Lobster Roll" />
        </div>
        <div className="food-item">
          <h3> Fish Tacos</h3>
          <img src="/FishTacos.jpg" alt="Fish Tacos" />
        </div>
        <div className="food-item">
          <h3>Gourmet Pizza</h3>
          <img src="/Pizza.png" alt="Pizza" />
        </div>
        <div className="food-item">
          <h3>Fish &amp; Chips</h3>
          <img src="/FishandChips.jpg" alt="Fish &amp; Chips" />
        </div>
        <div className="food-item">
          <h3>Burgers</h3>
          <img src="/Burger.jpg" alt="Oysters"  />
        </div>
        <div className="food-item">
          <h3>Oysters</h3>
          <img src="/Oysters.jpg" alt="Clam Chowder" />
        </div>
        <div className="food-item">
          <h3>Steak</h3>
          <img src="/Steak.jpg" alt="Steak" />
        </div>
      </div>
    </CarouselSection>

    <CateringSection>
      <div className="content">
        {/* Left: text content */}
        <div className="text-content">
          <h2>Catering Services</h2>
          <div className="subheading">
            Professional on-site catering for every occasion
          </div>
          <p>
            Our friendly team is ready to bring the party to you, complete with
            custom menus, bar service, and more.
          </p>
          <a href="/catering-details" className="cta-button">
            Learn More
          </a>
        </div>

        {/* Right: SVG or image container */}
        <div className="image-container">
          <img
            src="/Catering.svg"
            alt="Mobile bar illustration"
          />
        </div>
      </div>
    </CateringSection>


      <MerchSection>
        <h2>Buy Our Merch</h2>
        <p>Show off your Laurino&apos;s pride with apparel, mugs, and more.</p>
        <div className="merch-grid">
          <div className="merch-item">T-Shirts</div>
          <div className="merch-item">Hoodies</div>
          <div className="merch-item">Mugs</div>
        </div>
      </MerchSection>

      <WebcamSection>
  <h2>Live Webcam</h2>
  <p>Check out what's happening at Skaket Beach!</p>
  <div className="webcam-wrapper">
    <iframe
      src="https://streampros.net/player/live/rvm2php9"
      allowFullScreen
      title="Live Stream"
    />
  </div>
</WebcamSection>
    </>
  );
}
