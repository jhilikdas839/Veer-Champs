import React from "react";
import Hero from "../assets/Hero.png";

function HomeScreen({
  username = "jhilikplays",
  selectedAvatar = 1,
  onProfile,
  onLudo,
}) {
  const avatars = ["👦", "👧", "😎", "👩", "🐼", "🐱"];
  const currentAvatar = avatars[selectedAvatar] || "👧";

  return (
    <div className="min-h-screen w-full bg-[#020d2b] text-white overflow-hidden">

      {/* =====================================================
          DESKTOP / TABLET — MOBILE ONLY MESSAGE
      ===================================================== */}

      <div className="hidden md:flex min-h-screen w-full items-center justify-center bg-[#020d2b] px-6">
        <div className="text-center max-w-md">

          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 text-5xl shadow-[0_0_40px_rgba(0,140,255,0.25)]">
            📱
          </div>

          <h1 className="text-3xl font-black">
            Mobile Only
          </h1>

          <p className="mt-3 text-sm leading-6 text-blue-200/70">
            Veer Champs is currently optimized for mobile devices.
            Please open the game on your mobile phone for the best experience.
          </p>

        </div>
      </div>


      {/* =====================================================
          MOBILE HOME
      ===================================================== */}

      <main
        className="
          relative
          mx-auto
          min-h-screen
          w-full
          max-w-[430px]
          overflow-hidden
          bg-[radial-gradient(circle_at_50%_0%,#12458b_0%,#082c63_35%,#031536_72%,#020b24_100%)]
          md:hidden
        "
      >

        {/* =================================================
            BACKGROUND GLOW
        ================================================= */}

        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[90px]" />

        <div className="pointer-events-none absolute -right-24 top-[35%] h-56 w-56 rounded-full bg-cyan-500/10 blur-[80px]" />

        <div className="pointer-events-none absolute -left-28 bottom-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[90px]" />


        {/* =================================================
            DECORATIVE DICE
        ================================================= */}

        <div className="pointer-events-none absolute -left-8 top-28 rotate-[-25deg] text-[65px] opacity-[0.06]">
          ⚄
        </div>

        <div className="pointer-events-none absolute -right-7 top-[38%] rotate-[20deg] text-[65px] opacity-[0.06]">
          ⚂
        </div>

        <div className="pointer-events-none absolute -left-8 bottom-32 rotate-[-20deg] text-[65px] opacity-[0.05]">
          ⚅
        </div>


        {/* =================================================
            CONTENT WRAPPER
        ================================================= */}

        <div className="relative z-10 flex min-h-screen flex-col px-[18px] pb-[82px]">


          {/* =================================================
              HEADER
          ================================================= */}

          <header className="flex items-center justify-between pt-5">

            {/* PROFILE */}

            <button
              type="button"
              onClick={onProfile}
              className="flex items-center gap-2 text-left"
            >

              <div
                className="
                  flex h-10 w-10
                  shrink-0
                  items-center justify-center
                  rounded-full
                  border-2 border-cyan-400
                  bg-gradient-to-br from-pink-400/80 to-purple-800
                  text-xl
                  shadow-[0_0_16px_rgba(0,170,255,0.55)]
                "
              >
                {currentAvatar}
              </div>

              <div>

                <h3 className="text-[11px] font-black leading-none">
                  {username}
                </h3>

                <p className="mt-1 text-[8px] text-blue-200/80">
                  Level 3
                </p>

                <div className="mt-1.5 flex items-center gap-1.5">

                  <div className="h-[4px] w-12 overflow-hidden rounded-full bg-blue-950">
                    <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-yellow-300 to-orange-400" />
                  </div>

                  <span className="text-[6px] text-blue-200/70">
                    320 / 500 XP
                  </span>

                </div>

              </div>

            </button>


            {/* WALLET */}

            <div className="flex items-center gap-1">

              {/* Coins */}

              <div
                className="
                  flex h-6 items-center gap-1
                  rounded-full
                  border border-blue-400/50
                  bg-[#031a40]/90
                  px-2
                "
              >

                <span className="text-[10px]">
                  🪙
                </span>

                <span className="text-[8px] font-bold">
                  1,250
                </span>

                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold">
                  +
                </span>

              </div>


              {/* Diamonds */}

              <div
                className="
                  flex h-6 items-center gap-1
                  rounded-full
                  border border-blue-400/50
                  bg-[#031a40]/90
                  px-2
                "
              >

                <span className="text-[10px]">
                  💎
                </span>

                <span className="text-[8px] font-bold">
                  50
                </span>

                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold">
                  +
                </span>

              </div>


              {/* Notification */}

              <button
                type="button"
                className="
                  relative
                  ml-0.5
                  flex h-7 w-7
                  items-center justify-center
                  rounded-full
                  border border-blue-400/30
                  bg-[#031a40]
                  text-[11px]
                "
              >
                🔔

                <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-red-500" />

              </button>

            </div>

          </header>


          {/* =================================================
              WELCOME
          ================================================= */}

          <section className="relative mt-[52px]">

            <p className="text-[8px] font-bold tracking-[2px] text-blue-200/80">
              GOOD TO SEE YOU AGAIN&nbsp; 👋
            </p>

            <h1 className="mt-2 text-[25px] font-black leading-none tracking-tight">
              Ready to{" "}
              <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,190,255,0.2)]">
                Play?
              </span>
            </h1>

            <p className="mt-1 text-[8px] text-blue-200/80">
              Pick a game and start the fun!
            </p>


            {/* SIDE TEXT */}

            <div
              className="
                absolute
                -right-1
                -top-7
                rotate-[-7deg]
                text-center
                font-[cursive]
                text-[8px]
                leading-[10px]
                text-blue-100/80
              "
            >

              <span className="block">Play</span>
              <span className="block">Connect</span>
              <span className="block">Win</span>

              <span className="mt-1 block text-[16px] text-cyan-400">
                ♡
              </span>

            </div>

          </section>


          {/* =================================================
              GAME CARDS
          ================================================= */}

          <section className="mt-5 grid grid-cols-4 gap-[6px]">


            {/* =================================================
                LUDO
            ================================================= */}

            <button
              type="button"
              onClick={onLudo}
              className="
                group
                relative
                h-[165px]
                overflow-hidden
                rounded-[10px]
                border
                border-blue-400
                bg-gradient-to-b
                from-[#075db8]
                to-[#031b45]
                text-left
                shadow-[0_5px_18px_rgba(0,110,255,0.25)]
                transition
                active:scale-[0.97]
              "
            >

              {/* Image */}

              <div className="absolute inset-x-0 top-0 h-[73%] overflow-hidden">

                <img
                  src={Hero}
                  alt="Ludo"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#031027]" />

              </div>


              {/* PLAY NOW */}

              <span
                className="
                  absolute
                  left-1.5
                  top-1.5
                  z-10
                  rounded
                  bg-[#02122f]/90
                  px-1.5
                  py-1
                  text-[6px]
                  font-black
                  tracking-wide
                  text-yellow-300
                "
              >
                ⚡ PLAY NOW
              </span>


              {/* CONTENT */}

              <div className="absolute inset-x-0 bottom-0 z-10 px-1.5 pb-2">

                <h2 className="text-[11px] font-black leading-none">
                  LUDO
                </h2>

                <p className="mt-1 text-[6px] text-blue-100/80">
                  Roll. Move. Win.
                </p>

                <span
                  className="
                    absolute
                    bottom-0
                    right-1.5
                    flex
                    h-[22px]
                    w-[22px]
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-500
                    text-[13px]
                    shadow-[0_0_10px_rgba(0,140,255,0.5)]
                  "
                >
                  →
                </span>

              </div>

            </button>


            {/* =================================================
                HAND CRICKET
            ================================================= */}

            <button
              type="button"
              disabled
              className="
                relative
                h-[165px]
                overflow-hidden
                rounded-[10px]
                border
                border-teal-400/70
                bg-gradient-to-b
                from-[#08716f]
                to-[#03343e]
                text-left
              "
            >

              {/* Art */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,220,190,0.3),transparent_55%)]" />

              <div className="absolute left-1/2 top-5 -translate-x-1/2 text-[7px] tracking-[4px] text-white/80">
                ✦ ✦ ✦
              </div>

              <div className="absolute left-1/2 top-12 -translate-x-1/2 text-[37px]">
                🏏
              </div>

              <div className="absolute bottom-12 right-2 text-[18px]">
                🔴
              </div>


              {/* Coming soon badge */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[57px]
                  z-20
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded
                  border
                  border-white/30
                  bg-[#020817]/90
                  px-2
                  py-1
                  text-[6px]
                  font-black
                  tracking-[0.5px]
                "
              >
                COMING SOON
              </div>


              {/* Bottom */}

              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#021d27] via-[#021d27]/95 to-transparent px-1.5 pb-2 pt-8">

                <h2 className="text-[10px] font-black leading-[10px]">
                  HAND
                  <br />
                  CRICKET
                </h2>

                <p className="mt-1 text-[6px] text-blue-100/80">
                  Time Your Shot!
                </p>

                <span className="absolute bottom-2 right-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-teal-500 text-[13px]">
                  →
                </span>

              </div>

            </button>


            {/* =================================================
                UNO
            ================================================= */}

            <button
              type="button"
              disabled
              className="
                relative
                h-[165px]
                overflow-hidden
                rounded-[10px]
                border
                border-purple-400/80
                bg-gradient-to-b
                from-[#7d22bd]
                to-[#2b084d]
                text-left
              "
            >

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(230,80,255,0.3),transparent_55%)]" />


              {/* UNO Cards */}

              <div className="absolute left-2 top-12 rotate-[-18deg] rounded-md border-2 border-white bg-blue-600 px-2 py-4 text-[9px] font-black shadow-lg">
                +4
              </div>

              <div className="absolute left-1/2 top-10 z-10 -translate-x-1/2 rotate-[4deg] rounded-md border-2 border-white bg-red-500 px-2 py-4 text-[10px] font-black shadow-xl">
                UNO
              </div>

              <div className="absolute right-2 top-12 rotate-[18deg] rounded-md border-2 border-white bg-green-600 px-2 py-4 text-[9px] font-black shadow-lg">
                +2
              </div>


              {/* Coming */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[57px]
                  z-30
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded
                  border
                  border-white/30
                  bg-[#13051f]/90
                  px-2
                  py-1
                  text-[6px]
                  font-black
                "
              >
                COMING SOON
              </div>


              {/* Bottom */}

              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#17062a] via-[#17062a]/95 to-transparent px-1.5 pb-2 pt-8">

                <h2 className="text-[11px] font-black">
                  UNO
                </h2>

                <p className="mt-1 text-[6px] text-blue-100/80">
                  Match. Play. Win.
                </p>

                <span className="absolute bottom-2 right-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-purple-500 text-[13px]">
                  →
                </span>

              </div>

            </button>


            {/* =================================================
                BINGO
            ================================================= */}

            <button
              type="button"
              disabled
              className="
                relative
                h-[165px]
                overflow-hidden
                rounded-[10px]
                border
                border-orange-400/80
                bg-gradient-to-b
                from-[#9d360e]
                to-[#4c1404]
                text-left
              "
            >

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,150,40,0.3),transparent_55%)]" />


              {/* Bingo Board */}

              <div className="absolute right-1.5 top-3 rotate-[6deg] rounded bg-[#f5eee0] p-2 text-center text-[5px] text-red-900 shadow-lg">

                <strong className="block text-[8px]">
                  BINGO
                </strong>

                <span className="block">
                  28&nbsp; 13&nbsp; 16
                </span>

                <span className="block">
                  8&nbsp;&nbsp;18&nbsp;&nbsp;15
                </span>

                <span className="block">
                  22&nbsp;11&nbsp;9
                </span>

              </div>


              {/* Ball */}

              <div className="absolute bottom-12 left-2 flex h-10 w-10 flex-col items-center justify-center rounded-full bg-gradient-to-br from-red-400 to-red-800 text-white shadow-lg">

                <small className="text-[6px]">
                  B
                </small>

                <strong className="text-[15px]">
                  7
                </strong>

              </div>


              {/* Coming */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[57px]
                  z-30
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded
                  border
                  border-white/30
                  bg-[#260b02]/90
                  px-2
                  py-1
                  text-[6px]
                  font-black
                "
              >
                COMING SOON
              </div>


              {/* Bottom */}

              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#3d1003] via-[#3d1003]/95 to-transparent px-1.5 pb-2 pt-8">

                <h2 className="text-[10px] font-black">
                  BINGO
                </h2>

                <p className="mt-1 text-[6px] text-orange-100/80">
                  Numbers. Fun. Together.
                </p>

                <span className="absolute bottom-2 right-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-orange-500 text-[13px]">
                  →
                </span>

              </div>

            </button>

          </section>


          {/* =================================================
              REWARD BANNER
          ================================================= */}

          <section
            className="
              relative
              mt-8
              h-[94px]
              overflow-hidden
              rounded-xl
              border
              border-blue-500/60
              bg-gradient-to-r
              from-[#08275a]
              via-[#0a3570]
              to-[#0a4487]
              px-3
              py-3
              shadow-[inset_0_0_25px_rgba(0,130,255,0.1)]
            "
          >

            {/* Glow */}

            <div className="absolute right-0 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-blue-400/20 blur-3xl" />


            {/* Text */}

            <div className="relative z-10 w-[65%]">

              <span className="text-[6px] font-bold tracking-[1.5px] text-blue-300">
                DAILY REWARDS
              </span>

              <h2 className="mt-1 text-[17px] font-black leading-[15px]">
                Play More
                <br />
                <span className="text-cyan-400">
                  Win More!
                </span>
              </h2>

              <p className="mt-1 text-[6px] leading-[8px] text-blue-100/70">
                Compete, earn rewards and climb the leaderboard.
              </p>

              <button
                type="button"
                className="
                  mt-2
                  rounded-full
                  border
                  border-blue-400
                  bg-blue-600/30
                  px-3
                  py-1
                  text-[6px]
                  font-bold
                "
              >
                View Rewards&nbsp; →
              </button>

            </div>


            {/* Trophy */}

            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[48px] drop-shadow-[0_6px_6px_rgba(0,0,0,0.35)]">
              🏆
            </div>

            <span className="absolute right-5 top-4 text-[8px] text-yellow-300">
              ✦
            </span>

            <span className="absolute bottom-4 right-2 text-[8px] text-yellow-300">
              ◆
            </span>

          </section>


          {/* =================================================
              BOTTOM NAV
          ================================================= */}

          <nav
            className="
              fixed
              bottom-3
              left-1/2
              z-50
              flex
              h-[52px]
              w-[calc(100%-28px)]
              max-w-[402px]
              -translate-x-1/2
              items-center
              justify-around
              rounded-[15px]
              border
              border-blue-500/50
              bg-[#031a3d]/95
              px-1
              shadow-[0_0_20px_rgba(0,80,180,0.18)]
              backdrop-blur-xl
            "
          >

            {/* Home */}

            <button
              type="button"
              className="flex w-14 flex-col items-center gap-0.5 text-cyan-400"
            >

              <span className="text-[13px]">
                🏠
              </span>

              <small className="text-[6px]">
                Home
              </small>

            </button>


            {/* Friends */}

            <button
              type="button"
              className="flex w-14 flex-col items-center gap-0.5 text-blue-300/60"
            >

              <span className="text-[13px]">
                👥
              </span>

              <small className="text-[6px]">
                Friends
              </small>

            </button>


            {/* Play */}

            <button
              type="button"
              onClick={onLudo}
              className="
                relative
                -mt-7
                flex
                h-[58px]
                w-[58px]
                flex-col
                items-center
                justify-center
                rounded-full
                border-2
                border-cyan-400
                bg-gradient-to-b
                from-[#0c65c8]
                to-[#031d4a]
                shadow-[0_0_20px_rgba(0,160,255,0.55)]
              "
            >

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[18px] shadow-lg">
                🎲
              </span>

              <small className="absolute -bottom-4 text-[6px] font-bold text-white">
                Play
              </small>

            </button>


            {/* Leaderboard */}

            <button
              type="button"
              className="flex w-14 flex-col items-center gap-0.5 text-blue-300/60"
            >

              <span className="text-[13px]">
                🏆
              </span>

              <small className="text-[6px]">
                Leaderboard
              </small>

            </button>


            {/* Profile */}

            <button
              type="button"
              onClick={onProfile}
              className="flex w-14 flex-col items-center gap-0.5 text-blue-300/60"
            >

              <span className="text-[13px]">
                👤
              </span>

              <small className="text-[6px]">
                Profile
              </small>

            </button>

          </nav>

        </div>

      </main>
    </div>
  );
}

export default HomeScreen;