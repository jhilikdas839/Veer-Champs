
import Hero from "../assets/Hero.png";


function HomeScreen({
  username = "jhilikplays",
  selectedAvatar = 1,
  onProfile,
  onLudo,
}) {
  const avatars = [
    "👦",
    "👧",
    "😎",
    "👩",
    "🐼",
    "🐱",
  ];

  const currentAvatar = avatars[selectedAvatar] || "👧";

  return (
    <div className="home-page">

      {/* Background */}
      <div className="home-glow home-glow-one"></div>
      <div className="home-glow home-glow-two"></div>

      <div className="home-floating-dice home-dice-one">⚄</div>
      <div className="home-floating-dice home-dice-two">⚂</div>
      <div className="home-floating-dice home-dice-three">⚅</div>


      {/* ================= HEADER ================= */}

      <header className="home-header">

        <button
          type="button"
          className="home-user-section"
          onClick={onProfile}
        >
          <div className="home-user-avatar">
            {currentAvatar}
          </div>

          <div className="home-user-info">

            <h3>{username}</h3>

            <span>Level 3</span>

            <div className="home-xp-row">

              <div className="home-xp-bar">
                <div className="home-xp-progress"></div>
              </div>

              <small>320 / 500 XP</small>

            </div>

          </div>
        </button>


        {/* Wallet */}

        <div className="home-wallet">

          <div className="home-wallet-item">
            <span>🪙</span>
            <strong>1,250</strong>
            <button type="button">+</button>
          </div>

          <div className="home-wallet-item">
            <span>💎</span>
            <strong>50</strong>
            <button type="button">+</button>
          </div>

          <button
            type="button"
            className="home-notification"
          >
            🔔
            <i></i>
          </button>

        </div>

      </header>


      {/* ================= WELCOME ================= */}

      <section className="home-welcome">

        <span className="home-welcome-small">
          GOOD TO SEE YOU AGAIN&nbsp; 👋
        </span>

        <h1>
          Ready to <span>Play?</span>
        </h1>

        <p>
          Pick a game and start the fun!
        </p>

      </section>


      {/* Decorative handwriting */}

      <div className="home-handwriting">

        <span>Play</span>
        <span>Connect</span>
        <span>Win</span>

      </div>


      {/* ================= GAME CARDS ================= */}

      <section className="home-game-grid">


        {/* ================= LUDO ================= */}

        <button
          type="button"
          className="home-game-card home-ludo-card"
          onClick={onLudo}
        >

          <div className="home-card-art">

            <img
              src={Hero}
              alt="Ludo"
            />

          </div>

          <div className="home-card-content">

            <span className="home-play-now">
              PLAY NOW
            </span>

            <h2>LUDO</h2>

            <p>Roll. Move. Win.</p>

            <div className="home-card-arrow">
              →
            </div>

          </div>

        </button>


        {/* ================= HAND CRICKET ================= */}

        <button
          type="button"
          className="home-game-card home-cricket-card"
          disabled
        >

          <div className="home-card-art cricket-art">

            <div className="cricket-stars">
              ✦ ✦ ✦
            </div>

            <div className="cricket-bat">
              🏏
            </div>

            <div className="cricket-ball">
              🔴
            </div>

          </div>

          <div className="home-coming-soon">
            COMING
            <br />
            SOON
          </div>

          <div className="home-card-content">

            <h2>
              HAND
              <br />
              CRICKET
            </h2>

            <p>Time Your Shot!</p>

            <div className="home-card-arrow">
              →
            </div>

          </div>

        </button>


        {/* ================= UNO ================= */}

        <button
          type="button"
          className="home-game-card home-uno-card"
          disabled
        >

          <div className="home-card-art uno-art">

            <div className="uno-card uno-one">
              +4
            </div>

            <div className="uno-card uno-two">
              UNO
            </div>

            <div className="uno-card uno-three">
              +2
            </div>

          </div>

          <div className="home-coming-soon">
            COMING
            <br />
            SOON
          </div>

          <div className="home-card-content">

            <h2>UNO</h2>

            <p>Match. Play. Win.</p>

            <div className="home-card-arrow">
              →
            </div>

          </div>

        </button>


        {/* ================= BINGO ================= */}

        <button
          type="button"
          className="home-game-card home-bingo-card"
          disabled
        >

          <div className="home-card-art bingo-art">

            <div className="bingo-board">

              <strong>BINGO</strong>

              <span>28&nbsp; 13&nbsp; 16</span>
              <span>8&nbsp;&nbsp; 18&nbsp;&nbsp; 15</span>
              <span>22&nbsp; 11&nbsp; 9</span>

            </div>

            <div className="bingo-ball">
              <small>B</small>
              <strong>7</strong>
            </div>

          </div>

          <div className="home-coming-soon">
            COMING
            <br />
            SOON
          </div>

          <div className="home-card-content">

            <h2>BINGO</h2>

            <p>Numbers. Fun. Together.</p>

            <div className="home-card-arrow">
              →
            </div>

          </div>

        </button>

      </section>


      {/* ================= REWARD BANNER ================= */}

      <section className="home-reward-banner">

        <div className="home-reward-content">

          <h2>
            Play More
            <br />
            <span>Win More!</span>
          </h2>

          <p>
            Compete, earn rewards and climb the leaderboard.
          </p>

          <button
            type="button"
            className="home-reward-button"
          >
            View Rewards
            <span>→</span>
          </button>

        </div>


        <div className="home-trophy">

          <div className="home-trophy-rays">
            ✦
          </div>

          <div className="home-trophy-icon">
            🏆
          </div>

          <span className="home-confetti confetti-one">
            ◆
          </span>

          <span className="home-confetti confetti-two">
            ◆
          </span>

          <span className="home-confetti confetti-three">
            ◆
          </span>

        </div>

      </section>


      {/* ================= BOTTOM NAV ================= */}

      <nav className="home-bottom-nav">

        <button
          type="button"
          className="home-nav-item active"
        >
          <span>🏠</span>
          <small>Home</small>
        </button>


        <button
          type="button"
          className="home-nav-item"
        >
          <span>👥</span>
          <small>Friends</small>
        </button>


        <button
          type="button"
          className="home-play-button"
          onClick={onLudo}
        >

          <div>🎲</div>

          <small>Play</small>

        </button>


        <button
          type="button"
          className="home-nav-item"
        >
          <span>🏆</span>
          <small>Leaderboard</small>
        </button>


        <button
          type="button"
          className="home-nav-item"
          onClick={onProfile}
        >
          <span>👤</span>
          <small>Profile</small>
        </button>

      </nav>

    </div>
  );
}

export default HomeScreen;