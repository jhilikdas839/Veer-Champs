import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Hero from "../assets/Hero.png";

const STEPS = [
  { label: "Mobile", state: "completed" },
  { label: "OTP", state: "active" },
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

function OtpScreen({ onBack, onContinue }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (value, index) => {
    // Sirf number allow
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Next box par automatically focus
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    // Backspace par previous box
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
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
    <div className="min-h-dvh w-full overflow-x-hidden bg-[#020d2b] text-white">

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

      <div className="relative flex min-h-dvh w-full justify-center md:hidden">

        {/* Background glow + decorative dice */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-blue-600/25 blur-[85px]" />
          <div className="absolute -right-24 top-[30%] h-60 w-60 rounded-full bg-yellow-400/10 blur-[90px]" />
          <div className="absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[90px]" />

          <span
            className="absolute -left-9 top-[20%] text-[60px] opacity-[0.045]"
            style={{ "--tilt": "-25deg", animation: "otpFloat 7s ease-in-out infinite" }}
          >
            ⚄
          </span>
          <span
            className="absolute -right-8 top-[46%] text-[60px] opacity-[0.045]"
            style={{ "--tilt": "20deg", animation: "otpFloat 8s ease-in-out infinite 1.2s" }}
          >
            ⚂
          </span>
          <span
            className="absolute -left-8 bottom-[10%] text-[58px] opacity-[0.04]"
            style={{ "--tilt": "-20deg", animation: "otpFloat 6.5s ease-in-out infinite 0.6s" }}
          >
            ⚅
          </span>
        </div>

        {/* Decorative hero board, pinned to the bottom, fading into the background */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center overflow-hidden">
          <div className="relative w-full max-w-[430px]">
            <div className="absolute inset-x-0 -top-1 h-24 bg-gradient-to-b from-[#020d2b] to-transparent" />
            <img
              src={Hero}
              alt=""
              aria-hidden="true"
              draggable="false"
              className="w-full translate-y-10 object-contain opacity-[0.14] blur-[0.3px]"
            />
          </div>
        </div>

        <main
          className="
            relative z-10 flex w-full max-w-[430px] flex-col px-5
            pt-[max(1rem,env(safe-area-inset-top))]
            pb-[max(2.5rem,env(safe-area-inset-bottom))]
          "
        >

          {/* =============================================
              HEADER
          ============================================= */}

          <header className="flex items-center gap-3 py-3">

            <button
              type="button"
              onClick={onBack}
              aria-label="Go back"
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
                        mx-1 h-px flex-1 self-start mt-3
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
              MAIN CONTENT
          ============================================= */}

          <div className="mt-4 flex flex-col items-center gap-7">

            <img
              src={Logo}
              alt="Ludo Logo"
              draggable="false"
              className="w-28 drop-shadow-[0_0_14px_rgba(0,130,255,0.35)]"
            />

            <section className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-black leading-tight">
                Verify Your{" "}
                <span className="bg-gradient-to-b from-[#ffe45a] to-[#ffae08] bg-clip-text text-transparent">
                  OTP
                </span>
              </h1>
              <p className="text-sm text-blue-100/60">We&rsquo;ve sent a 6-digit code to</p>
              <strong className="text-base font-bold tracking-wide text-white">
                +91 98765 43210
              </strong>
            </section>

            <div className="flex w-full items-center justify-center gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={1}
                  value={digit}
                  onChange={(event) => handleOtpChange(event.target.value, index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className="
                    h-12 max-w-[48px] flex-1 rounded-xl
                    border border-blue-400/25 bg-[#06245a]/70
                    text-center text-lg font-black text-white
                    outline-none transition-all duration-150
                    focus:border-yellow-300/80 focus:bg-[#06245a]
                    focus:ring-2 focus:ring-yellow-300/30
                  "
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleVerify}
              className="
                group flex h-14 w-full items-center justify-center gap-2
                rounded-full border border-yellow-100/80
                bg-gradient-to-b from-[#ffe45a] via-[#ffc52d] to-[#ffae08]
                text-[#06132f]
                shadow-[0_5px_0_#b86b00,0_8px_20px_rgba(255,184,0,0.30)]
                transition-all duration-150
                active:translate-y-[3px]
                active:shadow-[0_2px_0_#b86b00,0_5px_12px_rgba(255,184,0,0.22)]
                touch-manipulation
              "
            >
              <span className="text-sm font-black tracking-wide">Verify &amp; Continue</span>
              <span className="text-lg font-medium leading-none">→</span>
            </button>

            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-xs text-blue-100/50">Didn&rsquo;t receive the code?</p>
              <button
                type="button"
                disabled
                className="text-xs font-semibold tabular-nums text-blue-200/40"
              >
                Resend OTP in 00:25
              </button>
            </div>

          </div>

        </main>

      </div>

      <style>{`
        @keyframes otpFloat {
          0%, 100% { transform: translateY(0) rotate(var(--tilt, 0deg)); }
          50% { transform: translateY(-10px) rotate(var(--tilt, 0deg)); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="otpFloat"] { animation: none !important; }
        }
      `}</style>

    </div>
  );
}

export default OtpScreen;