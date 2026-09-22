import React from "react";

function GameViewport({ children }) {
  return (
    <div className="min-h-screen w-full bg-[#020b24]">

      {/* =====================================================
          MOBILE GAME
      ===================================================== */}

      <div
        className="
          block
          min-h-screen
          w-full
          overflow-hidden
          bg-[#020b24]

          md:hidden
        "
      >
        {children}
      </div>


      {/* =====================================================
          DESKTOP / TABLET — UNAVAILABLE
      ===================================================== */}

      <div
        className="
          hidden
          min-h-screen
          w-full
          items-center
          justify-center
          bg-[radial-gradient(circle_at_50%_35%,#0b2e65_0%,#041638_45%,#020b24_100%)]
          px-6
          text-white

          md:flex
        "
      >

        <div className="flex w-full max-w-md flex-col items-center text-center">


          {/* =================================================
              ICON
          ================================================= */}

          <div
            className="
              mb-6
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              border-cyan-400/40
              bg-cyan-400/10
              text-5xl
              shadow-[0_0_40px_rgba(0,170,255,0.2)]
            "
          >
            📱
          </div>


          {/* =================================================
              TITLE
          ================================================= */}

          <h1
            className="
              text-3xl
              font-black
              tracking-tight
              text-white
            "
          >
            Mobile Only
          </h1>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-4
              text-sm
              leading-6
              text-blue-100/70
            "
          >
            Veer Champs is currently available
            <br />
            only on mobile devices.
          </p>


          {/* =================================================
              SMALL MESSAGE
          ================================================= */}

          <span
            className="
              mt-3
              text-xs
              text-blue-300/60
            "
          >
            Please open the game on your mobile.
          </span>


          {/* =================================================
              DECORATIVE LINE
          ================================================= */}

          <div className="mt-7 flex items-center gap-3">

            <span className="h-px w-10 bg-blue-400/30" />

            <span className="text-[10px] font-semibold tracking-[2px] text-blue-300/50">
              VEER CHAMPS
            </span>

            <span className="h-px w-10 bg-blue-400/30" />

          </div>

        </div>

      </div>

    </div>
  );
}

export default GameViewport;