import React from "react";
import Logo from "../assets/logo.png";

function LudoScreen({ onBack }) {
  return (
    <div className="ludo-page">

      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      <div className="ludo-floating-dice ludo-dice-one">
        ⚄
      </div>

      <div className="ludo-floating-dice ludo-dice-two">
        ⚂
      </div>

      <div className="ludo-floating-dice ludo-dice-three">
        ⚅
      </div>


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="ludo-header">

        {/* Back */}

        <button
          type="button"
          className="ludo-back-button"
          onClick={onBack}
          aria-label="Go back"
        >
          ←
        </button>


        {/* User */}

        <div className="ludo-user-info">

          <div className="ludo-user-avatar">
            👧
          </div>

          <div className="ludo-user-details">

            <strong>
              jhilikplays
            </strong>

            <span>
              Level 3
            </span>

          </div>

        </div>


        {/* Wallet */}

        <div className="ludo-wallet">

          <div className="ludo-wallet-item">

            <span>
              🪙
            </span>

            <strong>
              1,250
            </strong>

            <button type="button">
              +
            </button>

          </div>


          <div className="ludo-wallet-item">

            <span>
              💎
            </span>

            <strong>
              50
            </strong>

            <button type="button">
              +
            </button>

          </div>

        </div>

      </header>


      {/* =====================================================
          LOGO
      ===================================================== */}

      <img
        src={Logo}
        alt="Ludo"
        className="ludo-logo"
      />


      {/* =====================================================
          HEADING
      ===================================================== */}

      <section className="ludo-title-section">

        <h1>
          Choose Your <span>Ludo</span>
        </h1>

        <p>
          Roll • Move • Win
        </p>

      </section>


      {/* =====================================================
          HANDWRITING
      ===================================================== */}

      <div className="ludo-handwriting">

        <span>
          Good
        </span>

        <span>
          Players
        </span>

        <span>
          Good Vibes!
        </span>

      </div>


      {/* =====================================================
          GAME MODES
      ===================================================== */}

      <main className="ludo-mode-grid">


        {/* ===================================================
            CLASSIC LUDO
        =================================================== */}

        <button
          type="button"
          className="ludo-mode-card ludo-classic-card"
        >

          <div className="ludo-mode-art ludo-classic-art">

            <div className="classic-pawn classic-blue">
              🔵
            </div>

            <div className="classic-pawn classic-red">
              🔴
            </div>

            <div className="classic-pawn classic-green">
              🟢
            </div>

            <div className="classic-dice">
              🎲
            </div>

          </div>


          <div className="ludo-mode-content">

            <h2>
              Classic Ludo
            </h2>

            <p>
              Classic Rules
            </p>

            <span className="ludo-mode-arrow">
              →
            </span>

          </div>

        </button>


        {/* ===================================================
            TURBO LUDO
        =================================================== */}

        <button
          type="button"
          className="ludo-mode-card ludo-turbo-card"
        >

          <div className="ludo-mode-art ludo-turbo-art">

            <div className="turbo-light">
              ✦
            </div>

            <div className="turbo-dice">
              🎲
            </div>

            <div className="turbo-lines">
              »
            </div>

          </div>


          <div className="ludo-mode-content">

            <h2>
              Turbo Ludo
            </h2>

            <p>
              Fast &amp; Fun
            </p>

            <span className="ludo-mode-arrow">
              →
            </span>

          </div>

        </button>


        {/* ===================================================
            BATTLE LUDO
        =================================================== */}

        <button
          type="button"
          className="ludo-mode-card ludo-battle-card"
        >

          <div className="ludo-mode-art ludo-battle-art">

            <div className="battle-crown">
              👑
            </div>

            <div className="battle-pawn battle-blue">
              🔵
            </div>

            <div className="battle-pawn battle-red">
              🔴
            </div>

            <div className="battle-spark">
              ✦
            </div>

          </div>


          <div className="ludo-mode-content">

            <h2>
              Battle Ludo
            </h2>

            <p>
              Play &amp; Compete
            </p>

            <span className="ludo-mode-arrow">
              →
            </span>

          </div>

        </button>


        {/* ===================================================
            TOURNAMENT
        =================================================== */}

        <button
          type="button"
          className="ludo-mode-card ludo-tournament-card"
        >

          <div className="ludo-mode-art ludo-tournament-art">

            <div className="tournament-light">
              ✦
            </div>

            <div className="tournament-trophy">
              🏆
            </div>

            <div className="laurel laurel-left">
              ❮
            </div>

            <div className="laurel laurel-right">
              ❯
            </div>

          </div>


          <div className="ludo-mode-content">

            <h2>
              Tournament
            </h2>

            <p>
              Win Big Rewards
            </p>

            <span className="ludo-mode-arrow">
              →
            </span>

          </div>

        </button>

      </main>


      {/* =====================================================
          BOTTOM NAVIGATION
      ===================================================== */}

      <nav className="ludo-bottom-nav">


        {/* Home */}

        <button
          type="button"
          className="ludo-nav-item"
          onClick={onBack}
        >

          <span>
            🏠
          </span>

          <small>
            Home
          </small>

        </button>


        {/* Friends */}

        <button
          type="button"
          className="ludo-nav-item"
        >

          <span>
            👥
          </span>

          <small>
            Friends
          </small>

        </button>


        {/* Play */}

        <button
          type="button"
          className="ludo-play-nav"
        >

          <div>
            🎲
          </div>

          <small>
            Play
          </small>

        </button>


        {/* Leaderboard */}

        <button
          type="button"
          className="ludo-nav-item"
        >

          <span>
            🏆
          </span>

          <small>
            Leaderboard
          </small>

        </button>


        {/* Profile */}

        <button
          type="button"
          className="ludo-nav-item"
        >

          <span>
            👤
          </span>

          <small>
            Profile
          </small>

        </button>

      </nav>

    </div>
  );
}

export default LudoScreen;