import React from "react";
import Logo from "../assets/logo.png";
import Hero from "../assets/Hero.png";

const FEATURES = [
  { icon: "⚡", iconClass: "text-cyan-400 drop-shadow-[0_0_6px_rgba(0,200,255,0.5)]", title: "Play", subtitle: "Your Way" },
  { icon: "♟", iconClass: "text-cyan-400 drop-shadow-[0_0_6px_rgba(0,200,255,0.4)]", title: "Challenge", subtitle: "Friends" },
  { icon: "♛", iconClass: "text-yellow-300 drop-shadow-[0_0_6px_rgba(255,200,0,0.45)]", title: "Win", subtitle: "Rewards" },
  { icon: "✓", iconClass: "text-emerald-400 drop-shadow-[0_0_6px_rgba(0,255,180,0.4)]", title: "Safe", subtitle: "& Secure" },
];

function SplashScreen({ onGetStarted }) {
  return (
    <div className="min-h-dvh w-full overflow-hidden bg-[#020d2b] text-white">

      {/* =====================================================
          DESKTOP / TABLET
      ===================================================== */}

      <div className="hidden min-h-dvh items-center justify-center bg-[#020d2b] px-6 md:flex">
        <div className="w-full max-w-sm text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-400/30 bg-[#06245a]">
            <span className="text-4xl">📱</span>
          </div>
          <h1 className="text-2xl font-black">Mobile Only</h1>
          <p className="mt-3 text-sm leading-6 text-blue-100/60">
            This game is designed exclusively for mobile devices.
            Please open Veer Champs on your smartphone to continue.
          </p>
        </div>
      </div>


      {/* =====================================================
          MOBILE
      ===================================================== */}

      <div className="relative flex min-h-dvh w-full justify-center overflow-hidden md:hidden">

        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-blue-600/25 blur-[85px]" />
          <div className="absolute -right-24 top-[38%] h-60 w-60 rounded-full bg-yellow-400/10 blur-[90px]" />
          <div className="absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[90px]" />

          {/* Decorative dice */}
          <div className="absolute -left-9 top-[28%] rotate-[-25deg] text-[60px] opacity-[0.045]">⚄</div>
          <div className="absolute -right-8 top-[42%] rotate-[20deg] text-[60px] opacity-[0.045]">⚂</div>
          <div className="absolute -left-8 bottom-[16%] rotate-[-20deg] text-[58px] opacity-[0.04]">⚅</div>
        </div>

        {/* =================================================
            MAIN CONTENT — centered as a single group so
            spacing is distributed evenly top/bottom instead
            of collapsing to the top with dead space below.
        ================================================= */}

        <main
          className="
            relative z-10 flex min-h-dvh w-full max-w-[430px]
            flex-col items-center justify-center
            gap-5 px-4
            pt-[max(1.25rem,env(safe-area-inset-top))]
            pb-[max(1.25rem,env(safe-area-inset-bottom))]
          "
        >

          {/* Logo */}
          <div className="relative flex w-full items-center justify-center">
            <div className="pointer-events-none absolute h-28 w-52 rounded-full bg-blue-500/20 blur-[42px]" />
            <img
              src={Logo}
              alt="Ludo Logo"
              draggable="false"
              className="relative z-10 w-[72%] max-w-[280px] object-contain drop-shadow-[0_0_18px_rgba(0,130,255,0.38)]"
            />
          </div>

          {/* Hero board */}
          <div className="relative flex w-full items-center justify-center">
            <div className="pointer-events-none absolute bottom-2 h-20 w-[72%] rounded-full bg-yellow-400/20 blur-[32px]" />
            <img
              src={Hero}
              alt="Ludo Game Board"
              draggable="false"
              className="relative z-10 w-full max-w-[405px] object-contain drop-shadow-[0_13px_17px_rgba(0,0,0,0.45)]"
            />
          </div>

          {/* Features */}
          <div
            className="
              relative z-20 grid w-full grid-cols-4
              overflow-hidden rounded-2xl border border-blue-500/60
              bg-gradient-to-b from-[#062b66]/98 to-[#03173a]/98
              shadow-[0_7px_22px_rgba(0,70,170,0.28)]
            "
          >
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`
                  flex flex-col items-center justify-center gap-1
                  px-1 py-4 text-center
                  ${i < FEATURES.length - 1 ? "border-r border-blue-400/20" : ""}
                `}
              >
                <div className={`text-xl leading-none ${f.iconClass}`}>{f.icon}</div>
                <strong className="text-[11px] font-black leading-none">{f.title}</strong>
                <span className="text-[9px] leading-none text-blue-100/60">{f.subtitle}</span>
              </div>
            ))}
          </div>

          {/* Get Started button */}
          <button
            type="button"
            onClick={onGetStarted}
            className="
              group relative z-20 flex h-14 w-full
              items-center justify-center rounded-full
              border border-yellow-100/80
              bg-gradient-to-b from-[#ffe45a] via-[#ffc52d] to-[#ffae08]
              text-[#06132f]
              shadow-[0_5px_0_#b86b00,0_8px_20px_rgba(255,184,0,0.30)]
              transition-all duration-150
              active:translate-y-[3px]
              active:shadow-[0_2px_0_#b86b00,0_5px_12px_rgba(255,184,0,0.22)]
              touch-manipulation
            "
          >
            <span className="text-sm font-black tracking-wide">Get Started</span>
            <span className="absolute right-6 text-lg font-medium leading-none">→</span>
          </button>

          {/* Bottom caption */}
          <div className="flex w-full items-center justify-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-yellow-400/60" />
            <p className="m-0 whitespace-nowrap text-[10px] font-medium leading-none tracking-[0.06em] text-blue-100/65">
              Play Ludo. Make Memories.
            </p>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-yellow-400/60" />
          </div>

        </main>

      </div>
    </div>
  );
}

export default SplashScreen;