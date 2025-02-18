"use client";
import { useState, useRef } from "react";
import styled from "styled-components";

const GiftCardsContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.colors.tertiaryDark};
  min-height: 80vh;
`;




const Card = styled.div`
  background: #fff;
  border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  border-radius: 8px;
  max-width: 700px;
  width: 100%;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  text-align: center;
`;

/**
 * If you want content offset upward,
 * otherwise remove or adjust margin-top
 */
const Boundbox = styled.div`
  /* Default for mobile: no negative margin */
  margin-top: 0;

  /* On screens above 992px, apply the offset */
  @media (min-width: 992px) {
    margin-top: -18rem;
  }
`;


const HeaderImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin: 0 auto 1rem;
  display: block;
  border: none;
   @media (max-width: 768px) {
  display: none;
}
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 0.5rem;
  font-family: "Aloja";
  margin-top: 0;

  @media (min-width: 992px) {
    margin-top: -8rem;
  }
`;
const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  max-width: 600px;
  margin: 0.5rem auto 1.5rem;
  line-height: 1.4;

    @media (max-width: 768px) {
 margin-top: 2rem;
`;

const Subtitle2 = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  max-width: 600px;
  margin: 0.5rem auto 1.5rem;
  line-height: 1.4;
`;

/** Recipient form **/
const RecipientForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  label {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    span {
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: ${({ theme }) => theme.colors.primaryDark};
    }

    input,
    textarea {
      border: 1px solid #ccc;
      padding: 0.5rem;
      border-radius: 4px;
      font-size: 1rem;
    }

    textarea {
      min-height: 80px;
      resize: vertical; /* user can resize up/down */
    }
  }
`;

/** Scheduling section **/
const SendTimeContainer = styled.div`
  background: ${({ theme }) => theme.colors.accent};
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 1.5rem;
  text-align: left;

  .radio-options {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;

    label {
      display: flex;
      gap: 0.25rem;
      align-items: center;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.primaryDark};
      font-weight: 500;
      cursor: pointer;
    }
  }

  .schedule-fields {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;

    input[type="date"],
    input[type="time"] {
      border: 1px solid #ccc;
      padding: 0.5rem;
      border-radius: 4px;
      font-size: 1rem;
    }
  }
`;

/**
 * The AMOUNT section with press-and-hold + typed input,
 * plus an extension box to the right containing "$".
 */
const AmountContainer = styled.div`
  display: inline-flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  gap: 0;

  .button {
    background: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.primaryLight};
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 6px;
    user-select: none;
    padding: 0.5rem 1rem;
    &:hover {
      background: ${({ theme }) => theme.colors.lighterBlue};
    }
  }

  /* Main box for the numeric input */
  .amount-box {
    display: inline-flex;
    align-items: center;
    padding: 0 1rem;
  }

  .amount-input {
    width: 60px;
    font-size: 1.5rem;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.primaryDark};
    background: #fff;
    padding: 0.25rem 0.5rem;
    margin: 0 0.5rem;

    /* Hide numeric spinner arrows */
    -moz-appearance: textfield;
  }
  .amount-input::-webkit-outer-spin-button,
  .amount-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* The extension box showing just "$" */
  .extension-box {
    background: ${({ theme }) => theme.colors.backround};
    opacity: 0.85;
    border-radius: 0 8px 8px 0;
    display: flex;
    align-items: center;
    padding: 0 0.75rem;
    margin-left: -10px; 
    border-left: 1px solid #ccc;

    .dollar-icon {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`;

const AddToCartButton = styled.button`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryLight};
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  margin-top: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.lighterBlue};
  }
`;

export default function GiftCardsPage() {
  /************************
   * STATE
   ************************/
  const [amount, setAmount] = useState(50);

  // Recipient details
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [personalMessage, setPersonalMessage] = useState("");

  // Scheduling
  const [sendOption, setSendOption] = useState("now");
  const [sendDate, setSendDate] = useState("");
  const [sendTime, setSendTime] = useState("");

  // For press-and-hold logic
  const incrementIntervalRef = useRef(null);
  const decrementIntervalRef = useRef(null);

  /************************
   * Press-and-hold increment
   ************************/
  const startIncrement = () => {
    incrementIntervalRef.current = setInterval(() => {
      setAmount((prev) => prev + 1);
    }, 150);
  };
  const stopIncrement = () => clearInterval(incrementIntervalRef.current);

  /************************
   * Press-and-hold decrement
   ************************/
  const startDecrement = () => {
    decrementIntervalRef.current = setInterval(() => {
      setAmount((prev) => (prev > 1 ? prev - 1 : 1));
    }, 150);
  };
  const stopDecrement = () => clearInterval(decrementIntervalRef.current);

  /************************
   * Typed amount
   ************************/
  const handleAmountChange = (e) => {
    const val = e.target.value.trim();
    const numericVal = Number.parseInt(val, 10);
    if (!Number.isNaN(numericVal) && numericVal >= 1) {
      setAmount(numericVal);
    } else if (val === "") {
      setAmount("");
    } else {
      setAmount(1);
    }
  };

  /************************
   * Radio scheduling
   ************************/
  const handleSendOptionChange = (e) => setSendOption(e.target.value);

  /************************
   * Validation & Add to Cart
   ************************/
  const handleAddToCart = () => {
    // 1) Name check
    if (!recipientName.trim()) {
      alert("Please enter a recipient name.");
      return;
    }
    // 2) Email or phone
    if (!recipientEmail.trim() && !recipientPhone.trim()) {
      alert("Please provide either an email or a phone number.");
      return;
    }
    // 3) If schedule is chosen, require date/time
    if (sendOption === "schedule") {
      if (!sendDate) {
        alert("Please select a date for scheduling.");
        return;
      }
      if (!sendTime) {
        alert("Please select a time for scheduling.");
        return;
      }
    }
    // 4) Check amount
    const numericAmt = Number.parseInt(amount, 10);
    if (Number.isNaN(numericAmt) || numericAmt < 1) {
      alert("Please enter a valid amount (at least $1).");
      return;
    }

    // All good
    alert(
      `Gift card added!\nName: ${recipientName}\nEmail: ${recipientEmail}\nPhone: ${recipientPhone}\nMessage: "${personalMessage}"\nAmount: $${numericAmt}\nSend: ${
        sendOption === "now"
          ? "Now"
          : `On ${sendDate} at ${sendTime}`
      }`
    );
  };

  return (
    <GiftCardsContainer>
      <Card>
        <Boundbox>
       
          <HeaderImage src="/LaurinosLogo.png" alt="Gift Cards Display" />
         
          
          <Title>Gift Cards</Title>
         
          <Subtitle>
            Treat your loved ones to an unforgettable dining experience! 
            Choose an amount, enter recipient details, and schedule (or send now).
          </Subtitle>

          {/* Recipient info form */}
          <RecipientForm>
            <label>
              <span>Recipient Name *</span>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="e.g., John Smith"
              />
            </label>

            <Subtitle2>Provide Email or Phone</Subtitle2>

            <label>
              <span>Recipient Email</span>
              <input
                type="email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                placeholder="e.g., john@example.com"
              />
            </label>

            <label>
              <span>Recipient Phone Number</span>
              <input
                type="tel"
                value={recipientPhone}
                onChange={(e) => setRecipientPhone(e.target.value)}
                placeholder="e.g., 508-896-6135"
              />
            </label>

            <label>
              <span>Personal Message (optional)</span>
              <textarea
                rows="3"
                value={personalMessage}
                onChange={(e) => setPersonalMessage(e.target.value)}
                placeholder="Type a note to the recipient..."
              />
            </label>
          </RecipientForm>

          {/* Send time container */}
          <SendTimeContainer>
            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="sendTime"
                  value="now"
                  checked={sendOption === "now"}
                  onChange={handleSendOptionChange}
                />
                Send Now
              </label>
              <label>
                <input
                  type="radio"
                  name="sendTime"
                  value="schedule"
                  checked={sendOption === "schedule"}
                  onChange={handleSendOptionChange}
                />
                Schedule
              </label>
            </div>

            {sendOption === "schedule" && (
              <div className="schedule-fields">
                <label>
                  Date:
                  <input
                    type="date"
                    value={sendDate}
                    onChange={(e) => setSendDate(e.target.value)}
                  />
                </label>
                <label>
                  Time:
                  <input
                    type="time"
                    value={sendTime}
                    onChange={(e) => setSendTime(e.target.value)}
                  />
                </label>
              </div>
            )}
          </SendTimeContainer>

          {/* Amount + extension box */}
          <AmountContainer>
            <button
              type="button"
              className="button"
              onMouseDown={startDecrement}
              onMouseUp={stopDecrement}
              onMouseLeave={stopDecrement}
            >
              –
            </button>

            <div className="amount-box">
              <input
                className="amount-input"
                type="number"
                min="1"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>

            <div className="extension-box">
              <span className="dollar-icon">$</span>
            </div>

            <button
              type="button"
              className="button"
              onMouseDown={startIncrement}
              onMouseUp={stopIncrement}
              onMouseLeave={stopDecrement}
            >
              +
            </button>
          </AmountContainer>

          <AddToCartButton type="button" onClick={handleAddToCart}>
            Add to Cart
          </AddToCartButton>
        </Boundbox>
      </Card>
    </GiftCardsContainer>
  );
}
