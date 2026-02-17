"use client";

import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';


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
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: 1px;
       font-family: 'Aloja';
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

  h2 {
    
    font-family: 'Aloja';
  }
  .about-image {
    flex: 1;
    text-align: center;
    img {
      max-width: 100%;
      border-radius: 8px;
      height: 70vh;
    }
  }

  .slideshow-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .slideshow-subtitle {
    font-family: 'Aloja';
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.tertiaryDark};
    margin-bottom: 0.25rem;
  }

  .slideshow-container {
    position: relative;
    width: 100%;
    max-width: 500px;
    aspect-ratio: 4/3;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(58,86,102,0.12);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 0.5s ease;
      filter: grayscale(100%);
    }

    .slide-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0,0,0,0.5));
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .slide-hint {
      color: rgba(255,255,255,0.8);
      font-size: 0.75rem;
      letter-spacing: 1px;
    }

    .slide-counter {
      color: rgba(255,255,255,0.7);
      font-size: 0.7rem;
    }
  }

  .slide-dots {
    display: flex;
    gap: 0.4rem;
  }

  .slide-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.lighterBlue};
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background 0.2s;

    &.active {
      background: ${({ theme }) => theme.colors.tertiaryDark};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    min-height: auto;

    .about-content {
      padding-right: 0;
      margin-bottom: 2rem;
    }

    .slideshow-container {
      max-width: 100%;
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
    font-family: 'Aloja';
}
  .subtext  {
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: .25rem;
       
  }




  /* The carousel of items */
  .carousel {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    overflow-x: auto;
    padding-bottom: 1rem;

    .food-item {
      width: 300px;
      background: ${({ theme }) => theme.colors.accent};
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
        
      }

      img {
        width: 100%;
        height: 200px;
        object-fit: cover; 
        border-radius: 6px;
      }
    }
  }

  /* A separate container for a single CTA button below the carousel */
  .order-cta {
    margin-top: 2rem;
    display: flex;
    justify-content: center; /* Centers the button horizontally */
    width: 100%;

    .order-now-btn {
      background: ${({ theme }) => theme.colors.primaryDark};
      color: #fff;
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-weight: 600;
      transition: background 0.3s ease;

      &:hover {
        background: ${({ theme }) => theme.colors.secondaryDark};
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
    align-items: center;
    justify-content: center;
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  /* Text content on the left */
  .text-content {
    flex: 1;
    text-align: left; /* or center, if you prefer */
  }

  h2 {
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 0.5rem;
    font-family: 'Aloja';
  }

  .subheading {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.primaryDark};
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
      max-width: 900px;
      height: 100vh;
      display: block;
    }
  }

  /* Responsive: stack in a column on smaller screens */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .content {
      flex-direction: column;
      text-align: center; /* center text on mobile if desired */
    }

    .text-content {
      order: 2; /* put text below the image on smaller devices */
    }

    .image-container {
      order: 1;
      margin-bottom: 2rem; /* space between image and text */
      overflow: hidden;
    }
  }

  /* Make the SVG a bit bigger on mobile but avoid overflow */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .image-container img,
    .image-container svg {
      max-width: 140%; 
      gap: 1rem;
      height: auto;   /* remove fixed height to prevent overflow */
    }
  }
`;


// MERCH SECTION (unchanged)


const Section = styled.section`
  background: ${({ theme }) => theme.colors?.light || '#f9f9f9'};
  text-align: center;
  padding: 4rem 2rem;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: ${({ theme }) => theme.colors?.primaryDark || '#333'};
    margin-bottom: 1rem;
    font-family: 'Aloja';
  }

  p {
    color: ${({ theme }) => theme.colors?.highlight || '#666'};
    margin-bottom: 2rem;
  }

.merch-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  .merch-item {
    background: ${({ theme }) => theme.colors?.accent || '#e5e5e5'};
    color: ${({ theme }) => theme.colors?.primaryDark || '#333'};
-   width: 200px;
-   height: 250px;
+   width: 250px;
+   height: 300px; 
    border-radius: 8px;
    display: flex;
    flex-direction: column;
+   justify-content: space-between; /* Keep image & text from crowding each other */
    align-items: center;
    font-weight: bold;
    padding: 1rem;
    transition: background 0.3s, color 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors?.lighterBlue || '#cce0ff'};
      color: ${({ theme }) => theme.colors?.primaryLight || '#fff'};
    }

    span {
      margin-top: 0.5rem;
    }

+   /* Responsive tweak for small screens */
+   @media (max-width: 768px) {
+     width: 150px;
+     height: 200px;
+   }
  }
}
    }
  }
`;

// The styled button
const CTAButton = styled.button`
  background: ${({ theme }) => theme.colors?.primaryDark || '#333'};
  color: #fff;
  padding: 0.75rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors?.secondaryDark || '#555'};
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
       font-family: 'Aloja';
  }



  .webcam-wrapper {
    /* Center the container and give it a max width for desktop */
    max-width: 1200px; 
    margin: 0 auto; 
    width: 90%;

    iframe {
      /* Fill the container's width, automatically scale height */
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

// EVENTS CALENDAR SECTION
const CALENDAR_EVENTS = [
  { date: '2026-02-02', title: 'Live Music — Josh Ayala', time: '' },
  { date: '2026-02-08', title: 'Super Bowl Sunday Specials', time: '' },
  { date: '2026-02-21', title: 'Live Music — The Grab Brothers', time: '7PM – 9PM' },
  { date: '2026-02-27', title: 'Live Music — Bounce', time: '7PM – 9PM' },
];

const CalendarSection = styled.section`
  background: ${({ theme }) => theme.colors.background || '#FAF9F6'};
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: 2.5rem 1rem 3rem;
  border-top: 2px solid ${({ theme }) => theme.colors.tertiaryDark};
  border-bottom: 2px solid ${({ theme }) => theme.colors.tertiaryDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  h2 {
    font-family: 'Aloja';
    font-size: 2.5rem;
    margin-bottom: 0.15rem;
    color: ${({ theme }) => theme.colors.tertiaryDark};
  }

  .cal-subtitle {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.secondaryDark};
    margin-bottom: 1rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  /* Weekly Specials Dropdown */
  .specials-toggle {
    width: 100%;
    max-width: 1100px;
    margin-bottom: 1.25rem;
  }

  .specials-btn {
    width: 100%;
    background: ${({ theme }) => theme.colors.tertiaryDark};
    color: #fff;
    border: none;
    padding: 0.85rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 0.5px;
    transition: background 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.bluePastel};
    }

    .arrow {
      font-size: 0.8rem;
      transition: transform 0.3s;
    }
    .arrow.open {
      transform: rotate(180deg);
    }
  }

  .specials-panel {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.35s ease;
    background: #fff;
    border-radius: 0 0 8px 8px;
    border: 1px solid ${({ theme }) => theme.colors.lighterBlue};
    border-top: none;

    &.open {
      max-height: 300px;
    }
  }

  .specials-inner {
    padding: 1.25rem 1.5rem;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .special-item {
    flex: 1;
    min-width: 220px;

    .special-day {
      font-weight: 700;
      font-size: 0.95rem;
      color: ${({ theme }) => theme.colors.tertiaryDark};
      margin-bottom: 0.2rem;
    }
    .special-desc {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.primaryDark};
      line-height: 1.4;
    }
    .special-note {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.secondaryDark};
      margin-top: 0.15rem;
      font-style: italic;
    }
  }

  /* Calendar Nav */
  .cal-nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1rem;
  }

  .cal-nav button {
    background: ${({ theme }) => theme.colors.tertiaryDark};
    color: #fff;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, transform 0.15s;

    &:hover {
      background: ${({ theme }) => theme.colors.bluePastel};
      transform: scale(1.1);
    }
    &:disabled {
      opacity: 0.3;
      cursor: default;
      transform: none;
    }
  }

  .cal-month-label {
    font-size: 1.3rem;
    font-weight: 700;
    min-width: 220px;
    text-align: center;
    color: ${({ theme }) => theme.colors.tertiaryDark};
  }

  /* Calendar Grid */
  .cal-grid {
    width: 100%;
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: 1px solid ${({ theme }) => theme.colors.lighterBlue};
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(58,86,102,0.07);
  }

  .cal-day-header {
    background: ${({ theme }) => theme.colors.tertiaryDark};
    color: #fff;
    text-align: center;
    padding: 0.55rem 0;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .cal-cell {
    min-height: 100px;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.lighterBlue};
    padding: 0.4rem 0.5rem;
    display: flex;
    flex-direction: column;
    transition: background 0.15s;

    &.empty {
      background: ${({ theme }) => theme.colors.background || '#FAF9F6'};
    }
    &.today {
      background: rgba(145,172,189,0.1);
    }
    &.has-event {
      cursor: pointer;
      &:hover {
        background: rgba(58,86,102,0.06);
      }
    }
    &.past-event {
      opacity: 0.5;
    }
  }

  .cal-cell-number {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.tertiaryDark};
    margin-bottom: 0.25rem;
  }

  .cal-cell.empty .cal-cell-number {
    color: transparent;
  }

  .cal-cell.today .cal-cell-number {
    background: ${({ theme }) => theme.colors.tertiaryDark};
    color: #fff;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  }

  .cal-event-pill {
    background: ${({ theme }) => theme.colors.tertiaryDark};
    color: #fff;
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.15rem 0.4rem;
    border-radius: 3px;
    margin-top: 0.15rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.3;
  }

  .cal-event-pill-time {
    font-size: 0.6rem;
    opacity: 0.85;
    font-weight: 400;
  }

  /* Detail panel */
  .cal-detail {
    margin-top: 1.25rem;
    max-width: 1100px;
    width: 100%;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.lighterBlue};
    border-radius: 10px;
    padding: 1.25rem 1.75rem;
    box-shadow: 0 2px 12px rgba(58,86,102,0.06);
  }

  .cal-detail-date {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${({ theme }) => theme.colors.secondaryDark};
    margin-bottom: 0.4rem;
  }

  .cal-detail-title {
    font-family: 'Aloja';
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.tertiaryDark};
    margin-bottom: 0.15rem;
  }

  .cal-detail-time {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.5rem 0.5rem 2rem;

    .cal-cell {
      min-height: 55px;
      padding: 0.2rem;
    }

    .cal-event-pill {
      font-size: 0.55rem;
      padding: 0.1rem 0.25rem;
    }

    .cal-event-pill-time {
      display: none;
    }

    .specials-inner {
      flex-direction: column;
      gap: 1rem;
    }

    .cal-detail {
      margin: 1rem 0.25rem 0;
      padding: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .cal-cell {
      min-height: 44px;
    }
    .cal-event-pill {
      display: none;
    }
    /* Show just a dot on very small screens */
    .cal-cell.has-event::after {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.tertiaryDark};
      margin-top: auto;
      align-self: center;
    }
    .cal-cell.past-event::after {
      background: ${({ theme }) => theme.colors.secondaryDark};
    }
  }
`;

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY_HEADERS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const MIN_DATE = new Date(2026, 1, 1);
const MAX_DATE = new Date(2027, 11, 1);

function EventCalendar() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [specialsOpen, setSpecialsOpen] = useState(false);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const goBack = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
  };
  const goForward = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
  };

  const canGoBack = new Date(year, month, 1) > MIN_DATE;
  const canGoForward = new Date(year, month, 1) < MAX_DATE;

  const todayStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;

  const getEventsForDay = (day) => {
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    return CALENDAR_EVENTS.filter(e => e.date === dateStr);
  };

  const cells = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    cells.push(<div key={`e${i}`} className="cal-cell empty"><span className="cal-cell-number">&nbsp;</span></div>);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dayEvents = getEventsForDay(d);
    const isToday = dateStr === todayStr;
    const isPast = new Date(dateStr) < new Date(todayStr);
    const hasEvent = dayEvents.length > 0;

    let cls = 'cal-cell';
    if (isToday) cls += ' today';
    if (hasEvent) cls += ' has-event';
    if (hasEvent && isPast) cls += ' past-event';

    cells.push(
      <div key={d} className={cls} onClick={() => hasEvent && setSelectedEvent({ events: dayEvents, date: dateStr })}>
        <span className="cal-cell-number">{d}</span>
        {dayEvents.map((ev, i) => (
          <div key={i} className="cal-event-pill">
            {ev.title}
            {ev.time && <span className="cal-event-pill-time"> · {ev.time}</span>}
          </div>
        ))}
      </div>
    );
  }

  const formatDetailDate = (dateStr) => {
    const d = new Date(dateStr + 'T12:00:00');
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <CalendarSection>
      <h2>Events</h2>
      <div className="cal-subtitle">Laurino&apos;s Tavern — Brewster, Cape Cod</div>

      <div className="specials-toggle">
        <button className="specials-btn" onClick={() => setSpecialsOpen(o => !o)}>
          <span><span style={{ filter: 'brightness(0) invert(1)' }}>🍕</span> Weekly Specials — Now through May 1st</span>
          <span className={`arrow ${specialsOpen ? 'open' : ''}`}>▼</span>
        </button>
        <div className={`specials-panel ${specialsOpen ? 'open' : ''}`}>
          <div className="specials-inner">
            <div className="special-item">
              <div className="special-day">Tuesday — Locals Night</div>
              <div className="special-desc">Buy a Large Pizza, Get a Small Half Off</div>
              <div className="special-note">Every Tuesday through May 1, 2026</div>
            </div>
            <div className="special-item">
              <div className="special-day">Wednesday &amp; Thursday — Early Bird</div>
              <div className="special-desc">$15 Entrees from 4–6 PM</div>
              <div className="special-note">Every Wed &amp; Thu through May 1, 2026</div>
            </div>
          </div>
        </div>
      </div>

      <div className="cal-nav">
        <button onClick={goBack} disabled={!canGoBack}>&larr;</button>
        <div className="cal-month-label">{MONTH_NAMES[month]} {year}</div>
        <button onClick={goForward} disabled={!canGoForward}>&rarr;</button>
      </div>

      <div className="cal-grid">
        {DAY_HEADERS.map(d => <div key={d} className="cal-day-header">{d}</div>)}
        {cells}
      </div>

      {selectedEvent && (
        <div className="cal-detail">
          <div className="cal-detail-date">{formatDetailDate(selectedEvent.date)}</div>
          {selectedEvent.events.map((ev, i) => (
            <div key={i} style={{ marginBottom: i < selectedEvent.events.length - 1 ? '0.5rem' : 0 }}>
              <div className="cal-detail-title">{ev.title}</div>
              {ev.time && <div className="cal-detail-time">{ev.time}</div>}
            </div>
          ))}
        </div>
      )}
    </CalendarSection>
  );
}

// ABOUT SLIDESHOW
const SLIDESHOW_IMAGES = [
  { src: '/laurinos-6.jpg', alt: 'Laurino\'s Tavern' },
  { src: '/laurinos-1.jpg', alt: 'Laurino\'s Tavern' },
  { src: '/laurinos-2.jpg', alt: 'Laurino\'s Tavern' },
  { src: '/laurinos-3.jpg', alt: 'Laurino\'s Tavern' },
  { src: '/laurinos-4.jpg', alt: 'Laurino\'s Tavern' },
  { src: '/laurinos-7.jpg', alt: 'Laurino\'s Tavern' },
  { src: '/bar.jpg', alt: 'Laurino\'s Tavern Bar' },
  { src: '/laurinos 11.jpg', alt: 'Laurino\'s Tavern' },
];

function AboutSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(s => (s + 1) % SLIDESHOW_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(s => (s + 1) % SLIDESHOW_IMAGES.length);

  return (
    <div className="slideshow-wrapper">
      <div className="slideshow-subtitle">Laurino&apos;s Through the Years</div>
      <div className="slideshow-container" onClick={nextSlide}>
        <img
          src={SLIDESHOW_IMAGES[currentSlide].src}
          alt={SLIDESHOW_IMAGES[currentSlide].alt}
        />
        <div className="slide-overlay">
          <span className="slide-hint">Click to advance →</span>
          <span className="slide-counter">{currentSlide + 1} / {SLIDESHOW_IMAGES.length}</span>
        </div>
      </div>
      <div className="slide-dots">
        {SLIDESHOW_IMAGES.map((_, i) => (
          <button
            key={i}
            className={`slide-dot ${i === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

// Simple loading fallback component
const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    Loading...
  </div>
);

// This component handles the scroll functionality with useSearchParams
const ScrollHandler = ({ children }) => {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Check if we should scroll to a section based on URL param
    const scrollTo = searchParams.get('scrollTo');
    
    if (scrollTo) {
      // Add a small delay to ensure the page is fully loaded
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [searchParams]);

  return children;
};

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ScrollHandler>
        <>
          <HeroSection>
          {/* The background image in the DOM */}
          <img
            className="background-image"
            src="/Capecodmass.jpg"
            alt="Cape Cod ocean background"
          />
          {/* A dark overlay to ensure text is legible */}
          <div className="overlay" />

          {/* Your main hero content */}
          <div className="hero-content">
            <h1>Welcome to Laurino&apos;s Tavern</h1>
            <p>Serving up local favorites on Cape Cod for generations</p>
            <a href="https://www.clover.com/online-ordering/laurinos-tavern-brewster" className="hero-cta">Order Now</a>
          </div>
        </HeroSection>

       
          <AboutSection id="about">
            <div className="about-content">
              <h2>About Laurino&apos;s</h2>
              <p>
                Rooted in Italian tradition and built on Cape Cod, Laurino&apos;s Tavern has served 
                fresh seafood, hearty comfort food, and some of the best pizza on the Cape for decades.
              </p>
              <p>
                Whether you&apos;re here for a casual lunch, a family dinner, or a 
                celebration, our friendly staff and cozy tavern vibes make every visit special.
              </p>
            </div>
            <AboutSlideshow />
          </AboutSection>

          <CarouselSection>
          <h2>Try Our Favorites</h2>
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
              <h3>House Made Pan Pizza</h3>
              <img src="/Pizza.png" alt="Pizza" />
            </div>
            <div className="food-item">
              <h3>Chicken Finger Platter</h3>
              <img src="/ChickenFingers.jpg" alt="Battered Chicken Finger Platter" />
            </div>
            <div className="food-item">
              <h3>Fish &amp; Chips</h3>
              <img src="/FishandChips.jpg" alt="Fish &amp; Chips" />
            </div>
            <div className="food-item">
              <h3>8oz Signature Burger</h3>
              <img src="/Burger.jpg" alt="Burgers"  />
            </div>
            <div className="food-item">
              <h3>Wellfleet Oysters on the Half Shell</h3>
              <img src="/Oysters.jpg" alt="Oysters" />
            </div>
          </div>
          <div className="order-cta">
            <a href="https://www.clover.com/online-ordering/laurinos-tavern-brewster" className="order-now-btn">Order Now</a>
          </div>
        </CarouselSection>

          <EventCalendar />

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
              <a href="/components/catering" className="cta-button">
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


        <Section>
          <h2>Our Merch</h2>
          <p>Check out our official merchandise below!</p>

          {/* CTA button linking to "/store" */}
          <Link href="../components/laurinosstore/Store">
            <CTAButton>Go to Store</CTAButton>
          </Link>

          <div className="merch-grid">
            {/* Hat */}
            <div className="merch-item">
            <Link href="../components/laurinosstore/Store?category=Gear">
              <Image
                src="/Gear.svg"
                alt="Gear"
                width={275}
                height={275}
                style={{
                  objectFit: 'contain',
                  margin: '0 auto',
                }}
              />
               </Link>
              <span>Gear</span>
            </div>

            {/* T-Shirt */}

           
            <div className="merch-item">
            <Link href="../components/laurinosstore/Store?category=T-Shirts">
              <Image
                src="/Tshirts.svg"
                alt="T-Shirts"
                width={275}
                height={275}
                style={{
                  objectFit: 'contain',
                  margin: '0 auto',
                }}
              />
               </Link>
              <span>T-Shirts</span>
            </div>

            {/* Sweatshirt */}
            <div className="merch-item">
            <Link href="../components/laurinosstore/Store?category=Sweatshirts">
              <Image
                src="/Hoodiefront.svg"
                alt="Sweatshirts"
                width={275}
                height={275}
                style={{
                  objectFit: 'contain',
                  margin: '0 auto',
                }}
              />
              </Link>
              <span>Sweatshirts</span>
            </div>

            {/* Gear */}
            <div className="merch-item">
            <Link href="../components/laurinosstore/Store?category=Hats">
              <Image
                src="/Hats.svg"
                alt="Hats"
                width={275}
                height={275}
                style={{
                  objectFit: 'contain',
                  margin: '0 auto',
                }}
              />
                 </Link>
              <span>Hats</span>
            </div>
          </div>
        </Section>


          <WebcamSection>
      <h2>Live Webcam</h2>
      <p>Check out what's happening locally!</p>
      <div className="webcam-wrapper">
        <iframe
          src="https://streampros.net/player/live/rvm2php9"
          allowFullScreen
          title="Live Stream"
        />
      </div>
    </WebcamSection>
        </>
      </ScrollHandler>
    </Suspense>
  );
}