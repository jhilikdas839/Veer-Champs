import React, { useState } from "react";
import Hero from "../assets/Hero.png";

function Authentication({ onBack, onContinue }) {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleMobileChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
      setMobileNumber(value);
    }
  };

  const handleContinue = () => {
    if (mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    onContinue();
  };

  return (
    <div className="auth-page">

      {/* =====================================
          BACKGROUND GLOW
      ===================================== */}

      <div className="auth-glow auth-glow-blue"></div>

      <div className="auth-glow auth-glow-purple"></div>


      {/* =====================================
          FLOATING DICE
      ===================================== */}

      <div className="auth-floating-dice auth-dice-one">
        ⚄
      </div>

      <div className="auth-floating-dice auth-dice-two">
        ⚂
      </div>

      <div className="auth-floating-dice auth-dice-three">
        ⚅
      </div>


      {/* =====================================
          HEADER
      ===================================== */}

      <header className="auth-header">

        {/* Back Button */}

        <button
          type="button"
          className="back-button"
          aria-label="Go back"
          onClick={onBack}
        >
          <span>←</span>
        </button>


        {/* Progress */}

        <div className="auth-progress">

          {/* Mobile */}

          <div className="progress-step active">

            <div className="progress-dot"></div>

            <span>
              Mobile
            </span>

          </div>


          <div className="progress-line"></div>


          {/* OTP */}

          <div className="progress-step">

            <div className="progress-dot"></div>

            <span>
              OTP
            </span>

          </div>


          <div className="progress-line"></div>


          {/* Profile */}

          <div className="progress-step">

            <div className="progress-dot"></div>

            <span>
              Profile
            </span>

          </div>


          <div className="progress-line"></div>


          {/* Done */}

          <div className="progress-step">

            <div className="progress-dot"></div>

            <span>
              Done
            </span>

          </div>

        </div>


        {/* Help */}

        <button
          type="button"
          className="help-button"
        >
          Need Help?
        </button>

      </header>


      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <main className="auth-content">


        {/* =================================
            HEADING
        ================================= */}

        <section className="auth-heading">

          <h1>
            Let’s Play
            <br />

            <span>Ludo</span> Together!
          </h1>

          <p>
            Enter your mobile number to
            <br className="desktop-break" />
            get started
          </p>

        </section>


        {/* =================================
            MOBILE NUMBER
        ================================= */}

        <section className="mobile-input-section">

          <label htmlFor="mobile-number">
            Mobile Number
          </label>


          <div className="mobile-input-box">

            {/* Country */}

            <button
              type="button"
              className="country-selector"
            >

              <span className="india-flag">
                🇮🇳
              </span>

              <span className="country-arrow">
                ⌄
              </span>

            </button>


            {/* Country Code */}

            <div className="country-code">
              +91
            </div>


            {/* Divider */}

            <div className="input-divider"></div>


            {/* Mobile Input */}

            <input
              id="mobile-number"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={handleMobileChange}
              maxLength={10}
            />

          </div>

        </section>


        {/* =================================
            CONTINUE BUTTON
        ================================= */}

        <button
          type="button"
          className="continue-button"
          onClick={handleContinue}
        >

          <span>
            Continue
          </span>

          <strong>
            →
          </strong>

        </button>


        {/* =================================
            OTP MESSAGE
        ================================= */}

        <div className="otp-message">

          <span className="lock-icon">
            🔒
          </span>

          <span>
            We’ll send you an OTP to verify your number
          </span>

        </div>


        {/* =================================
            BENEFITS
        ================================= */}

        <section className="auth-benefits">


          {/* Safe & Secure */}

          <div className="benefit">

            <div className="benefit-icon shield-icon">
              🛡
            </div>

            <p>
              Safe &amp;
              <br />
              Secure
            </p>

          </div>


          {/* Quick Login */}

          <div className="benefit">

            <div className="benefit-icon lightning-icon">
              ⚡
            </div>

            <p>
              Quick
              <br />
              Login
            </p>

          </div>


          {/* Players */}

          <div className="benefit">

            <div className="benefit-icon players-icon">
              👥
            </div>

            <p>
              Join Millions
              <br />
              of Players
            </p>

          </div>

        </section>

      </main>


      {/* =====================================
          HERO
      ===================================== */}

      <section className="auth-hero">

        <div className="hero-light"></div>

        <img
          src={Hero}
          alt="Ludo Game Board"
          className="auth-hero-image"
        />

      </section>


      {/* =====================================
          BOTTOM BRANDING
      ===================================== */}

      <div className="auth-bottom-brand">

        <span></span>

        <p>
          PLAY&nbsp; • &nbsp;CONNECT&nbsp; • &nbsp;WIN
        </p>

        <span></span>

      </div>

    </div>
  );
}

export default Authentication;