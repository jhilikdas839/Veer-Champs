import React, { useState } from "react";
import Hero from "../assets/Hero.png";

const STEPS = [
  { label: "Mobile", state: "active" },
  { label: "OTP", state: "upcoming" },
  { label: "Profile", state: "upcoming" },
  { label: "Done", state: "upcoming" },
];

const ACTIVE_INDEX = STEPS.findIndex((s) => s.state === "active");

function dotClasses(state) {
  if (state === "completed") {
    return "border-emerald-400/70 bg-emerald-400/15 text-emerald-400";
  }
  if (state === "active") {
    return "border-yellow-100/70 bg-gradient-to-b from-[#ffe45a] to-[#ffae08] shadow-[0_0_0_4px_rgba(255,196,45,0.18)]";
  }
  return "border-white/15 bg-white/5";
}

function labelClasses(state) {
  return state === "upcoming" ? "text-blue-100/30" : "text-blue-100/80";
}

function Authentication({ onBack, onContinue }) {
  const [mobileNumber, setMobileNumber] = useState("");

  /* =========================================================
     MOBILE NUMBER HANDLER
  ========================================================= */

  const handleMobileChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
      setMobileNumber(value);
    }
  };

  /* =========================================================
     CONTINUE
  ========================================================= */

  const handleContinue = () => {
    if (mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    onContinue();
  };

  return (
    <div className="min-h-dvh w-full overflow-x-hidden bg-[#020d2b] text-white">

      {/* =====================================================
          DESKTOP / TABLET
          MOBILE ONLY APPLICATION
      ===================================================== */}

      <div className="hidden min-h-dvh items-center justify-center bg-[#020d2b] px-6 md:flex">
        <div className="w-full max-w-sm text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-400/30 bg-[#06245a] shadow-[0_15px_45px_rgba(0,80,255,0.25)]">
            <span className="text-4xl">📱</span>
          </div>

          <h1 className="text-2xl font-black tracking-tight">Mobile Only</h1>

          <p className="mt-3 text-sm leading-6 text-blue-100/60">
            This game is designed exclusively for mobile devices.
            Please open Veer Champs on your smartphone to continue.
          </p>

          <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />

          <p className="mt-4 text-[10px] font-semibold tracking-[0.18em] text-blue-200/40">
            PLAY • CONNECT • WIN
          </p>
        </div>
      </div>


      {/* =====================================================
          MOBILE APPLICATION
      ===================================================== */}

      <div className="relative flex min-h-dvh w-full justify-center md:hidden">

        {/* ===================================================
            BACKGROUND
        =================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-blue-600/20 blur-[90px]" />
          <div className="absolute -right-28 top-[25%] h-64 w-64 rounded-full bg-purple-600/10 blur-[90px]" />
          <div className="absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[95px]" />

          <div className="absolute -left-8 top-[28%] rotate-[-25deg] text-[60px] leading-none opacity-[0.045]">⚄</div>
          <div className="absolute -right-8 top-[40%] rotate-[22deg] text-[60px] leading-none opacity-[0.045]">⚂</div>
          <div className="absolute -left-8 bottom-[18%] rotate-[-20deg] text-[58px] leading-none opacity-[0.04]">⚅</div>
        </div>


        {/* ===================================================
            MAIN CONTAINER
        =================================================== */}

        <main
          className="
            relative z-10 flex min-h-dvh w-full max-w-[430px] flex-col px-4
            pt-[max(1rem,env(safe-area-inset-top))]
            pb-[max(1.25rem,env(safe-area-inset-bottom))]
          "
        >

          {/* =============================================
              HEADER
          ============================================= */}

          <header className="flex items-center gap-3 py-3">

            <button
              type="button"
              aria-label="Go back"
              onClick={onBack}
              className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-full border border-white/10 bg-white/5
                text-lg text-white/80 transition-colors active:bg-white/10
              "
            >
              ←
            </button>

            {/* Progress */}
            <ol className="flex min-w-0 flex-1 items-center justify-center">
              {STEPS.map((step, index) => (
                <React.Fragment key={step.label}>
                  <li className="flex flex-col items-center gap-1">
                    <div
                      className={`
                        flex h-6 w-6 items-center justify-center
                        rounded-full border text-[10px] font-bold
                        ${dotClasses(step.state)}
                      `}
                    >
                      {step.state === "completed" && (
                        <span className="text-emerald-400">✓</span>
                      )}
                      {step.state === "active" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#06132f]" />
                      )}
                    </div>
                    <span className={`text-[9px] font-medium leading-none ${labelClasses(step.state)}`}>
                      {step.label}
                    </span>
                  </li>

                  {index < STEPS.length - 1 && (
                    <div
                      className={`
                        mx-1 mt-3 h-px flex-1 self-start
                        ${index < ACTIVE_INDEX ? "bg-emerald-400/50" : "bg-white/10"}
                      `}
                    />
                  )}
                </React.Fragment>
              ))}
            </ol>

            <button
              type="button"
              className="
                shrink-0 rounded-full border border-blue-400/25 bg-white/5
                px-3 py-1.5 text-[11px] font-semibold text-blue-100/70
                transition-colors active:bg-white/10
              "
            >
              Need Help?
            </button>

          </header>


          {/* =============================================
              HEADING
          ============================================= */}

          <section className="mt-[clamp(16px,4vh,28px)] text-center">
            <h1 className="text-[28px] font-black leading-[1.08] tracking-[-0.03em] text-white">
              Let&rsquo;s Play
              <br />
              <span className="text-yellow-300">Ludo</span> Together!
            </h1>

            <p className="mt-3 text-[12px] font-medium leading-[1.55] text-blue-100/55">
              Enter your mobile number to
              <br />
              get started
            </p>
          </section>


          {/* =============================================
              MOBILE INPUT
          ============================================= */}

          <div className="mt-[clamp(20px,4vh,28px)]">

            <label
              htmlFor="mobile-number"
              className="mb-2 block px-1 text-xs font-bold tracking-wide text-blue-100/75"
            >
              Mobile Number
            </label>

            <div
              className="
                flex h-[52px] w-full items-center overflow-hidden rounded-[14px]
                border border-blue-400/30 bg-[#061a42]/90
                shadow-[0_8px_24px_rgba(0,40,120,0.16)]
                transition focus-within:border-cyan-400/60
                focus-within:shadow-[0_0_20px_rgba(34,211,238,0.08)]
              "
            >

              <button
                type="button"
                aria-label="Select country"
                className="flex h-full shrink-0 items-center gap-1 px-3 text-[17px]"
              >
                <span className="leading-none">🇮🇳</span>
                <span className="text-xs text-blue-100/50">⌄</span>
              </button>

              <div className="shrink-0 pr-2 text-[13px] font-bold text-white">+91</div>

              <div className="h-6 w-px shrink-0 bg-blue-400/20" />

              <input
                id="mobile-number"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={handleMobileChange}
                maxLength={10}
                className="
                  min-w-0 flex-1 bg-transparent px-3
                  text-[15px] font-semibold text-white outline-none
                  placeholder:text-[13px] placeholder:font-normal placeholder:text-blue-100/30
                "
              />

            </div>

          </div>


          {/* =============================================
              CONTINUE BUTTON
          ============================================= */}

          <button
            type="button"
            onClick={handleContinue}
            className="
              mt-4 flex h-14 w-full items-center justify-center gap-2
              rounded-full border border-yellow-100/80
              bg-gradient-to-b from-[#ffe45a] via-[#ffc52d] to-[#ffae08]
              text-[#06132f]
              shadow-[0_5px_0_#b86b00,0_8px_22px_rgba(255,184,0,0.28)]
              transition-all duration-150
              active:translate-y-[3px]
              active:shadow-[0_2px_0_#b86b00,0_5px_12px_rgba(255,184,0,0.2)]
              touch-manipulation
            "
          >
            <span className="text-sm font-black tracking-wide">Continue</span>
            <span className="text-lg font-medium leading-none">→</span>
          </button>


          {/* =============================================
              OTP MESSAGE
          ============================================= */}

          <div className="mt-3 flex items-center justify-center gap-1.5 px-2 text-center">
            <span className="text-xs leading-none">🔒</span>
            <span className="text-[10px] font-medium leading-[1.35] text-blue-100/45">
              We&rsquo;ll send you an OTP to verify your number
            </span>
          </div>


          {/* =============================================
              BENEFITS
          ============================================= */}

          <div
            className="
              mt-[clamp(18px,3.5vh,25px)] grid w-full grid-cols-3
              rounded-[14px] border border-blue-400/15 bg-blue-950/35
              px-1 py-4
            "
          >
            <div className="flex flex-col items-center justify-center border-r border-blue-400/15 text-center">
              <div className="text-xl leading-none drop-shadow-[0_0_8px_rgba(80,180,255,0.3)]">🛡</div>
              <p className="mt-1.5 text-[9px] font-bold leading-[1.25] text-blue-100/65">
                Safe &amp;
                <br />
                Secure
              </p>
            </div>

            <div className="flex flex-col items-center justify-center border-r border-blue-400/15 text-center">
              <div className="text-xl leading-none drop-shadow-[0_0_8px_rgba(255,210,40,0.3)]">⚡</div>
              <p className="mt-1.5 text-[9px] font-bold leading-[1.25] text-blue-100/65">
                Quick
                <br />
                Login
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-xl leading-none drop-shadow-[0_0_8px_rgba(80,180,255,0.3)]">👥</div>
              <p className="mt-1.5 text-[9px] font-bold leading-[1.25] text-blue-100/65">
                Join Millions
                <br />
                of Players
              </p>
            </div>
          </div>


          {/* =============================================
              HERO BOARD
          ============================================= */}

          <section className="relative mt-[clamp(16px,3vh,25px)] flex w-full items-center justify-center">
            <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-20 w-[75%] -translate-x-1/2 rounded-full bg-yellow-400/15 blur-[35px]" />
            <img
              src={Hero}
              alt="Ludo Game Board"
              draggable="false"
              className="relative z-10 w-[88%] max-w-[330px] object-contain drop-shadow-[0_13px_18px_rgba(0,0,0,0.45)]"
            />
          </section>


          {/* =============================================
              BOTTOM BRANDING
          ============================================= */}

          <div className="mt-auto flex w-full items-center justify-center gap-2 pt-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-yellow-400/50" />
            <p className="m-0 whitespace-nowrap text-[9px] font-bold leading-none tracking-[0.14em] text-blue-100/45">
              PLAY • CONNECT • WIN
            </p>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-yellow-400/50" />
          </div>

        </main>

      </div>

    </div>
  );
}

export default Authentication;