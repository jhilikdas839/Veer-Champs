import React, { useState } from "react";

import GameViewport from "./component/GameViewport.jsx";

import SplashScreen from "./component/SplashScreen.jsx";
import Authentication from "./component/Authentication.jsx";
import OtpScreen from "./component/OtpScreen.jsx";
import Profile from "./component/Profile.jsx";
import DoneScreen from "./component/DoneScreen.jsx";
import HomeScreen from "./component/HomeScreen.jsx";
import LudoScreen from "./component/LudoScreen.jsx";


function App() {

  const [screen, setScreen] = useState("splash");


  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-hidden
        bg-[#020b24]
        text-white
      "
    >

      <GameViewport>

        {/* =====================================================
            SPLASH SCREEN
        ===================================================== */}

        {screen === "splash" && (
          <SplashScreen
            onGetStarted={() => setScreen("auth")}
          />
        )}


        {/* =====================================================
            AUTHENTICATION
        ===================================================== */}

        {screen === "auth" && (
          <Authentication
            onBack={() => setScreen("splash")}
            onContinue={() => setScreen("otp")}
          />
        )}


        {/* =====================================================
            OTP SCREEN
        ===================================================== */}

        {screen === "otp" && (
          <OtpScreen
            onBack={() => setScreen("auth")}
            onContinue={() => setScreen("profile")}
          />
        )}


        {/* =====================================================
            PROFILE SCREEN
        ===================================================== */}

        {screen === "profile" && (
          <Profile
            onBack={() => setScreen("otp")}
            onContinue={() => setScreen("done")}
          />
        )}


        {/* =====================================================
            DONE SCREEN
        ===================================================== */}

        {screen === "done" && (
          <DoneScreen
            onStartPlaying={() => setScreen("home")}
          />
        )}


        {/* =====================================================
            HOME SCREEN
        ===================================================== */}

        {screen === "home" && (
          <HomeScreen
            onProfile={() => setScreen("profile")}
            onLudo={() => setScreen("ludo")}
          />
        )}


        {/* =====================================================
            LUDO SCREEN
        ===================================================== */}

        {screen === "ludo" && (
          <LudoScreen
            onBack={() => setScreen("home")}
          />
        )}

      </GameViewport>

    </div>
  );
}


export default App;