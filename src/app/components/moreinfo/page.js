"use client"; // Only if using Next.js 13 App Router
import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

export default function more() {
  const [showNotification, setShowNotification] = useState(false);

  // Form submission handler (reusing your emailjs config)
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zugs63p",
        "template_1sxghbk",
        e.target,
        "WvCJtqwLGnQLIy2c1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowNotification(true);
        },
        (error) => {
          console.log(error.text);
          // Optionally handle the error for the user
        }
      );
  };

  return (
    <MoreInfoSection>
      <HeaderWrapper>
        <h1>Request More Information</h1>
        <p>
          Have questions, special requests, or want to learn more about our services?
          Fill out the form below, and we’ll get back to you shortly.
        </p>
      </HeaderWrapper>

      <FormContainer onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="eventType">Event Type</label>
          <select id="eventType" name="eventType" required>
            <option value="">Select an event type</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Family Gathering">Family Gathering</option>
            <option value="Family Gathering">Other</option>

          </select>
        </FormGroup>

        <FormGroup>
          <label htmlFor="eventDate">Event Date</label>
          <input type="date" id="eventDate" name="eventDate" required />
        </FormGroup>

        <FormGroup>
          <label htmlFor="guests">Number of Guests</label>
          <input type="number" id="guests" name="guests" min="1" required />
        </FormGroup>

        <FormGroup>
          <label htmlFor="requests">
            Special Requests or Dietary Preferences
          </label>
          <textarea
            id="requests"
            name="requests"
            rows="4"
            placeholder="Any special requests or dietary preferences"
          />
        </FormGroup>

        <SubmitButton type="submit">Submit</SubmitButton>

        {showNotification && (
          <Notification>
            Thank you! We’ve received your request and will be in touch soon.
          </Notification>
        )}
      </FormContainer>
    </MoreInfoSection>
  );
}

/* ------------------ Styled Components ------------------ */

const MoreInfoSection = styled.section`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primaryDark};
  min-height: 80vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeaderWrapper = styled.div`
  max-width: 700px;
  margin-bottom: 3rem;

  h1 {
    font-family: "Aloja", sans-serif;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

const FormContainer = styled.form`
  background: ${({ theme }) => theme.colors.accent};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  text-align: left;

  h2 {
    font-family: "Aloja", sans-serif;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input,
  select,
  textarea {
    border: 1px solid ${({ theme }) => theme.colors.secondaryDark};
    border-radius: 4px;
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
  }

  textarea {
    resize: vertical; /* allow user to resize up/down */
  }
`;

const SubmitButton = styled.button`
  display: block;
  margin: 1.5rem auto 0;
  background: ${({ theme }) => theme.colors.primaryDark};
  color: #fff;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

const Notification = styled.p`
  background: ${({ theme }) => theme.colors.lighterBlue};
  color: ${({ theme }) => theme.colors.primaryLight};
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  text-align: center;
`;
