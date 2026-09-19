import React from "react";
import Logo from "../assets/logo.png";
import Hero from "../assets/Hero.png";

function SplashScreen({ onGetStarted }) {
  return (
    <div className="splash-screen">

      {/* =====================================
          BACKGROUND GLOW
      ===================================== */}

      <div className="glow glow-blue"></div>
      <div className="glow glow-gold"></div>


      {/* =====================================
          FLOATING DICE
      ===================================== */}

      <div className="floating-dice dice-one">
        ⚄
      </div>

      <div className="floating-dice dice-two">
        ⚂
      </div>

      <div className="floating-dice dice-three">
        ⚅
      </div>


      {/* =====================================
          LUDO LOGO
      ===================================== */}

      <div className="logo-container">

        <img
          src={Logo}
          alt="Ludo Logo"
          className="ludo-logo"
        />

      </div>


      {/* =====================================
          HERO
          Board + Pawns + Dice
      ===================================== */}

      <div className="hero-container">

        <img
          src={Hero}
          alt="Ludo Game Board"
          className="hero-image"
        />

      </div>


      {/* =====================================
          FEATURES
      ===================================== */}

      <div className="features">

        {/* Play */}

        <div className="feature">

          <div className="feature-icon play-icon">
            ϟ
          </div>

          <strong>
            Play
          </strong>

          <span>
            Your Way
          </span>

        </div>


        {/* Challenge */}

        <div className="feature">

          <div className="feature-icon friends-icon">
            ♟
          </div>

          <strong>
            Challenge
          </strong>

          <span>
            Friends
          </span>

        </div>


        {/* Win */}

        <div className="feature">

          <div className="feature-icon win-icon">
            ♛
          </div>

          <strong>
            Win
          </strong>

          <span>
            Rewards
          </span>

        </div>


        {/* Safe */}

        <div className="feature">

          <div className="feature-icon safe-icon">
            ✓
          </div>

          <strong>
            Safe
          </strong>

          <span>
            &amp; Secure
          </span>

        </div>

      </div>


      {/* =====================================
          GET STARTED BUTTON
      ===================================== */}

      <button
        className="get-started-btn"
        onClick={onGetStarted}
      >

        <span>
          Get Started
        </span>

        <strong>
          →
        </strong>

      </button>


      {/* =====================================
          BOTTOM CAPTION
      ===================================== */}

      <div className="bottom-caption">

        <span></span>

        <p>
          Play Ludo. Make Memories.
        </p>

        <span></span>

      </div>

    </div>
  );
}

export default SplashScreen;