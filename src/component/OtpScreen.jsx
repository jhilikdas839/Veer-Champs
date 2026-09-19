import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Hero from "../assets/Hero.png";

function OtpScreen({ onBack, onContinue }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (value, index) => {
    // Sirf number allow
    if (!/^\d?$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Next box par automatically focus
    if (value && index < 5) {
      const nextInput = document.getElementById(
        `otp-${index + 1}`
      );

      if (nextInput) {
        nextInput.focus();
      }
    }
  };


  const handleKeyDown = (event, index) => {
    // Backspace par previous box
    if (
      event.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      const previousInput = document.getElementById(
        `otp-${index - 1}`
      );

      if (previousInput) {
        previousInput.focus();
      }
    }
  };


  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      alert("Please enter the 6-digit OTP.");
      return;
    }

    // OTP verify hone ke baad Profile page
    onContinue();
  };


  return (
    <div className="otp-page">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="otp-glow"></div>


      {/* Floating Dice */}

      <div className="otp-floating-dice otp-dice-one">
        ⚄
      </div>

      <div className="otp-floating-dice otp-dice-two">
        ⚂
      </div>

      <div className="otp-floating-dice otp-dice-three">
        ⚅
      </div>


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="otp-header">

        {/* Back Button */}

        <button
          type="button"
          className="otp-back-button"
          onClick={onBack}
          aria-label="Go back"
        >
          <span>
            ←
          </span>
        </button>


        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="otp-progress">

          {/* Mobile */}

          <div className="otp-progress-step completed">

            <div className="otp-progress-dot">
              ✓
            </div>

            <span>
              Mobile
            </span>

          </div>


          <div className="otp-progress-line active"></div>


          {/* OTP */}

          <div className="otp-progress-step active">

            <div className="otp-progress-dot">
              •
            </div>

            <span>
              OTP
            </span>

          </div>


          <div className="otp-progress-line"></div>


          {/* Profile */}

          <div className="otp-progress-step">

            <div className="otp-progress-dot"></div>

            <span>
              Profile
            </span>

          </div>


          <div className="otp-progress-line"></div>


          {/* Done */}

          <div className="otp-progress-step">

            <div className="otp-progress-dot"></div>

            <span>
              Done
            </span>

          </div>

        </div>


        {/* Help */}

        <button
          type="button"
          className="otp-help-button"
        >
          Need Help?
        </button>

      </header>


      {/* =================================================
          MAIN OTP CONTENT
      ================================================= */}

      <main className="otp-content">


        {/* =================================================
            LOGO
        ================================================= */}

        <div className="otp-logo-container">

          <img
            src={Logo}
            alt="Ludo Logo"
            className="otp-logo"
          />

        </div>


        {/* =================================================
            HEADING
        ================================================= */}

        <section className="otp-heading">

          <h1>
            Verify Your <span>OTP</span>
          </h1>

          <p>
            We’ve sent a 6-digit code to
          </p>

          <strong>
            +91 98765 43210
          </strong>

        </section>


        {/* =================================================
            OTP INPUTS
        ================================================= */}

        <div className="otp-inputs">

          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              className="otp-input"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={1}
              value={digit}
              onChange={(event) =>
                handleOtpChange(
                  event.target.value,
                  index
                )
              }
              onKeyDown={(event) =>
                handleKeyDown(
                  event,
                  index
                )
              }
            />
          ))}

        </div>


        {/* =================================================
            VERIFY BUTTON
        ================================================= */}

        <button
          type="button"
          className="verify-button"
          onClick={handleVerify}
        >

          <span>
            Verify &amp; Continue
          </span>

          <strong>
            →
          </strong>

        </button>


        {/* =================================================
            RESEND OTP
        ================================================= */}

        <div className="resend-section">

          <p>
            Didn’t receive the code?
          </p>

          <button
            type="button"
            className="resend-button"
          >
            Resend OTP in 00:25
          </button>

        </div>

      </main>


      {/* =================================================
          HERO
      ================================================= */}

      <section className="otp-hero">

        <div className="otp-hero-glow"></div>

        <img
          src={Hero}
          alt="Ludo Game Board"
          className="otp-hero-image"
        />

      </section>

    </div>
  );
}

export default OtpScreen;