import React from "react";

function GameViewport({ children }) {
  return (
    <div className="game-wrapper">

      {/* =========================================
          MOBILE GAME
      ========================================= */}

      <div className="game-screen">
        {children}
      </div>


      {/* =========================================
          DESKTOP UNAVAILABLE SCREEN
      ========================================= */}

      <div className="desktop-unavailable">

        <div className="unavailable-icon">
          📱
        </div>

        <h1>
          Mobile Only
        </h1>

        <p>
          Veer Champs is currently available<br />
          only on mobile devices.
        </p>

        <span>
          Please open the game on your mobile.
        </span>

      </div>

    </div>
  );
}

export default GameViewport;