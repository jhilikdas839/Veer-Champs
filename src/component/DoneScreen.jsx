import React from "react";

import Logo from "../assets/logo.png";
import Hero from "../assets/Hero.png";

function DoneScreen({
  username = "jhilikplays",
  selectedAvatar = 1,
  onBack,
  onStartPlaying,
}) {
  // =========================================
  // AVATARS
  // =========================================

  const avatars = [
    "👦",
    "👧",
    "😎",
    "👩",
    "🐼",
    "🐱",
  ];

  const currentAvatar =
    avatars[selectedAvatar] || "👧";


  return (
    <div className="done-page">

      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div className="done-glow done-glow-blue"></div>

      <div className="done-glow done-glow-purple"></div>


      {/* =================================================
          FLOATING DICE
      ================================================= */}

      <div className="done-floating-dice done-dice-one">
        ⚄
      </div>

      <div className="done-floating-dice done-dice-two">
        ⚂
      </div>

      <div className="done-floating-dice done-dice-three">
        ⚅
      </div>


      {/* =================================================
          DECORATIVE CROWN
      ================================================= */}

      <div className="done-crown">
        ♕
      </div>


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="done-header">


        {/* ===============================================
            BACK BUTTON
        =============================================== */}

        <button
          type="button"
          className="done-back-button"
          onClick={onBack}
          aria-label="Go back"
        >
          <span>
            ←
          </span>
        </button>


        {/* ===============================================
            PROGRESS
        =============================================== */}

        <div className="done-progress">


          {/* MOBILE */}

          <div className="done-progress-step completed">

            <div className="done-progress-dot">
              ✓
            </div>

            <span>
              Mobile
            </span>

          </div>


          <div className="done-progress-line completed-line"></div>


          {/* OTP */}

          <div className="done-progress-step completed">

            <div className="done-progress-dot">
              ✓
            </div>

            <span>
              OTP
            </span>

          </div>


          <div className="done-progress-line completed-line"></div>


          {/* PROFILE */}

          <div className="done-progress-step completed">

            <div className="done-progress-dot">
              ✓
            </div>

            <span>
              Profile
            </span>

          </div>


          <div className="done-progress-line active-line"></div>


          {/* DONE */}

          <div className="done-progress-step active">

            <div className="done-progress-dot">
              ✓
            </div>

            <span>
              Done
            </span>

          </div>

        </div>


        {/* ===============================================
            HELP
        =============================================== */}

        <button
          type="button"
          className="done-help-button"
        >
          Need Help?
        </button>

      </header>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main className="done-content">


        {/* =================================================
            LUDO LOGO
        ================================================= */}

        <div className="done-logo-container">

          <img
            src={Logo}
            alt="Ludo Logo"
            className="done-logo"
          />

        </div>


        {/* =================================================
            HEADING
        ================================================= */}

        <section className="done-heading">

          <h1>
            You’re All <span>Set!</span>
          </h1>

          <p>
            Welcome to the Ludo Family 🎉
          </p>

        </section>


        {/* =================================================
            AVATAR
        ================================================= */}

        <div className="done-avatar-wrapper">

          <div className="done-avatar-glow"></div>

          <div className="done-avatar">

            <span>
              {currentAvatar}
            </span>

          </div>


          {/* Green check */}

          <div className="done-avatar-check">
            ✓
          </div>

        </div>


        {/* =================================================
            USERNAME
        ================================================= */}

        <div className="done-username">

          <h2>
            {username || "jhilikplays"}
          </h2>

          <p>
            Ready to Roll!
          </p>

        </div>


        {/* =================================================
            FEATURES
        ================================================= */}

        <section className="done-features">


          {/* ===============================================
              FRIENDS
          =============================================== */}

          <div className="done-feature">

            <div className="done-feature-icon purple">
              👥
            </div>

            <p>
              Play
              <br />
              with Friends
            </p>

          </div>


          {/* ===============================================
              TOURNAMENT
          =============================================== */}

          <div className="done-feature">

            <div className="done-feature-icon yellow">
              🏆
            </div>

            <p>
              Join
              <br />
              Tournaments
            </p>

          </div>


          {/* ===============================================
              REWARDS
          =============================================== */}

          <div className="done-feature">

            <div className="done-feature-icon green">
              🎮
            </div>

            <p>
              Win
              <br />
              Exciting Rewards
            </p>

          </div>

        </section>


        {/* =================================================
            START PLAYING
        ================================================= */}

        <button
          type="button"
          className="done-start-button"
          onClick={onStartPlaying}
        >

          <span>
            Start Playing
          </span>

          <strong>
            →
          </strong>

        </button>


        {/* =================================================
            BOTTOM TEXT
        ================================================= */}

        <div className="done-bottom-text">

          <span></span>

          <p>
            More than a Game
          </p>

          <span></span>

        </div>

      </main>


      {/* =================================================
          LUDO BOARD / HERO
      ================================================= */}

      <section className="done-hero">

        <div className="done-hero-glow"></div>

        <img
          src={Hero}
          alt="Ludo Game Board"
          className="done-hero-image"
        />

      </section>

    </div>
  );
}

export default DoneScreen;