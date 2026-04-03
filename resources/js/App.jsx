import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingLazy } from "./Components/Loading";
import { PlasmaBackground } from "./components/PlasmaBackground";
// Direct imports
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds on mount
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <LoadingLazy />;
  }

  return (
    <div className="flex flex-col min-h-screen relative">
     
      <div className="relative z-10 flex flex-col min-h-screen">

        <main className="flex-1 container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}