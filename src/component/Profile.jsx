import React, { useState } from "react";

import Logo from "../assets/logo.png";
import Hero from "../assets/Hero.png";

function Profile({ onBack, onContinue }) {

  // =========================================
  // PROFILE STATES
  // =========================================

  const [selectedAvatar, setSelectedAvatar] = useState(1);

  const [fullName, setFullName] = useState("");

  const [username, setUsername] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState("");

  const [termsAccepted, setTermsAccepted] = useState(false);


  // =========================================
  // AVATARS
  // =========================================

  // Abhi temporary avatars hain.
  // Baad mein real avatar images yahan add karenge.

  const avatars = [
    {
      id: 0,
      emoji: "👦",
      className: "avatar-boy",
    },
    {
      id: 1,
      emoji: "👧",
      className: "avatar-girl",
    },
    {
      id: 2,
      emoji: "😎",
      className: "avatar-cool",
    },
    {
      id: 3,
      emoji: "👩",
      className: "avatar-woman",
    },
    {
      id: 4,
      emoji: "🐼",
      className: "avatar-panda",
    },
    {
      id: 5,
      emoji: "🐱",
      className: "avatar-cat",
    },
  ];


  // =========================================
  // USERNAME CHANGE
  // =========================================

  const handleUsernameChange = (event) => {

    const value = event.target.value
      .toLowerCase()
      .replace(/\s/g, "")
      .replace(/[^a-z0-9_]/g, "");

    setUsername(value);
  };


  // =========================================
  // CONTINUE
  // =========================================

  const handleContinue = () => {

    // Full Name validation
    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }


    // Username validation
    if (!username.trim()) {
      alert("Please enter a username.");
      return;
    }


    // Username minimum length
    if (username.trim().length < 3) {
      alert("Username must contain at least 3 characters.");
      return;
    }


    // DOB validation
    if (!dateOfBirth) {
      alert("Please select your date of birth.");
      return;
    }


    // Terms validation
    if (!termsAccepted) {
      alert("Please accept Terms & Conditions.");
      return;
    }


    // Send profile data to App.jsx
    onContinue({
      username: username,
      selectedAvatar: selectedAvatar,
      fullName: fullName,
      dateOfBirth: dateOfBirth,
    });
  };


  return (

    <div className="profile-page">


      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="profile-glow profile-glow-blue"></div>


      {/* =================================================
          FLOATING DICE
      ================================================= */}

      <div className="profile-floating-dice profile-dice-one">
        ⚄
      </div>

      <div className="profile-floating-dice profile-dice-two">
        ⚂
      </div>

      <div className="profile-floating-dice profile-dice-three">
        ⚅
      </div>



      {/* =================================================
          HEADER
      ================================================= */}

      <header className="profile-header">


        {/* ===============================================
            BACK BUTTON
        =============================================== */}

        <button
          type="button"
          className="profile-back-button"
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

        <div className="profile-progress">


          {/* MOBILE */}

          <div className="profile-progress-step completed">

            <div className="profile-progress-dot">
              ✓
            </div>

            <span>
              Mobile
            </span>

          </div>


          <div className="profile-progress-line completed-line"></div>


          {/* OTP */}

          <div className="profile-progress-step completed">

            <div className="profile-progress-dot">
              ✓
            </div>

            <span>
              OTP
            </span>

          </div>


          <div className="profile-progress-line active-line"></div>


          {/* PROFILE */}

          <div className="profile-progress-step active">

            <div className="profile-progress-dot">
              •
            </div>

            <span>
              Profile
            </span>

          </div>


          <div className="profile-progress-line"></div>


          {/* DONE */}

          <div className="profile-progress-step">

            <div className="profile-progress-dot"></div>

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
          className="profile-help-button"
        >
          Need Help?
        </button>

      </header>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main className="profile-content">


        {/* =================================================
            LOGO
        ================================================= */}

        <div className="profile-logo-container">

          <img
            src={Logo}
            alt="Ludo Logo"
            className="profile-logo"
          />

        </div>


        {/* =================================================
            HEADING
        ================================================= */}

        <section className="profile-heading">

          <h1>
            Create Your <span>Profile</span>
          </h1>

          <p>
            Tell us a bit about yourself
          </p>

        </section>


        {/* =================================================
            AVATAR HEADER
        ================================================= */}

        <div className="avatar-header">

          <h2>
            Choose an Avatar
          </h2>

          <button
            type="button"
            className="view-more-button"
          >
            View More
            <span>
              ›
            </span>
          </button>

        </div>


        {/* =================================================
            AVATAR LIST
        ================================================= */}

        <div className="avatar-list">

          {avatars.map((avatar) => (

            <button
              key={avatar.id}
              type="button"
              className={`avatar-item ${
                selectedAvatar === avatar.id
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSelectedAvatar(avatar.id)
              }
              aria-label={`Select avatar ${avatar.id + 1}`}
            >

              <div
                className={`avatar-circle ${avatar.className}`}
              >

                <span>
                  {avatar.emoji}
                </span>

              </div>


              {/* Selected check */}

              {selectedAvatar === avatar.id && (

                <div className="avatar-check">
                  ✓
                </div>

              )}

            </button>

          ))}

        </div>


        {/* =================================================
            FULL NAME
        ================================================= */}

        <div className="profile-field">

          <label htmlFor="full-name">
            Full Name
          </label>


          <div className="profile-input">

            <span className="field-icon">
              ♟
            </span>


            <input
              id="full-name"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(event) =>
                setFullName(event.target.value)
              }
            />

          </div>

        </div>


        {/* =================================================
            USERNAME
        ================================================= */}

        <div className="profile-field">

          <label htmlFor="username">
            Username
          </label>


          <div className="profile-input">

            <span className="field-icon username-icon">
              @
            </span>


            <input
              id="username"
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={handleUsernameChange}
              maxLength={20}
            />


            {/* Available */}

            {username.length >= 3 && (

              <div className="username-available">

                <span>
                  ✓
                </span>

                Available

              </div>

            )}

          </div>

        </div>


        {/* =================================================
            DATE OF BIRTH
        ================================================= */}

        <div className="profile-field">

          <label htmlFor="date-of-birth">
            Date of Birth
          </label>


          <div className="profile-input">

            <span className="field-icon calendar-icon">
              ▣
            </span>


            <input
              id="date-of-birth"
              type="date"
              value={dateOfBirth}
              onChange={(event) =>
                setDateOfBirth(event.target.value)
              }
            />

          </div>

        </div>


        {/* =================================================
            TERMS & CONDITIONS
        ================================================= */}

        <label className="terms-row">


          {/* Hidden native checkbox */}

          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(event) =>
              setTermsAccepted(event.target.checked)
            }
          />


          {/* Custom checkbox */}

          <span className="custom-checkbox">

            {termsAccepted && "✓"}

          </span>


          {/* Terms text */}

          <span className="terms-text">

            I agree to the

            <a
              href="#terms"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              Terms &amp; Conditions
            </a>

            and

            <a
              href="#privacy"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              Privacy Policy
            </a>

          </span>

        </label>


        {/* =================================================
            CONTINUE BUTTON
        ================================================= */}

        <button
          type="button"
          className="profile-continue-button"
          onClick={handleContinue}
        >

          <span>
            Continue
          </span>

          <strong>
            →
          </strong>

        </button>

      </main>


      {/* =================================================
          HERO / LUDO BOARD
      ================================================= */}

      <section className="profile-hero">

        <div className="profile-hero-glow"></div>


        <img
          src={Hero}
          alt="Ludo Game Board"
          className="profile-hero-image"
        />

      </section>


      {/* =================================================
          BOTTOM BRANDING
      ================================================= */}

      <div className="profile-bottom-brand">

        <span></span>

        <p>
          PLAY&nbsp; • &nbsp;CONNECT&nbsp; • &nbsp;WIN
        </p>

        <span></span>

      </div>

    </div>
  );
}

export default Profile;